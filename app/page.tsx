// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050818] text-white">
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50 h-[65px] bg-gradient-to-r from-[#1a1535] via-[#211b48] to-[#090b16] border-b border-white/5 backdrop-blur">
        <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4 lg:px-0">
          {/* logo */}
          <div className="flex items-center gap-3">
            {/* logo.png dosyan public klasöründe olmalı */}
            <Image
              src="/logo.png"
              alt="Lunvi"
              width={110}
              height={40}
              className="h-8 w-auto"
              priority
            />
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs tracking-[0.3em] uppercase text-slate-100/70">
              lunvi.io
            </span>
          </div>

          {/* menu */}
          <nav className="flex items-center gap-6">
            <button className="text-sm text-slate-100/85 hover:text-white transition">
              Product
            </button>
            <button className="text-sm text-slate-100/85 hover:text-white transition">
              Solutions
            </button>
            <button className="text-sm text-slate-100/85 hover:text-white transition">
              Integrations
            </button>
            <button className="text-sm text-slate-100/85 hover:text-white transition">
              Pricing
            </button>

            {/* Docs ve Start Demo butonları */}
            <button className="rounded-full border border-white/10 bg-white/5 px-5 py-1.5 text-sm text-white/90 hover:bg-white/10 transition">
              Docs
            </button>
            <button className="rounded-full bg-gradient-to-r from-[#a855f7] via-[#8b5cf6] to-[#6366f1] px-6 py-2 text-sm font-medium shadow-[0_15px_35px_rgba(115,103,255,0.35)] hover:brightness-110 transition">
              Start Demo
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main className="pt-[65px]">
        <section className="relative overflow-hidden">
          {/* arka plan blur şekiller */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(150,106,255,0.35),_transparent_55%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(42,252,255,0.3),_transparent_60%)] blur-3xl"
          />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 lg:flex-row lg:px-0">
            {/* LEFT SIDE */}
            <div className="flex-1">
              <p className="text-xs font-medium tracking-[0.35em] text-slate-100/65 uppercase mb-6">
                Premium Gateway · Server-side
              </p>

              {/* Başlık iki renkli */}
              <h1 className="text-4xl leading-tight font-semibold md:text-5xl">
                <span className="block text-white">
                  The premium gateway
                </span>
                <span className="block bg-gradient-to-r from-[#a855f7] via-[#8b5cf6] to-[#6366f1] bg-clip-text text-transparent">
                  for server-side Conversions APIs.
                </span>
              </h1>

              {/* alt metin */}
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-200/80">
                Managed sGTM hosting with reliable{" "}
                <span className="font-semibold text-white">
                  Meta Conversions API
                </span>{" "}
                &{" "}
                <span className="font-semibold text-white">
                  GA4 Measurement Protocol
                </span>{" "}
                delivery — complete with dedup, Consent Mode v2, and a live log
                & debugger.
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#0b0d16] shadow-md hover:shadow-lg transition">
                  Start Demo
                </button>
                <button className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/85 hover:bg-white/10 transition">
                  See Pricing
                </button>
              </div>

              {/* küçük chipler */}
              <div className="mt-7 flex flex-wrap gap-3">
                {["EU Hosting", "GDPR / KVKK", "99.9% uptime", "Consent Mode v2"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/5 px-4 py-1 text-xs text-slate-100/75 border border-white/5"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              {/* optimized for */}
              <div className="mt-8">
                <p className="text-[10px] tracking-[0.4em] uppercase text-slate-100/50 mb-3">
                  Optimized for
                </p>
                <div className="flex gap-3">
                  {["Meta CAPI", "GA4", "TikTok", "Google Ads"].map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-white/5 px-3 py-1 text-xs text-slate-100/80 border border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="flex w-full flex-col gap-5 lg:w-[380px]">
              {/* 1 */}
              <div className="rounded-3xl bg-white/5/0 border border-transparent bg-gradient-to-b from-white/10 via-white/5 to-white/0 p-[1px]">
                <div className="rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(164,124,255,0.35),_rgba(10,11,20,0.15))] border border-[#b496ff]/20 backdrop-blur-md p-5 flex gap-4">
                  <div className="mt-1 h-9 w-9 rounded-2xl bg-gradient-to-b from-[#b496ff] to-[#6d4cff] shadow-[0_0_30px_rgba(180,150,255,0.65)]" />
                  <div>
                    <p className="text-sm font-semibold">Key capabilities</p>
                    <p className="text-xs text-slate-100/70 mt-1">
                      Custom domain (CNAME), managed SSL, regional deploys and
                      real-time delivery metrics.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2 */}
              <div className="rounded-3xl bg-white/5/0 border border-transparent bg-gradient-to-b from-white/10 via-white/5 to-white/0 p-[1px]">
                <div className="rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(69,252,255,0.32),_rgba(6,9,16,0.15))] border border-[#44f1ff]/25 backdrop-blur-md p-5 flex gap-4">
                  <div className="mt-1 h-9 w-9 rounded-2xl bg-gradient-to-b from-[#6fffe9] to-[#00bcd4] shadow-[0_0_30px_rgba(76,255,220,0.65)]" />
                  <div>
                    <p className="text-sm font-semibold">Use cases</p>
                    <p className="text-xs text-slate-100/70 mt-1">
                      E-commerce events, lead enrichment, agency setups with
                      ready multi-tenant presets.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 */}
              <div className="rounded-3xl bg-white/5/0 border border-transparent bg-gradient-to-b from-white/10 via-white/5 to-white/0 p-[1px]">
                <div className="rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(255,196,128,0.25),_rgba(5,8,18,0.15))] border border-[#ffb86b]/25 backdrop-blur-md p-5 flex gap-4">
                  <div className="mt-1 h-9 w-9 rounded-2xl bg-gradient-to-b from-[#ffe29f] to-[#ffa99f] shadow-[0_0_30px_rgba(255,184,107,0.65)]" />
                  <div>
                    <p className="text-sm font-semibold">Health at a glance</p>
                    <p className="text-xs text-slate-100/70 mt-1">
                      Match quality ↑ · Dedup stable · Last-24h error &lt; 0.5% ·
                      P95 latency optimized.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* alt blok sadece boş kalsın */}
        <section className="mx-auto w-full max-w-6xl px-4 lg:px-0 pb-16 pt-6">
          <h2 className="text-lg font-semibold mb-2">Product</h2>
          <p className="text-sm text-slate-100/55 max-w-2xl">
            Buraya lunvi.io’nun product / endpoint / workflow / logging bölümlerini
            ekleyeceğiz. Şimdilik hero ile uyumlu koyu arka planı koruduk.
          </p>
        </section>

        <footer className="py-8 text-center text-xs text-slate-100/40 border-t border-white/5">
          © 2025 lunvi.io — separate from lunvilabs.com
        </footer>
      </main>
    </div>
  );
}
