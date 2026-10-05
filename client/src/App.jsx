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

        <button className="mt-8 rounded-full bg-brand px-8 py-3 font-semibold transition hover:bg-brand/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/50">
          Shop Now
        </button>
      </section>
    </main>
  )
}

export default App