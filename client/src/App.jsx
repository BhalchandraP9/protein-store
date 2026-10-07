function App() {
  return (
    <main className="min-h-screen bg-ink text-white flex items-center justify-center p-6">
      <section className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Premium Whey Protein
        </p>

        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          Fuel Your Strongest Self
        </h1>

        <p className="mt-4 text-slate-300">
          Clean, lab-tested nutrition for people who take training seriously.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button className="rounded-full bg-brand px-8 py-3 font-semibold transition hover:bg-brand/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/50">
             Shop Now
          </button>
          <button className="rounded-full border border-white/30 bg-transparent px-8 py-3 font-semibold transition hover:bg-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30">
             View Plans
          </button>
        </div>
      </section>
    </main>
  )
}

export default App