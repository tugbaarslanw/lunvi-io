// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050816] via-[#070b1f] to-[#0b1121] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#060918]/90 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-6">
          {/* logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Lunvi"
              width={128}
              height={40}
              priority
              className="h-9 w-auto"
            />
            <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/45">
              lunvi.io
            </span>
          </div>

          {/* nav */}
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-5 text-sm text-white/80 md:flex">
              <a href="#product" className="hover:text-white transition">
                Product
              </a>
              <a href="#solutions" className="hover:text-white transition">
                Solutions
              </a>
              <a href="#integrations" className="hover:text-white transition">
                Integrations
              </a>
              <a href="#pricing" className="hover:text-white transition">
                Pricing
              </a>
              <a
                href="#docs"
                className="rounded-full bg-white/5 px-4 py-1.5 text-xs hover:bg-white/10"
              >
                Docs
              </a>
            </nav>
            <button className="rounded-full bg-[#5b5fff] px-5 py-2 text-xs font-semibold text-white shadow-[0_15px_40px_rgba(78,81,255,0.25)] hover:bg-[#6b6eff]">
              Start Demo
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* madgicx vari arkaplan baloncukları */}
        <div className="pointer-events-none absolute -right-10 top-10 h-64 w-64 rounded-full bg-[#4f46e5]/10 blur-3xl" />
        <div className="pointer-events-none absolute left-[-120px] top-40 h-72 w-72 rounded-full bg-[#06b6d4]/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-120px] top-72 h-72 w-72 rounded-full bg-[#f97316]/5 blur-[110px]" />

        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-14 lg:flex-row">
          {/* LEFT side */}
          <div className="relative z-10 max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.5em] text-white/50">
              premium gateway • server-side
            </p>

            {/* başlık, ikinci satır mor */}
            <h1 className="mt-5 text-4xl font-semibold leading-[1.03] md:text-5xl">
              <span className="text-white">The premium gateway </span>
              <span className="block text-[#a3b3ff]">
                for server-side Conversions APIs.
              </span>
            </h1>

            {/* açıklama, vurgulu kelimelerle */}
            <p className="mt-5 text-[15.5px] leading-relaxed text-white/80">
              Managed sGTM hosting with reliable{" "}
              <span className="font-semibold text-white">Meta Conversions API</span> &{" "}
              <span className="font-semibold text-white">GA4 Measurement Protocol</span>{" "}
              delivery — complete with dedup, Consent Mode v2, and a live log & debugger.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#060918] shadow-[0_10px_35px_rgba(0,0,0,0.25)] hover:bg-white/95">
                Start Demo
              </button>
              <button className="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm text-white hover:bg-white/10">
                See Pricing
              </button>
            </div>

            {/* küçük rozetler */}
            <div className="mt-7 flex flex-wrap gap-3 text-xs text-white/85">
              <span className="rounded-full bg-white/5 px-3 py-1">EU Hosting</span>
              <span className="rounded-full bg-white/5 px-3 py-1">GDPR / KVKK</span>
              <span className="rounded-full bg-white/5 px-3 py-1">99.9% uptime</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Consent Mode v2</span>
            </div>

            {/* optimized */}
            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">
                optimized for
              </p>
              <div className="mt-3 flex flex-wrap gap-4">
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/85">
                  Meta CAPI
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/85">
                  GA4
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/85">
                  TikTok
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/85">
                  Google Ads
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT side – glass neon cards */}
          <div className="relative z-10 flex flex-1 flex-col gap-5 lg:max-w-sm">
            {/* card 1 */}
            <div className="rounded-[28px] bg-gradient-to-r from-[#5b5fff] to-[#06b6d4] p-[1.6px] shadow-[0_10px_45px_rgba(91,95,255,0.12)]">
              <div className="rounded-[26px] bg-[#060918]/80 p-5 backdrop-blur-xl">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#cbd5ff] to-[#7e89ff] shadow-[0_0_18px_rgba(132,140,255,0.8)]">
                  <span className="text-[11px] font-bold text-[#060918]">◆</span>
                </div>
                <h2 className="text-sm font-semibold">Key capabilities</h2>
                <p className="mt-2 text-sm text-white/80">
                  Custom domain (CNAME), managed SSL, bölgesel deploy ve gerçek zamanlı
                  teslimat metrikleri.
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="rounded-[28px] bg-gradient-to-r from-[#06b6d4] via-[#4f46e5] to-[#06b6d4] p-[1.6px] shadow-[0_10px_40px_rgba(6,182,212,0.12)]">
              <div className="rounded-[26px] bg-[#060918]/80 p-5 backdrop-blur-xl">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b4fff1] to-[#2dd4bf] shadow-[0_0_18px_rgba(90,255,223,0.8)]">
                  <span className="text-[11px] font-bold text-[#020617]">●</span>
                </div>
                <h2 className="text-sm font-semibold">Use cases</h2>
                <p className="mt-2 text-sm text-white/80">
                  E-commerce event’leri, lead enrichment, ajans çoklu-tenant kurulumları
                  için hazır preset’ler.
                </p>
              </div>
            </div>

            {/* card 3 */}
            <div className="rounded-[28px] bg-gradient-to-r from-[#f97316] via-[#b24bf3] to-[#6366f1] p-[1.6px] shadow-[0_10px_40px_rgba(249,115,22,0.12)]">
              <div className="rounded-[26px] bg-[#060918]/80 p-5 backdrop-blur-xl">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffe1b6] to-[#ff7dc7] shadow-[0_0_16px_rgba(255,141,185,0.8)]">
                  <span className="text-[11px] font-bold text-[#1f1725]">▲</span>
                </div>
                <h2 className="text-sm font-semibold">Health at a glance</h2>
                <p className="mt-2 text-sm text-white/80">
                  Match quality ↑ · Dedup oranı yüksek · Son 24h error düşüklüğü · P95
                  latency stabil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALT BLOK */}
      <section
        id="product"
        className="mx-auto w-full max-w-6xl px-6 py-12 text-sm text-white/60"
      >
        <h2 className="text-lg font-semibold text-white/90">Product</h2>
        <p className="mt-2 max-w-2xl">
          Buraya lunvi.io hattında çalışacak endpoint, workflow ve logging bölümlerini
          ekleyebilirsin. Üstteki hero bölümü madgicx benzeri koyu mavi-mor temaya,
          sağdaki kutular ise bizim neon/cam stilimize göre tasarlandı.
        </p>
      </section>

      <footer className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-8 text-xs text-white/20">
        <span>© {new Date().getFullYear()} lunvi.io</span>
        <span>Separate from lunvilabs.com</span>
      </footer>
    </main>
  );
}
