import BrandLogo from '../../common/BrandLogo'
import { navLinks } from '../data/siteContent'

function Navbar() {
    return (
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <a href="#home" aria-label="Skin AI home">
                    <BrandLogo />
                </a>

                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-brand-600">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
                >
                    Get Started
                </button>
            </nav>
        </header>
    )
}

export default Navbar
