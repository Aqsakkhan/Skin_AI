import { Link } from 'react-router-dom'
import BrandLogo from '../common/BrandLogo'

function Dashboard() {
    return (
        <div className="min-h-screen bg-slate-50">
            <header className="border-b border-slate-200 bg-white">
                <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <Link to="/" aria-label="Back to home">
                        <BrandLogo />
                    </Link>
                    <div className="flex items-center gap-3">
                        <Link
                            to="/"
                            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                        >
                            Home
                        </Link>
                        <Link
                            to="/login"
                            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
                        >
                            Login
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                    <h1 className="text-3xl font-bold text-slate-900">Welcome to your skincare dashboard</h1>
                    <p className="mt-3 text-slate-600">Track your routines, insights, and progress from one place.</p>
                </section>

                <section className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-8 sm:p-10">
                    <h2 className="text-xl font-semibold text-slate-900">Future features placeholder</h2>
                    <p className="mt-2 text-slate-600">
                        This area is reserved for upcoming analytics, personalized recommendations, and routine history.
                    </p>
                </section>
            </main>
        </div>
    )
}

export default Dashboard
