function BrandLogo() {
    return (
        <div className="inline-flex items-center gap-3 text-slate-900">
            <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 shadow-sm ring-4 ring-brand-100"
            >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 3.5C10.2 6.2 7 9.5 7 13.2C7 15.9614 9.23858 18.2 12 18.2C14.7614 18.2 17 15.9614 17 13.2C17 9.5 13.8 6.2 12 3.5Z"
                        fill="white"
                    />
                    <circle cx="13.4" cy="12.2" r="1.4" fill="#2f9ba1" />
                </svg>
            </span>

            <span className="text-xl font-bold tracking-tight">
                Skin_<span className="text-brand-600">AI</span>
            </span>
        </div>
    )
}

export default BrandLogo
