function BrandLogo() {
    return (
        <div className="inline-flex items-center gap-2 text-slate-900">
            <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-lg"
            >
                🧴
            </span>
            <span className="text-xl font-bold tracking-tight">
                Skin_<span className="text-brand-600">AI</span>
            </span>
        </div>
    )
}

export default BrandLogo
