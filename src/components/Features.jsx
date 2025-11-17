import { Star, Zap, Layers } from 'lucide-react'
import { useEffect, useState } from 'react'

function Features() {
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/features`).then(r => r.json()).then(setItems).catch(() => setItems([]))
  }, [])

  const icons = [Star, Zap, Layers]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Everything you need to drive revenue</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">Align teams, automate workflows, and deliver delightful customer experiences.</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((f, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div key={i} className="p-6 rounded-xl border border-gray-100 hover:border-gray-200 transition bg-white shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
