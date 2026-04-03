export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-accent">
          lachgas bestellen Amsterdam?
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl sm:leading-[1.08] lg:text-6xl">
          Snel geleverd.{" "}
          <span className="text-muted">Geen gedoe met lange wachttijden of communicatie.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-muted sm:text-lg">
          Bestel wanneer het jou uitkomt. Wij leveren lachgas tanks van de beste kwaliteit in Amsterdam en omgeving — helder tarief, vriendelijke service.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#werkwijze"
            className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-accent-hover sm:w-auto"
          >
            Start je bestelling
          </a>
          <a
            href="#voordelen"
            className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full border border-[var(--border)] bg-surface-elevated px-8 py-3.5 text-base font-medium text-foreground shadow-sm transition hover:border-foreground/20 hover:bg-surface sm:w-auto"
          >
            Ontdek de voordelen
          </a>
        </div>
        <div className="mx-auto mt-16 flex max-w-xs flex-col items-center gap-8 border-t border-[var(--border)] pt-10 sm:max-w-sm">
          {[
            { value: "24/7", label: "Beschikbaar" },
            { value: "100%", label: "Transparante prijs" },
            { value: "Amsterdam", label: "Werkgebied" },
          ].map((stat) => (
            <div key={stat.label} className="flex w-full flex-col items-center text-center">
              <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
