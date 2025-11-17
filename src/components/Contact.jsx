import { useState } from 'react'

function Contact() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [status, setStatus] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    setStatus({ loading: true })
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok) setStatus({ success: true })
      else setStatus({ error: data.detail || 'Something went wrong' })
    } catch (err) {
      setStatus({ error: err.message })
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Talk to our team</h2>
          <p className="mt-3 text-gray-600">Tell us about your goals and we'll show you how to orchestrate customer growth with a real-time workspace.</p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>• Product tours and onboarding</li>
            <li>• Health scoring & alerts</li>
            <li>• Renewal workflows</li>
            <li>• CS + Sales collaboration</li>
          </ul>
        </div>
        <form onSubmit={onSubmit} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input required name="name" placeholder="Full name" className="col-span-2 md:col-span-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input required name="email" type="email" placeholder="Work email" className="col-span-2 md:col-span-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <input name="company" placeholder="Company" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input name="phone" placeholder="Phone" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input name="subject" placeholder="Subject" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea required name="message" rows="4" placeholder="How can we help?" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <button className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition">Send message</button>
          {status?.loading && <p className="text-sm text-gray-600">Sending...</p>}
          {status?.success && <p className="text-sm text-green-600">Thanks! We'll be in touch shortly.</p>}
          {status?.error && <p className="text-sm text-red-600">{status.error}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
