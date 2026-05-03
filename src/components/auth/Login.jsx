import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthCard from '../common/AuthCard'
import AuthInput from '../common/AuthInput'

function Login() {
    const navigate = useNavigate()
    const [isOtpVisible, setIsOtpVisible] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleSendOtp = (event) => {
        event.preventDefault()
        setIsOtpVisible(true)
    }

    const handleVerifyOtp = (event) => {
        event.preventDefault()
        navigate('/dashboard')
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-brand-50 via-teal-50 to-cyan-100 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center gap-8 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                    <AuthCard
                        title="Start Your Skincare Journey"
                        subtitle="Personalized routines powered by AI"
                        footer={<p className="text-sm text-slate-500">Secure OTP login with your phone number.</p>}
                    >
                        <form className="space-y-5" noValidate onSubmit={isOtpVisible ? handleVerifyOtp : handleSendOtp}>
                            <div>
                                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                                    Phone number
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(event) => setPhoneNumber(event.target.value)}
                                    placeholder="+1 234 567 8901"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                                />
                            </div>

                            <div
                                className={`grid transition-all duration-300 ${isOtpVisible ? 'max-h-32 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                                    }`}
                            >
                                <AuthInput id="otp" label="OTP code" type="text" placeholder="Enter 4 or 6 digit OTP" />
                            </div>

                            {!isOtpVisible ? (
                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
                                >
                                    Send OTP
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
                                >
                                    Verify OTP
                                </button>
                            )}
                        </form>
                    </AuthCard>
                </div>

                <div className="order-1 rounded-3xl border border-white/70 bg-white/60 p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.35)] backdrop-blur lg:order-2 lg:p-12">
                    <p className="inline-flex rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700">Skin_AI</p>
                    <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                        Gentle skincare guidance designed for your real life.
                    </h2>
                    <p className="mt-4 text-slate-600">
                        Unlock routines that stay simple, affordable, and consistent with AI-assisted skin insights tailored to your goals.
                    </p>
                    <div className="mt-8 grid grid-cols-3 gap-3">
                        <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                            <p className="text-lg">🧴</p>
                            <p className="mt-1 text-xs font-medium text-slate-600">Routine</p>
                        </div>
                        <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                            <p className="text-lg">✨</p>
                            <p className="mt-1 text-xs font-medium text-slate-600">Glow</p>
                        </div>
                        <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                            <p className="text-lg">📈</p>
                            <p className="mt-1 text-xs font-medium text-slate-600">Track</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
