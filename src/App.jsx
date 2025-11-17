import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />
      <Hero />
      <Features />
      <Contact />
      <footer className="py-10 border-t border-gray-100 text-center text-sm text-gray-600">© 2025 Catalyst Clone. All rights reserved.</footer>
    </div>
  )
}

export default App
