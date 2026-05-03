/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom'

const sidebarItems = [
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'My Routine', to: '/dashboard#routine' },
    { label: 'Progress', to: '/dashboard#progress' },
    { label: 'Recommendations', to: '/dashboard#recommendations' },
    { label: 'Settings', to: '/dashboard#settings' },
]

function Sidebar({ isOpen, onClose }) {
    const { pathname, hash } = useLocation()

    return (
        <>
            <button
                type="button"
                aria-label="Close sidebar overlay"
                onClick={onClose}
                className={`fixed inset-0 z-20 bg-slate-900/35 transition-opacity duration-300 md:hidden ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                    }`}
            />

            <aside
                className={`fixed inset-y-0 left-0 z-30 w-72 border-r border-slate-200 bg-white p-6 shadow-xl transition-transform duration-300 ease-out md:static md:z-0 md:w-72 md:translate-x-0 md:border-b-0 md:shadow-none ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="mb-4 flex items-center justify-between md:block">
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Menu</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 md:hidden"
                        aria-label="Close sidebar"
                    >
                        ✕
                    </button>
                </div>

                <nav className="space-y-2">
                    {sidebarItems.map((item) => {
                        const isActive = item.to === '/dashboard' ? pathname === '/dashboard' && hash === '' : hash === item.to.replace('/dashboard', '')

                        return (
                            <Link
                                key={item.label}
                                to={item.to}
                                onClick={onClose}
                                className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition ${isActive ? 'bg-brand-100 text-brand-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>
            </aside>
        </>
    )
}

export default Sidebar
