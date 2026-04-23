import { workflowSteps } from '../data/siteContent'

function HowItWorks() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-brand-100 bg-brand-50/70 p-8 sm:p-10">
                <h2 className="text-3xl font-bold text-slate-900">How Skin_AI works</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {workflowSteps.map((item) => (
                        <article key={item.step} className="rounded-2xl bg-white p-6 shadow-sm">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                                {item.step}
                            </span>
                            <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
