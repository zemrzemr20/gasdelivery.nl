import { headers } from "next/headers";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";

function lamHost(host: string) {
  const h = host.split(",")[0]?.trim().toLowerCase() ?? "";
  return h === "lachgasbezorgenamsterdam.nl" || h === "www.lachgasbezorgenamsterdam.nl";
}

export async function AppChrome({ children }: { children: React.ReactNode }) {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "";

  if (lamHost(host)) {
    return <>{children}</>;
  }

  return (
    <>
      <OrganizationSchema />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
