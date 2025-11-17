import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block text-sm font-semibold tracking-wider uppercase text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Modern Customer Platform</span>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Build, Launch, and Scale Customer Experiences
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          A playful, interactive interface to orchestrate onboarding, support and account growth in real-time.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#contact" className="px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">Get a demo</a>
          <a href="#features" className="px-5 py-3 rounded-lg bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition">Explore features</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/90 to-transparent"></div>
    </section>
  )
}

export default Hero
