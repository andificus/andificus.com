import Link from 'next/link'
import AndificusLogo from './AndificusLogo'

export default function NavBar() {
  return (
    <header className="navbar">
      <nav className="navbarInner">
        <Link href="/" className="brandLink" aria-label="Andificus home">
          <AndificusLogo height={42} />
        </Link>

        <div className="navbarLinks">
          <a href="/about" className="navLink">About</a>
          <a href="/#connect" className="navLink">Connect</a>
        </div>
      </nav>
    </header>
  )
}
