import { primaryFeatures } from '../data/siteContent'

function Features() {
    return (
        <section id="features" className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold text-slate-900">Core features for healthier skin outcomes</h2>
                    <p className="mt-3 text-slate-600">
                        Skin_AI focuses on practical routines that are easy to follow and affordable long-term.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    {primaryFeatures.map((feature) => (
                        <article
                            key={feature.title}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <span className="text-3xl" aria-hidden="true">
                                {feature.icon}
                            </span>
                            <h3 className="mt-4 text-xl font-semibold text-slate-900">{feature.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
