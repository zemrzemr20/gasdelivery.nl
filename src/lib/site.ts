/** Canoniek: apex (zonder www). Op Vercel: NEXT_PUBLIC_SITE_URL=https://gasdelivery.nl */
const rawSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://gasdelivery.nl").replace(/\/$/, "");

/** www → apex zodat sitemap/OG/JSON-LD overal hetzelfde zijn */
export const SITE_URL = rawSiteUrl.replace(/^https:\/\/www\.gasdelivery\.nl$/i, "https://gasdelivery.nl");

export const SITE_NAME = "Gasdelivery.nl";

export const SITE_DESCRIPTION =
  "Lachgas tanks aan huis in Amsterdam en omgeving. 24/7 bereikbaar via WhatsApp en telefoon. Transparante prijs, snelle levering en persoonlijke service.";

export const SITE_KEYWORDS = [
  "lachgas",
  "lachgas Amsterdam",
  "lachgas bestellen amsterdam",
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
