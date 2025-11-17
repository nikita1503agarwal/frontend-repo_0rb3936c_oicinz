import { Menu, Search } from 'lucide-react'

function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-indigo-600"></div>
          <span className="font-semibold text-gray-900">Catalyst</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900">Product</a>
          <a href="#solutions" className="hover:text-gray-900">Solutions</a>
          <a href="#resources" className="hover:text-gray-900">Resources</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"><Search size={16}/>Search</button>
          <a href="#contact" className="px-3 py-2 rounded-md text-sm bg-gray-900 text-white">Get a demo</a>
          <button className="md:hidden p-2"><Menu/></button>
        </div>
      </div>
    </header>
  )
}

export default Nav
