/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom'
import BrandLogo from '../../common/BrandLogo'
import { navLinks } from '../data/siteContent'

function Navbar({ onMenuToggle }) {
    const { pathname } = useLocation()
    const isDashboard = pathname === '/dashboard'

    if (isDashboard) {
        return (
            <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
                <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={onMenuToggle}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden"
                            aria-label="Toggle sidebar menu"
                        >
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>

                        <Link to="/dashboard" aria-label="Skin AI dashboard home">
                            <BrandLogo />
                        </Link>
                    </div>

                    <ul className="hidden items-center gap-8 md:flex">
                        <li>
                            <Link to="/dashboard" className="text-sm font-semibold text-brand-600" aria-current="page">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <button type="button" className="text-sm font-medium text-slate-600 transition hover:text-brand-600">
                                Profile
                            </button>
                        </li>
                    </ul>

                    <button
                        type="button"
                        className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
                    >
                        Logout
                    </button>
                </nav>
            </header>
        )
    }

    return (
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link to="/" aria-label="Skin AI home">
                    <BrandLogo />
                </Link>

                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={`/${item.href}`} className="text-sm font-medium text-slate-600 transition hover:text-brand-600">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    <Link
                        to="/login"
                        className="rounded-full border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:border-brand-300 hover:bg-brand-50"
                    >
                        Login
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
