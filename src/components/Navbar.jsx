import { useState, useEffect } from 'react'

const NAV_ITEMS = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact']

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('Home')

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50)

            // Update active section
            const sections = NAV_ITEMS.map(name => ({
                name,
                el: document.getElementById(name.toLowerCase()),
            }))
            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i].el && sections[i].el.getBoundingClientRect().top <= 150) {
                    setActive(sections[i].name)
                    break
                }
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleClick = (name) => {
        setMenuOpen(false)
        const el = document.getElementById(name.toLowerCase())
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-logo" onClick={() => handleClick('Home')}>
                <span>Garvit</span>
                <span>.dev</span>
            </div>

            <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span /><span /><span />
            </button>

            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                {NAV_ITEMS.map(name => (
                    <span
                        key={name}
                        className={`nav-link ${active === name ? 'active' : ''}`}
                        onClick={() => handleClick(name)}
                    >
                        {name}
                    </span>
                ))}
                <button className="nav-cta" onClick={() => handleClick('Contact')}>
                    Let's Talk
                </button>
            </div>
        </nav>
    )
}
