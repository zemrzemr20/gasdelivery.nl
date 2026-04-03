import { PHONE_TEL } from "@/lib/contact";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";
import { JsonLd } from "./JsonLd";

const telE164 = PHONE_TEL.replace("tel:", "");

export function OrganizationSchema() {
  const org = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: telE164,
    email: "info@gasdelivery.nl",
    image: absoluteUrl("/gasdelivery-background.png"),
    priceRange: "€€",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Amsterdam en omgeving",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "nl-NL",
  };

  return (
    <>
      <JsonLd data={org} />
      <JsonLd data={website} />
    </>
  );
}
