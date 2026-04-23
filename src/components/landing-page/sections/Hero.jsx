function Hero() {
    return (
        <section
            id="home"
            className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24"
        >
            <div>
                <p className="mb-4 inline-flex rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700">
                    Science-backed skincare, made simple
                </p>
                <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                    AI-Powered Smart Skincare Advisor
                </h1>
                <p className="mt-5 max-w-xl text-lg text-slate-600">
                    Minimal, Affordable, Personalized skincare routines
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button
                        type="button"
                        className="rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                        Start Your Journey
                    </button>
                    <span className="text-sm text-slate-500">No credit card required</span>
                </div>
            </div>

            <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-brand-200 to-brand-50 blur-2xl" />
                <img
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
                    alt="Skincare face analysis placeholder"
                    className="relative h-full min-h-72 w-full rounded-3xl object-cover shadow-xl"
                />
            </div>
        </section>
    )
}

export default Hero
