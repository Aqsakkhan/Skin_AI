import Navbar from '../landing-page/sections/Navbar'
import Sidebar from './Sidebar'

function Dashboard() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="mx-auto flex w-full max-w-7xl flex-col md:min-h-[calc(100vh-73px)] md:flex-row">
                <Sidebar />

                <main className="flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
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
        </div>
    )
}

export default Dashboard
