/* eslint-disable react/prop-types */
function AuthInput({ id, label, type = 'text', placeholder }) {
    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">
                {label}
            </label>
            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
            />
        </div>
    )
}

export default AuthInput
