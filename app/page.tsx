import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0714] text-white">
      {/* HEADER – koyu mor bant */}
      <header className="sticky top-0 z-30 bg-gradient-to-r from-[#1f1238] via-[#231844] to-[#2f2258] border-b border-white/5">
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
            <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/50">
              lunvi.io
            </span>
          </div>

          {/* sağ nav */}
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-5 text-sm text-white/85 md:flex">
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
                className="rounded-full bg-white/5 px-4 py-1.5 text-xs hover:bg-white/10"
              >
                Docs
              </a>
            </nav>
            <button className="rounded-full bg-white px-5 py-1.5 text-xs font-semibold text-[#1f1238] hover:bg-white/90">
              Start Demo
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#492a91] via-[#352066] to-[#0b0714]">
        {/* çok ışık saçmasın diye glowları azalttım */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#9b83d9]/12 blur-2xl" />
        <div className="pointer-events-none absolute -left-40 top-12 h-[420px] w-[420px] rounded-full bg-[#805de3]/10 blur-3xl" />
        <div className="pointer-events-none absolute right-4 top-72 h-48 w-48 rounded-full bg-[#34d1be]/10 blur-2xl" />

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
            <p className="mt-5 text-base text-white/78 md:text-[15.5px]">
              Managed sGTM benzeri kurulum ile Meta Conversions API ve GA4 Measurement
              benzeri teslimatlarınızı tek panelden yönetin. Dedup, Consent Mode v2 uyumu
              ve canlı log / debugger akışıyla birlikte.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#1e152f] shadow-[0_8px_25px_rgba(11,7,20,0.15)] hover:bg-white/95">
                Start Demo
              </button>
              <button className="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm text-white hover:bg-white/10">
                See Pricing
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/85">
              <span className="rounded-full bg-white/5 px-3 py-1">EU Hosting</span>
              <span className="rounded-full bg-white/5 px-3 py-1">GDPR / KVKK</span>
              <span className="rounded-full bg-white/5 px-3 py-1">99.9% uptime</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Consent Mode v2</span>
            </div>

            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/45">
                Optimized for
              </p>
              <div className="mt-3 flex items-center gap-4 text-sm text-white/80">
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs">Meta CAPI</span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs">GA4</span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs">TikTok</span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs">Google Ads</span>
              </div>
            </div>
          </div>

          {/* sağ cam kutular – daha az glow, neon kenarlı */}
          <div className="relative z-10 flex flex-1 flex-col gap-5 lg:max-w-sm">
            {/* kart 1 */}
            <div className="rounded-3xl border border-[#c6b7ff]/60 bg-white/4 p-5 backdrop-blur-md">
              <div className="mb-3 h-7 w-7 rounded-lg bg-gradient-to-br from-[#d6d0ff] to-[#8f82ff] shadow-[0_0_10px_rgba(181,171,255,0.5)]" />
              <h2 className="text-sm font-semibold">Key capabilities</h2>
              <p className="mt-2 text-sm text-white/85">
                Custom domain (CNAME), managed SSL, bölgesel deploy ve gerçek zamanlı
                teslimat metrikleri.
              </p>
            </div>

            {/* kart 2 */}
            <div className="rounded-3xl border border-[#6ff3d9]/60 bg-white/4 p-5 backdrop-blur-md">
              <div className="mb-3 h-7 w-7 rounded-lg bg-gradient-to-br from-[#a4ffe9] to-[#35c6a7] shadow-[0_0_10px_rgba(145,255,223,0.5)]" />
              <h2 className="text-sm font-semibold">Use cases</h2>
              <p className="mt-2 text-sm text-white/85">
                E-commerce event’leri, lead enrichment, ajans çoklu-tenant kurulumları
                için hazır preset’ler.
              </p>
            </div>

            {/* kart 3 */}
            <div className="rounded-3xl border border-[#ffe1a8]/55 bg-white/4 p-5 backdrop-blur-md">
              <div className="mb-3 h-7 w-7 rounded-lg bg-gradient-to-br from-[#ffe2af] to-[#ffb85f] shadow-[0_0_10px_rgba(255,210,150,0.45)]" />
              <h2 className="text-sm font-semibold">Health at a glance</h2>
              <p className="mt-2 text-sm text-white/85">
                Match quality ↑ · Dedup oranı yüksek · Son 24h error düşüklüğü · P95
                latency stabil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ALT BLOK */}
      <section className="mx-auto w-full max-w-6xl bg-[#0b0714] px-6 py-12">
        <h2 className="text-lg font-semibold text-white/90">Product</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/45">
          Buraya lunvi.io hattında çalışacak endpoint, workflow ve logging bölümlerini
          ekleyebilirsin. Üstteki mor hero ile aynı çizgide kalacak şekilde koyu tasarladık.
        </p>
      </section>

      <footer className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-8 text-xs text-white/25">
        <span>© {new Date().getFullYear()} lunvi.io</span>
        <span>Separate from lunvilabs.com</span>
      </footer>
    </main>
  );
}
