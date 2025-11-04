// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060815] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-gradient-to-r from-[#5627a5] via-[#4f2f8f] to-[#332044]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-16 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Lunvi"
              width={90}
              height={32}
              className="h-8 w-auto"
            />
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs tracking-[0.35em] text-white/80">
              L U N V I . I O
            </span>
          </div>
          <nav className="flex items-center gap-2 text-sm">
            <button className="rounded-full px-3 py-1 text-white/80 hover:bg-white/5">
              Product
            </button>
            <button className="rounded-full px-3 py-1 text-white/80 hover:bg-white/5">
              Solutions
            </button>
            <button className="rounded-full px-3 py-1 text-white/80 hover:bg-white/5">
              Integrations
            </button>
            <button className="rounded-full px-3 py-1 text-white/80 hover:bg-white/5">
              Pricing
            </button>
            <button className="rounded-full bg-white/5 px-5 py-1 text-white">
              Docs
            </button>
            <button className="rounded-full bg-gradient-to-r from-[#b946ff] to-[#6f54ff] px-6 py-1 text-sm font-medium text-white shadow-[0_0_25px_rgba(185,70,255,0.55)] transition hover:brightness-110">
              Start Demo
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-24 pt-16 md:flex-row md:px-6">
        {/* LEFT */}
        <div className="flex-1">
          <p className="text-xs font-medium tracking-[0.35em] text-white/50">
            PREMIUM GATEWAY • SERVER-SIDE
          </p>

          {/* başlık */}
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            The premium gateway
            <br />
            for{" "}
            <span className="text-[#a95aff]">
              server-side
              <br />
              Conversions APIs.
            </span>
          </h1>

          {/* alt metin */}
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70">
            Managed sGTM hosting with reliable{" "}
            <span className="font-semibold text-white">
              Meta Conversions API
            </span>{" "}
            &{" "}
            <span className="font-semibold text-white">
              GA4 Measurement Protocol
            </span>{" "}
            delivery — complete with dedup, Consent Mode v2, and a live log &
            debugger.
          </p>

          {/* CTA */}
          <div className="mt-6 flex gap-4">
            <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black">
              Start Demo
            </button>
            <button className="rounded-full border border-white/10 bg-white/0 px-6 py-2 text-sm text-white hover:bg-white/5">
              See Pricing
            </button>
          </div>

          {/* badges */}
          <div className="mt-6 flex flex-wrap gap-3">
            {["EU Hosting", "GDPR / KVKK", "99.9% uptime", "Consent Mode v2"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/5 px-4 py-1 text-xs text-white/80"
                >
                  {item}
                </span>
              )
            )}
          </div>

          {/* optimized for */}
          <div className="mt-8">
            <p className="text-[0.55rem] tracking-[0.35em] text-white/40">
              OPTIMIZED FOR
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {["Meta CAPI", "GA4", "TikTok", "Google Ads"].map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-white/5 px-4 py-1 text-xs text-white/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT – CAM KUTULAR */}
        <div className="flex w-full max-w-sm flex-col gap-4 md:w-[380px]">
            {/* 1. kutu */}
            <div className="relative overflow-hidden rounded-[1.9rem] border border-white/5 bg-gradient-to-r from-[#110b2f]/40 via-[#1c1f33]/40 to-[#0d1829]/40 px-6 py-6 backdrop-blur">
              <div className="pointer-events-none absolute inset-0 rounded-[1.9rem] border-[2.5px] border-transparent bg-[linear-gradient(120deg,#4d60ff,rgba(0,0,0,0),#d186ff)] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-[1.5px]" />
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-[#965dff] via-[#6e45ff] to-[#c379ff] shadow-[0_0_30px_rgba(150,93,255,0.5)]">
                  {/* icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 18 10 6l4 8 2-4 4 8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold">Key capabilities</h3>
                  <p className="mt-1 text-sm text-white/70">
                    Custom domain (CNAME), managed SSL, regional deploy and
                    real-time delivery metrics.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. kutu */}
            <div className="relative overflow-hidden rounded-[1.9rem] border border-white/5 bg-gradient-to-r from-[#072830]/35 via-[#0c2e42]/40 to-[#2a0f34]/40 px-6 py-6 backdrop-blur">
              <div className="pointer-events-none absolute inset-0 rounded-[1.9rem] border-[2.5px] border-transparent bg-[linear-gradient(120deg,#00ffe7,rgba(0,0,0,0),#a969ff)] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-[1.5px]" />
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-[#4df6cf] via-[#00d5ff] to-[#17a4ff] shadow-[0_0_30px_rgba(77,246,207,0.45)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#02121a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M6 7h12M6 12h7M6 17h4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold">Use cases</h3>
                  <p className="mt-1 text-sm text-white/70">
                    E-commerce (Purchase/ATC), lead enrichment, agency
                    multi-tenant presets ready to go.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. kutu – sadece bunu yumuşattım */}
            <div className="relative overflow-hidden rounded-[1.9rem] border border-white/5 bg-gradient-to-r from-[#321129]/35 via-[#4a1030]/55 to-[#110616]/35 px-6 py-6 backdrop-blur">
              {/* neon şerit (stape / firstbase tarzı) */}
              <div className="pointer-events-none absolute inset-0 rounded-[1.9rem] border-[2.5px] border-transparent bg-[linear-gradient(130deg,#ff8fb1,rgba(0,0,0,0),#c16fff)] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-[1.5px]" />
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-[#ffb995] via-[#ff6f7d] to-[#c026d3] shadow-[0_0_30px_rgba(255,111,125,0.55)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M9 19c-3 0-5-2.5-5-6s2-6 5-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 5c3 0 5 2.5 5 6s-2 6-5 6c-1.5 0-2.7-.6-3.5-1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="m9 11 2 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold">Health at a glance</h3>
                  <p className="mt-1 text-sm text-white/70">
                    Match quality ↑ • Dedup rate 97% • Last-24h error &lt; 0.5% •
                    P95 latency 180ms.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </main>

      {/* aşağıdaki "Product" bölümünü bilinçli olarak biraz aşağıda bırakıyoruz */}
      <section className="mt-10 bg-transparent pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          {/* boşluk: hero altında görünmez olsun diye ekstra padding */}
          <div className="pt-10" />
          <h2 className="text-lg font-semibold text-white">Product</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/60">
            Buraya lunvi.io hattında çalışacak endpoint, workflow ve logging
            bölümlerini ekleyebilirsin. Üstteki mor hero ile aynı koyu mor
            temayı koruduk.
          </p>
        </div>
      </section>
    </div>
  );
}
