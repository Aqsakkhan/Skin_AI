/* eslint-disable react/prop-types */
function AuthCard({ title, subtitle, children, footer }) {
    return (
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.35)]">
            <h1 className="text-2xl font-bold text-slate-900, text-center">{title}</h1>
            <p className="mt-2 text-sm text-slate-600, text-center">{subtitle}</p>
            <div className="mt-7">{children}</div>
            <div className="mt-6 text-sm text-slate-600">{footer}</div>
        </div>
    )
}

export default AuthCard
