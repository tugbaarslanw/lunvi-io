import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1017] text-white">
      {/* HEADER (lunvi.io mor bandı) */}
      <header className="sticky top-0 z-30 bg-gradient-to-r from-[#1f2030] via-[#222c52] to-[#305983] border-b border-white/5">
        <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between px-6">
          {/* logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Lunvi"
              width={120}
              height={38}
              priority
              className="h-9 w-auto"
            />
          </div>

          {/* nav + actions */}
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-5 text-sm text-white/80 md:flex">
              <a href="#" className="hover:text-white transition-colors">
                Platform
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Server-side
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Workflows
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Pricing
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="hidden rounded-lg border border-white/15 px-3.5 py-1.5 text-xs text-white/70 hover:border-white/40 md:inline-flex">
                Sign in
              </button>
              <button className="rounded-lg bg-white px-4 py-1.5 text-xs font-medium text-[#0f1017] hover:bg-white/90">
                Get started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-14 pb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/45">
          <span>customer data</span>
          <span className="h-1 w-1 rounded-full bg-emerald-400/80" />
          <span>server-side</span>
        </div>

        <div className="mt-6 max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Route, enrich, and deliver your marketing data reliably.
          </h1>
          <p className="mt-4 text-base text-white/60 md:text-lg">
            Client-side kısıtlamaları, tarayıcı limitlerini ve farklı 3rd party
            entegrasyonları tek bir akışta toplayıp yönetmek için tasarlanmış ayrı
            bir Lunvi hattı. Aynı organizasyon içinde ama izole domain.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <button className="rounded-lg bg-white px-5 py-2 text-sm font-medium text-[#0f1017] hover:bg-white/90">
            Launch dashboard
          </button>
          <button className="text-sm text-white/60 hover:text-white/90">
            View documentation →
          </button>
          <p className="text-xs text-white/25">
            No credit card. Connect sources in minutes.
          </p>
        </div>
      </section>

      {/* STRIP (küçük bilgi şeridi) */}
      <section className="mx-auto flex w-full max-w-6xl flex-wrap gap-4 px-6 pb-8 text-sm text-white/40 md:flex-nowrap">
        <div className="flex-1 rounded-lg border border-white/5 bg-white/2 p-4">
          <p className="text-xs uppercase tracking-wide text-white/30">Edge-first</p>
          <p className="mt-1 text-sm text-white/70">
            Avrupa ve US bölgelerinde edge datacenter.
          </p>
        </div>
        <div className="flex-1 rounded-lg border border-white/5 bg-white/2 p-4">
          <p className="text-xs uppercase tracking-wide text-white/30">Real-time</p>
          <p className="mt-1 text-sm text-white/70">
            Eventler anlık olarak hedef sisteme taşınır.
          </p>
        </div>
        <div className="flex-1 rounded-lg border border-white/5 bg-white/2 p-4">
          <p className="text-xs uppercase tracking-wide text-white/30">Isolated</p>
          <p className="mt-1 text-sm text-white/70">
            lunvilabs.com’dan ayrı deploy & ayrı domain.
          </p>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-14">
        <div className="flex items-center justify-between gap-4 pb-6">
          <div>
            <h2 className="text-lg font-semibold">What you can run on lunvi.io</h2>
            <p className="mt-1 text-sm text-white/50">
              Tracking, webhooks, audiences ve 3rd party sink’ler.
            </p>
          </div>
          <button className="text-xs text-white/40 hover:text-white/80">
            See all endpoints →
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-[#131520] p-5">
            <p className="text-xs uppercase tracking-wide text-emerald-200/70">
              Server-side tracking
            </p>
            <h3 className="mt-3 text-base font-semibold">Bypass ad blockers</h3>
            <p className="mt-2 text-sm text-white/45">
              Olayları sunucudan göndererek tarayıcı engellemelerini aşın.
            </p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-[#131520] p-5">
            <p className="text-xs uppercase tracking-wide text-sky-200/70">
              Webhooks
            </p>
            <h3 className="mt-3 text-base font-semibold">Reliable deliveries</h3>
            <p className="mt-2 text-sm text-white/45">
              Yeniden denemeli gönderim, imza doğrulama ve loglama.
            </p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-[#131520] p-5">
            <p className="text-xs uppercase tracking-wide text-purple-200/70">
              Destinations
            </p>
            <h3 className="mt-3 text-base font-semibold">Send anywhere</h3>
            <p className="mt-2 text-sm text-white/45">
              Meta, GA4, CRM veya özel endpoint’lere aynı formatta gönderim.
            </p>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-14">
        <div className="rounded-2xl border border-white/5 bg-[#131520] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4">
            <div>
              <h2 className="text-lg font-semibold">Integrations</h2>
              <p className="text-sm text-white/45">
                Most common ad & analytics destinations are prebuilt.
              </p>
            </div>
            <button className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/80 hover:border-white/30">
              View connection guide
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/40">
            <span className="rounded-full bg-white/5 px-3 py-1">Meta CAPI</span>
            <span className="rounded-full bg-white/5 px-3 py-1">Google Analytics 4</span>
            <span className="rounded-full bg-white/5 px-3 py-1">TikTok Events API</span>
            <span className="rounded-full bg-white/5 px-3 py-1">HubSpot</span>
            <span className="rounded-full bg-white/5 px-3 py-1">Custom Webhook</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-8 text-xs text-white/25">
        <span>© {new Date().getFullYear()} lunvi.io</span>
        <span>Separate deployment from lunvilabs.com</span>
      </footer>
    </main>
  );
}
