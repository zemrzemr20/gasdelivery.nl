/** Zet in productie: NEXT_PUBLIC_SITE_URL=https://gasdelivery.nl */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://gasdelivery.nl").replace(/\/$/, "");

export const SITE_NAME = "Gasdelivery.nl";

export const SITE_DESCRIPTION =
  "Lachgas tanks aan huis in Amsterdam en omgeving. 24/7 bereikbaar via WhatsApp en telefoon. Transparante prijs, snelle levering en persoonlijke service.";

export const SITE_KEYWORDS = [
  "lachgas",
  "lachgas Amsterdam",
  "lachgas bezorgen",
  "lachgas aan huis",
  "lachgas levering",
  "Gasdelivery",
  "Amsterdam",
  "lachgas bestellen",
  "24/7 lachgas",
  "lachgas tank",
  "lachgas 2kg",
];

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
