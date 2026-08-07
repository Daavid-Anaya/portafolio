#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const defaults = {
  namespace: "axiwklk6zpoi",
  bucket: "portafolio-digital",
  region: "mx-queretaro-1",
  sourceDir: "dist",
  profile: "",
  dryRun: false,
  skipBuild: false,
};

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".ico", "image/x-icon"],
]);

const knownValueFlags = new Set(["namespace", "bucket", "region", "source-dir", "profile"]);
const knownBooleanFlags = new Set(["dry-run", "skip-build"]);

function parseArgs(argv) {
  const options = applyNpmConfig({ ...defaults });

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (!arg.startsWith("--")) {
      throw new Error(`Unexpected argument '${arg}'. Use --flag value syntax.`);
    }

    const [rawName, inlineValue] = arg.slice(2).split(/=(.*)/s, 2);

    if (knownBooleanFlags.has(rawName)) {
      if (inlineValue !== undefined) {
        throw new Error(`Flag '--${rawName}' does not accept a value.`);
      }

      options[toCamelCase(rawName)] = true;
      continue;
    }

    if (!knownValueFlags.has(rawName)) {
      throw new Error(`Unknown flag '--${rawName}'.`);
    }

    const value = inlineValue ?? argv[index + 1];

    if (!value || value.startsWith("--")) {
      throw new Error(`Flag '--${rawName}' requires a value.`);
    }

    if (inlineValue === undefined) {
      index += 1;
    }

    options[toCamelCase(rawName)] = value;
  }

  return options;
}

function applyNpmConfig(options) {
  for (const flag of knownValueFlags) {
    const value = process.env[`npm_config_${flag.replaceAll("-", "_")}`];

    if (value) {
      options[toCamelCase(flag)] = value;
    }
  }

  for (const flag of knownBooleanFlags) {
    const value = process.env[`npm_config_${flag.replaceAll("-", "_")}`];

    if (value !== undefined) {
      options[toCamelCase(flag)] = value !== "false";
    }
  }

  return options;
}

function toCamelCase(value) {
  return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function getContentType(filePath) {
  return mimeTypes.get(path.extname(filePath).toLowerCase()) ?? "application/octet-stream";
}

function getFiles(rootDir) {
  const entries = readdirSync(rootDir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getFiles(fullPath));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

function runChecked(command, args, options = {}) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
    ...options,
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(`Command failed with exit code ${result.status}: ${command} ${args.join(" ")}`);
  }
}

function commandExists(command, args) {
  const result = spawnSync(command, args, {
    stdio: "ignore",
    shell: process.platform === "win32",
  });

  return !result.error && result.status === 0;
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const cwd = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

  if (!options.skipBuild) {
    console.log("Building site...");
    runChecked("npm", ["run", "build"], { cwd });
  }

  const sourceRoot = path.resolve(cwd, options.sourceDir);

  if (!existsSync(sourceRoot) || !statSync(sourceRoot).isDirectory()) {
    throw new Error(`Source directory '${options.sourceDir}' was not found. Run 'npm run build' first or provide --source-dir.`);
  }

  const files = getFiles(sourceRoot);

  if (files.length === 0) {
    throw new Error(`Source directory '${sourceRoot}' does not contain any files to upload.`);
  }

  if (!options.dryRun && !commandExists("oci", ["--version"])) {
    throw new Error(
      "OCI CLI was not found or is not available on PATH. Install and configure it first: https://docs.oracle.com/en-us/iaas/Content/API/SDKDocs/cliinstall.htm"
    );
  }

  console.log(`Preparing to upload ${files.length} file(s) to bucket '${options.bucket}' in namespace '${options.namespace}'.`);

  for (const file of files) {
    const objectName = path.relative(sourceRoot, file).split(path.sep).join("/");
    const contentType = getContentType(file);

    if (options.dryRun) {
      console.log(`DRY RUN: ${file} -> ${objectName} [${contentType}]`);
      continue;
    }

    const args = [
      "os",
      "object",
      "put",
      "--namespace-name",
      options.namespace,
      "--bucket-name",
      options.bucket,
      "--name",
      objectName,
      "--file",
      file,
      "--content-type",
      contentType,
      "--force",
    ];

    if (options.profile) {
      args.push("--profile", options.profile);
    }

    if (options.region) {
      args.push("--region", options.region);
    }

    runChecked("oci", args);
  }

  const objectStorageBaseUrl = `https://${options.namespace}.objectstorage.${options.region}.oci.customer-oci.com/n/${options.namespace}/b/${options.bucket}/o`;
  const deploymentUrl = `${objectStorageBaseUrl}/index.html`;

  console.log(`Deployment URL: ${deploymentUrl}`);
  console.log(`Object Storage prefix: ${objectStorageBaseUrl}/`);
  console.log(options.dryRun ? "Dry run completed. No files were uploaded." : "Deployment completed.");
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
