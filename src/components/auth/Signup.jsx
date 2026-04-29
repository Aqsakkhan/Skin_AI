import { Link } from 'react-router-dom'
import AuthCard from '../common/AuthCard'
import AuthInput from '../common/AuthInput'

function Signup() {
    return (
        <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
            <AuthCard
                title="Start your skincare journey"
                subtitle="Smart, personalized routines designed for your skin."
                footer={
                    <p className='text-center'>
                        Already have an account?{' '}
                        <Link to="/login" className="font-semibold text-brand-600 hover:text-brand-700">
                            Login
                        </Link>
                    </p>
                }
            >
                <form className="space-y-5" noValidate>
                    <AuthInput id="name" label="Name" placeholder="Your full name" />
                    <AuthInput id="email" label="Email" type="email" placeholder="you@example.com" />
                    <AuthInput id="password" label="Password" type="password" placeholder="Create a strong password" />
                    <AuthInput id="confirmPassword" label="Confirm password" type="password" placeholder="Repeat password" />

                    <div>
                        <label htmlFor="experience" className="mb-2 block text-sm font-medium text-slate-700">
                            Experience level
                        </label>
                        <select
                            id="experience"
                            name="experience"
                            defaultValue="Beginner"
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                        >
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
                    >
                        Sign up
                    </button>
                </form>
            </AuthCard>
        </section>
    )
}

export default Signup
