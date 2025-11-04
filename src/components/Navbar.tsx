import Logo from './Logo'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur border-b border-gray-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <Logo className="h-10 transition-transform group-hover:scale-105" />
        </a>
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a 
                  href={l.href} 
                  className="text-sm text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://drive.google.com/file/d/1H3xwo2HB4xzMy7PY-7W90H2_LuBw7J8G/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 text-sm text-gray-300 hover:border-indigo-500 hover:text-indigo-400 transition-colors duration-200 uppercase tracking-wider"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            CV
          </a>
        </div>
        <button className="md:hidden p-2 text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

