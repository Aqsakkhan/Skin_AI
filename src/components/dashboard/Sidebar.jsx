import { Link, useLocation } from 'react-router-dom'

const sidebarItems = [
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'My Routine', to: '/dashboard#routine' },
    { label: 'Progress', to: '/dashboard#progress' },
    { label: 'Recommendations', to: '/dashboard#recommendations' },
    { label: 'Settings', to: '/dashboard#settings' },
]

function Sidebar() {
    const { pathname } = useLocation()

    return (
        <aside className="w-full border-b border-slate-200 bg-white p-4 md:w-72 md:border-b-0 md:border-r md:p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">Menu</h2>

            <nav className="space-y-2">
                {sidebarItems.map((item) => {
                    const isActive = item.to === '/dashboard' && pathname === '/dashboard'

                    return (
                        <Link
                            key={item.label}
                            to={item.to}
                            className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition ${isActive ? 'bg-brand-100 text-brand-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                }`}
                        >
                            {item.label}
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}

export default Sidebar
