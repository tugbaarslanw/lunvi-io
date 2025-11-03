export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0818] text-white">
      {/* parlak arka plan blur */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute top-1/3 -left-10 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
      </div>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-purple-400 to-indigo-500" />
          <span className="text-sm font-medium tracking-[0.25em] text-white/60 uppercase">
            lunvi.io
          </span>
        </div>
        <div className="hidden gap-3 text-sm text-white/40 md:flex">
          <span className="hover:text-white/80 transition">Docs</span>
          <span className="hover:text-white/80 transition">Changelog</span>
          <span className="hover:text-white/80 transition">Support</span>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-16 pt-4 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-purple-200/60">
            separate line • tracking • io
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Premium conversions gateway for your separate brand line.
          </h1>
          <p className="mt-5 text-base text-white/60">
            lunvilabs.com mimarisine dokunmadan ilerleyen ayrı bir ürün. Koyu temada,
            büyüyebilen UI, gateway ve event toplama için temiz bir yüz.
          </p>
          <div className="mt-7 flex gap-4">
            <a
              href="#"
              className="rounded-xl bg-white/95 px-5 py-2.5 text-sm font-medium text-[#0b0818] hover:bg-white"
            >
              Go to dashboard
            </a>
            <a href="#" className="text-sm text-white/60 hover:text-white/90">
              View endpoints →
            </a>
          </div>
        </div>

        <div className="grid flex-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-wide text-white/40">Status</p>
            <p className="mt-2 text-lg font-semibold">Isolated</p>
            <p className="mt-1 text-sm text-white/50">
              lunvi.io runs separately from lunvilabs.com
            </p>
          </div>
          <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 p-4">
            <p className="text-xs uppercase tracking-wide text-purple-100/60">SSL</p>
            <p className="mt-2 text-lg font-semibold">HTTPS active</p>
            <p className="mt-1 text-sm text-purple-50/60">Vercel managed certificate</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-wide text-white/40">Next.js 15</p>
            <p className="mt-2 text-sm text-white/70">
              App router, Tailwind, Typescript
            </p>
          </div>
          <div className="rounded-2xl border border-teal-400/30 bg-teal-400/10 p-4">
            <p className="text-xs uppercase tracking-wide text-teal-50/60">Deploy</p>
            <p className="mt-2 text-sm text-teal-50/90">
              GitHub → Vercel → lunvi.io
            </p>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-8 text-xs text-white/20">
        <span>© {new Date().getFullYear()} lunvi.io</span>
        <span>separate from lunvilabs.com</span>
      </footer>
    </main>
  );
}
