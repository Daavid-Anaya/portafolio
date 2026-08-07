param(
  [string]$Namespace = "axiwklk6zpoi",
  [string]$Bucket = "portafolio-digital",
  [string]$Region = "mx-queretaro-1",
  [string]$SourceDir = "dist",
  [string]$Profile = "",
  [switch]$DryRun,
  [switch]$SkipBuild
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Get-ContentType {
  param([string]$Path)

  $extension = [System.IO.Path]::GetExtension($Path).ToLowerInvariant()

  switch ($extension) {
    ".html" { "text/html; charset=utf-8"; break }
    ".css" { "text/css; charset=utf-8"; break }
    ".js" { "text/javascript; charset=utf-8"; break }
    ".json" { "application/json; charset=utf-8"; break }
    ".xml" { "application/xml; charset=utf-8"; break }
    ".txt" { "text/plain; charset=utf-8"; break }
    ".svg" { "image/svg+xml"; break }
    ".png" { "image/png"; break }
    ".jpg" { "image/jpeg"; break }
    ".jpeg" { "image/jpeg"; break }
    ".webp" { "image/webp"; break }
    ".ico" { "image/x-icon"; break }
    default { "application/octet-stream" }
  }
}

function Invoke-CheckedCommand {
  param(
    [string]$Command,
    [string[]]$Arguments
  )

  & $Command @Arguments

  if ($LASTEXITCODE -ne 0) {
    throw "Command failed with exit code ${LASTEXITCODE}: $Command $($Arguments -join ' ')"
  }
}

if (-not $SkipBuild) {
  Write-Host "Building site..."
  Invoke-CheckedCommand -Command "npm" -Arguments @("run", "build")
}

$sourceRoot = (Resolve-Path -LiteralPath $SourceDir -ErrorAction SilentlyContinue)

if (-not $sourceRoot) {
  throw "Source directory '$SourceDir' was not found. Run 'npm run build' first or provide -SourceDir."
}

$sourceRootPath = $sourceRoot.Path
$sourceRootPrefix = $sourceRootPath.TrimEnd([System.IO.Path]::DirectorySeparatorChar, [System.IO.Path]::AltDirectorySeparatorChar) + [System.IO.Path]::DirectorySeparatorChar
$files = @(Get-ChildItem -LiteralPath $sourceRootPath -File -Recurse)

if ($files.Count -eq 0) {
  throw "Source directory '$sourceRootPath' does not contain any files to upload."
}

if (-not $DryRun -and -not (Get-Command "oci" -ErrorAction SilentlyContinue)) {
  throw "OCI CLI was not found. Install and configure it first: https://docs.oracle.com/en-us/iaas/Content/API/SDKDocs/cliinstall.htm"
}

Write-Host "Preparing to upload $($files.Count) file(s) to bucket '$Bucket' in namespace '$Namespace'."

foreach ($file in $files) {
  $relativePath = $file.FullName.Substring($sourceRootPrefix.Length)
  $objectName = $relativePath.Replace([System.IO.Path]::DirectorySeparatorChar, "/").Replace([System.IO.Path]::AltDirectorySeparatorChar, "/")
  $contentType = Get-ContentType -Path $file.FullName

  if ($DryRun) {
    Write-Host "DRY RUN: $($file.FullName) -> $objectName [$contentType]"
    continue
  }

  $arguments = @(
    "os", "object", "put",
    "--namespace-name", $Namespace,
    "--bucket-name", $Bucket,
    "--name", $objectName,
    "--file", $file.FullName,
    "--content-type", $contentType,
    "--force"
  )

  if ($Profile) {
    $arguments += @("--profile", $Profile)
  }

  if ($Region) {
    $arguments += @("--region", $Region)
  }

  Invoke-CheckedCommand -Command "oci" -Arguments $arguments
}

$objectStorageBaseUrl = "https://$Namespace.objectstorage.$Region.oci.customer-oci.com/n/$Namespace/b/$Bucket/o"
$deploymentUrl = "$objectStorageBaseUrl/index.html"

Write-Host "Deployment URL: $deploymentUrl"
Write-Host "Object Storage prefix: $objectStorageBaseUrl/"

if ($DryRun) {
  Write-Host "Dry run completed. No files were uploaded."
} else {
  Write-Host "Deployment completed."
}
