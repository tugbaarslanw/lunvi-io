// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050818] text-white">
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50 h-[65px] bg-gradient-to-r from-[#191535] via-[#201b44] to-[#090b16] border-b border-white/5 backdrop-blur">
        <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4 lg:px-0">
          {/* logo */}
          <div className="flex items-center gap-3">
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
          {/* background glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(150,106,255,0.4),_transparent_55%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(42,252,255,0.25),_transparent_60%)] blur-3xl"
          />

          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 lg:flex-row lg:px-0">
            {/* LEFT */}
            <div className="flex-1">
              <p className="text-xs font-medium tracking-[0.35em] text-slate-100/65 uppercase mb-6">
                Premium Gateway · Server-side
              </p>

              {/* title */}
              <h1 className="text-4xl leading-tight font-semibold md:text-5xl space-y-1">
                <span className="block text-white">The premium gateway</span>
                <span className="block text-white">
                  for{" "}
                  <span className="text-[#a855f7]">
                    server-side
                  </span>
                </span>
                <span className="block text-[#a855f7]">
                  Conversions APIs
                  <span className="text-white">.</span>
                </span>
              </h1>

              {/* subtext */}
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

              {/* CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#0b0d16] shadow-md hover:shadow-lg transition">
                  Start Demo
                </button>
                <button className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/85 hover:bg-white/10 transition">
                  See Pricing
                </button>
              </div>

              {/* chips */}
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

              {/* optimized */}
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

            {/* RIGHT – glass cards */}
            <div className="flex w-full flex-col gap-5 lg:w-[395px]">
              {/* CARD 1 */}
              <div className="relative rounded-[26px]">
                <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[linear-gradient(120deg,#c56fff,rgba(199,118,255,0)_45%),linear-gradient(300deg,#42e1ff,rgba(66,225,255,0)_40%)] opacity-100" />
                <div className="relative rounded-[22px] bg-[#060918]/60 backdrop-blur-md border border-white/5 px-6 py-5 flex gap-4 min-h-[140px]">
                  <div className="mt-1 h-11 w-11 rounded-2xl bg-[linear-gradient(160deg,#8245ff,#4a2bd6)] shadow-[0_0_25px_rgba(128,90,255,0.85)]" />
                  <div>
                    <p className="text-base font-semibold">Key capabilities</p>
                    <p className="text-sm text-slate-100/75 mt-1 leading-relaxed">
                      Custom domain (CNAME), managed SSL, regional deploy and
                      real-time delivery metrics.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="relative rounded-[26px]">
                <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[linear-gradient(120deg,#40e0ff,rgba(64,224,255,0)_40%),linear-gradient(320deg,#a971ff,rgba(169,113,255,0)_35%)] opacity-100" />
                <div className="relative rounded-[22px] bg-[#060918]/60 backdrop-blur-md border border-white/5 px-6 py-5 flex gap-4 min-h-[140px]">
                  <div className="mt-1 h-11 w-11 rounded-2xl bg-[linear-gradient(160deg,#5efcff,#0cbad2)] shadow-[0_0_25px_rgba(71,246,255,0.75)]" />
                  <div>
                    <p className="text-base font-semibold">Use cases</p>
                    <p className="text-sm text-slate-100/75 mt-1 leading-relaxed">
                      E-commerce (Purchase/ATC), lead enrichment, agency
                      multi-tenant presets ready to go.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="relative rounded-[26px]">
                <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[linear-gradient(120deg,#ffc78c,rgba(255,199,140,0)_45%),linear-gradient(320deg,#ff5fd1,rgba(255,95,209,0)_35%)] opacity-100" />
                <div className="relative rounded-[22px] bg-[#060918]/60 backdrop-blur-md border border-white/5 px-6 py-5 flex gap-4 min-h-[140px]">
                  <div className="mt-1 h-11 w-11 rounded-2xl bg-[linear-gradient(160deg,#ffe7a3,#ff996a)] shadow-[0_0_25px_rgba(255,167,109,0.75)]" />
                  <div>
                    <p className="text-base font-semibold">Health at a glance</p>
                    <p className="text-sm text-slate-100/75 mt-1 leading-relaxed">
                      Match quality ↑ · Dedup rate 97% · Last-24h error &lt; 0.5% ·
                      P95 latency 180ms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT SECTION – daha aşağıda */}
        <section className="mx-auto w-full max-w-6xl px-4 lg:px-0 pb-16 pt-40">
          <h2 className="text-lg font-semibold mb-2">Product</h2>
          <p className="text-sm text-slate-100/55 max-w-2xl">
            Buraya lunvi.io hattında çalışacak endpoint, workflow ve logging
            bölümlerini ekleyebilirsin. Üstteki hero ile aynı koyu mor temayı
            koruduk.
          </p>
        </section>

        <footer className="py-8 text-center text-xs text-slate-100/40 border-t border-white/5">
          © 2025 lunvi.io — separate from lunvilabs.com
        </footer>
      </main>
    </div>
  );
}
