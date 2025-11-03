import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0916] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-30 bg-gradient-to-r from-[#4d2da3] via-[#5f3dc1] to-[#8d5ef3]">
        <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between px-6">
          {/* sol logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Lunvi"
              width={118}
              height={36}
              priority
              className="h-9 w-auto"
            />
            <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/60">
              lunvi.io
            </span>
          </div>

          {/* sağ nav */}
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-5 text-sm text-white/90 md:flex">
              <a href="#" className="hover:text-white transition">
                Product
              </a>
              <a href="#" className="hover:text-white transition">
                Solutions
              </a>
              <a href="#" className="hover:text-white transition">
                Integrations
              </a>
              <a href="#" className="hover:text-white transition">
                Pricing
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 px-4 py-1.5 text-xs hover:bg-white/15"
              >
                Docs
              </a>
            </nav>
            <button className="rounded-full bg-white px-5 py-1.5 text-xs font-semibold text-[#211538] hover:bg-white/90">
              Start Demo
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#8d5ef3] via-[#5a3fb8] to-[#251936]">
        {/* arka plan balonlar */}
        <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-10 h-[520px] w-[520px] rounded-full bg-[#b998ff]/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-44 h-80 w-80 rounded-full bg-[#a7ffe3]/5 blur-3xl" />

        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-14 lg:flex-row">
          {/* sol metin */}
          <div className="relative z-10 max-w-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">
              premium gateway • server-side
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] md:text-5xl">
              Premium gateway
              <br />
              for server-side
              <br />
              conversions APIs.
            </h1>
            <p className="mt-5 text-base text-white/80 md:text-[15.5px]">
              Managed sGTM benzeri kurulum ile Meta Conversions API ve GA4
              Measurement benzeri teslimatlarınızı tek panelden yönetin. Dedup,
              Consent Mode v2 uyumu ve canlı log / debugger akışıyla birlikte.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#1e152f] shadow-[0_16px_40px_rgba(0,0,0,0.15)] hover:bg-white/95">
                Start Demo
              </button>
              <button className="rounded-full border border-white/25 bg-white/10 px-6 py-2.5 text-sm text-white hover:bg-white/15">
                See Pricing
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/85">
              <span className="rounded-full bg-white/10 px-3 py-1">EU Hosting</span>
              <span className="rounded-full bg-white/10 px-3 py-1">GDPR / KVKK</span>
              <span className="rounded-full bg-white/10 px-3 py-1">99.9% uptime</span>
              <span className="rounded-full bg-white/10 px-3 py-1">
                Consent Mode v2
              </span>
            </div>

            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/45">
                Optimized for
              </p>
              <div className="mt-3 flex items-center gap-4 text-sm text-white/80">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                  Meta CAPI
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                  GA4
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                  TikTok
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                  Google Ads
                </span>
              </div>
            </div>
          </div>

          {/* sağ kartlar */}
          <div className="relative z-10 flex flex-1 flex-col gap-5 lg:max-w-sm">
            <div className="rounded-3xl border border-white/4 bg-white/10 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur">
              <div className="mb-3 h-7 w-7 rounded-lg bg-[#c9bbff]" />
              <h2 className="text-sm font-semibold">Key capabilities</h2>
              <p className="mt-2 text-sm text-white/75">
                Custom domain (CNAME), managed SSL, bölgesel deploy ve gerçek zamanlı
                teslimat metrikleri.
              </p>
            </div>

            <div className="rounded-3xl border border-white/4 bg-white/10 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur">
              <div className="mb-3 h-7 w-7 rounded-lg bg-[#a6ffd7]" />
              <h2 className="text-sm font-semibold">Use cases</h2>
              <p className="mt-2 text-sm text-white/75">
                E-commerce event’leri, lead enrichment, ajans çoklu-tenant kurulumları
                için hazır preset’ler.
              </p>
            </div>

            <div className="rounded-3xl border border-white/4 bg-white/10 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur">
              <div className="mb-3 h-7 w-7 rounded-lg bg-[#ffe49c]" />
              <h2 className="text-sm font-semibold">Health at a glance</h2>
              <p className="mt-2 text-sm text-white/75">
                Match quality ↑ • Dedup oranı yüksek • Son 24h error düşüklüğü • P95
                latency stabil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* alt içerik placeholder */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <h2 className="text-lg font-semibold text-white/90">Product</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/45">
          Buraya lunvilabs.com’daki alt bölümleri kendi cümlelerinle kopyalayabilirsin.
          Yapı aynı olduğu için sadece metinleri değiştirmen yeterli olacak.
        </p>
      </section>

      <footer className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-8 text-xs text-white/25">
        <span>© {new Date().getFullYear()} lunvi.io</span>
        <span>Separate from lunvilabs.com</span>
      </footer>
    </main>
  );
}
