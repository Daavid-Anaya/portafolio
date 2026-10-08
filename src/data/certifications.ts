// Certifications data — single source of truth for the certifications section
const CERT_STATUS = {
  EARNED: "earned",
  IN_PROGRESS: "in-progress",
} as const;

export type CertificationStatus = (typeof CERT_STATUS)[keyof typeof CERT_STATUS];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string; // ISO date string (YYYY-MM-DD)
  credentialUrl?: string;
  credentialVerifiable?: boolean; // True only for confirmed issuer verification records; defaults to viewing.
  badgeImage?: string; // path to badge image in public/
  badgeAlt: string;
  status: CertificationStatus;
}

export const certifications: Certification[] = [
  {
    id: "oracle-one-java",
    title: "Oracle ONE — Backend con Java y Spring Boot",
    issuer: "Oracle Next Education",
    date: "2026-03-07",
    credentialUrl: "https://app.aluracursos.com/degree/certificate/e4ed2232-bca4-4d9c-9cf0-a1f4b81cfd18?lang",
    credentialVerifiable: false,
    badgeImage: "/badges/badge-spring.png",
    badgeAlt: "Distintivo del programa Oracle ONE — Backend con Java y Spring Boot",
    status: "earned",
  },
  {
    id: "one-tech-foundation-2025",
    title: "Programa ONE Tech Foundation G9 - Back End",
    issuer: "Oracle Next Education",
    date: "2026-03-07",
    credentialUrl: "https://app.aluracursos.com/program/certificate/4da4b996-d626-410f-ba57-04a6ea3c4b9f?lang",
    credentialVerifiable: false,
    badgeImage: undefined,
    badgeAlt: "Distintivo de certificación Programa ONE Tech Foundation G9 - Back End",
    status: "earned",
  },
  {
    id: "oracle-oci-2025",
    title: "Oracle Cloud Infrastructure 2025 Foundations Associate",
    issuer: "Oracle",
    date: "2025-05-31",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=04734A377E39BD98FB000CE483B534FCD52A7618CC99F09EE182A941337C0568",
    credentialVerifiable: true,
    badgeImage: "/badges/OCI25FNDCFA.png",
    badgeAlt: "Distintivo de certificación Oracle Cloud Infrastructure 2025 Foundations Associate",
    status: "earned",
  },
  {
    id: "oracle-oci-2026",
    title: "Oracle Cloud Infrastructure 2026 Foundations Associate",
    issuer: "Oracle",
    date: "2026-06-26",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=05A8F0F838ED7BE033CC315611DECEA9F7BC3FEC8939409BDA5CCB58D4F9DB27",
    credentialVerifiable: true,
    badgeImage: "/badges/OCI26FNDCFA.png",
    badgeAlt: "Distintivo de certificación Oracle Cloud Infrastructure 2026 Foundations Associate",
    status: "earned",
  },
  {
    id: "oracle-oci-ai-2026",
    title: "Oracle Cloud Infrastructure AI Foundations Associate 2026",
    issuer: "Oracle",
    date: "2026-08-22",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=62DBCDDC83295B41513418056188B19136F009B2D476E74FC750421091776DB8",
    credentialVerifiable: true,
    badgeImage: "/badges/OCI26AICFA.png",
    badgeAlt: "Distintivo de certificación Oracle Cloud Infrastructure AI Foundations Associate 2026",
    status: "earned",
  },
  /*{
    id: "oracle-agentic-ai-2026",
    title: "Oracle Agentic AI Foundations Associate 2026",
    issuer: "Oracle",
    date: "2026-12-31",
    credentialUrl: "",
    badgeImage: undefined,
    badgeAlt: "Distintivo de certificación Oracle Agentic AI Foundations Associate 2026 (En preparación)",
    status: "in-progress",
  },*/
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2026-08-31",
    credentialUrl: undefined,
    badgeImage: undefined,
    badgeAlt: "Distintivo de certificación AWS Certified Cloud Practitioner (En preparación)",
    status: "in-progress",
  },
  /*{
    id: "aws-ai-practitioner",
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "2026-08-31",
    credentialUrl: undefined,
    badgeImage: undefined,
    badgeAlt: "Distintivo de certificación AWS Certified AI Practitioner (En preparación)",
    status: "in-progress",
  },*/
];
