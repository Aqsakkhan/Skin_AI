import { Link } from 'react-router-dom'
import AuthCard from '../common/AuthCard'
import AuthInput from '../common/AuthInput'

function Login() {
    return (
        <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
            <AuthCard
                title="Welcome back"
                subtitle="Login to continue your personalized Skin_AI skincare journey."
                footer={
                    <p>
                        Don&apos;t have an account?{' '}
                        <Link to="/signup" className="font-semibold text-brand-600 hover:text-brand-700">
                            Sign up
                        </Link>
                    </p>
                }
            >
                <form className="space-y-5" noValidate>
                    <AuthInput id="email" label="Email" type="email" placeholder="you@example.com" />
                    <AuthInput id="password" label="Password" type="password" placeholder="••••••••" />

                    <div className="flex justify-end">
                        <Link to="#" className="text-sm font-medium text-brand-600 hover:text-brand-700">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
                    >
                        Login
                    </button>
                </form>
            </AuthCard>
        </section>
    )
}

export default Login
