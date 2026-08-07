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
    badgeImage: undefined,
    badgeAlt: "Distintivo de certificación Programa ONE Tech Foundation G9 - Back End",
    status: "earned",
  },
  {
    id: "one-tech-advanced-2026",
    title: "Programa ONE Tech Advanced",
    issuer: "Oracle Next Education",
    date: "2026-05-31",
    credentialUrl: "https://app.aluracursos.com/program/certificate/7157e8c6-5c62-46fe-a3da-5d698103bbc0?lang",
    badgeImage: undefined,
    badgeAlt: "Distintivo de certificación Programa ONE Tech Advanced",
    status: "earned",
  },
  {
    id: "oracle-oci-2025",
    title: "Oracle Cloud Infrastructure 2025 Foundations Associate",
    issuer: "Oracle",
    date: "2025-05-31",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=04734A377E39BD98FB000CE483B534FCD52A7618CC99F09EE182A941337C0568",
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
    badgeImage: "/badges/OCI26FNDCFA.png",
    badgeAlt: "Distintivo de certificación Oracle Cloud Infrastructure 2026 Foundations Associate",
    status: "earned",
  },
  {
    id: "oracle-oci-ai-2026",
    title: "Oracle Cloud Infrastructure AI Foundations Associate 2026",
    issuer: "Oracle",
    date: "2026-08-31",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=05A8F0F838ED7BE033CC315611DECEA9F7BC3FEC8939409BDA5CCB58D4F9DB27",
    badgeImage: undefined,
    badgeAlt: "Distintivo de certificación Oracle Cloud Infrastructure AI Foundations Associate 2026 (próximamente)",
    status: "in-progress",
  },
  {
    id: "oracle-agentic-ai-2026",
    title: "Oracle Agentic AI Foundations Associate 2026",
    issuer: "Oracle",
    date: "2026-12-31",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=05A8F0F838ED7BE033CC315611DECEA9F7BC3FEC8939409BDA5CCB58D4F9DB27",
    badgeImage: undefined,
    badgeAlt: "Distintivo de certificación Oracle Agentic AI Foundations Associate 2026 (próximamente)",
    status: "in-progress",
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2026-08-31",
    credentialUrl: undefined,
    badgeImage: undefined,
    badgeAlt: "Distintivo de certificación AWS Certified Cloud Practitioner (próximamente)",
    status: "in-progress",
  },
];
