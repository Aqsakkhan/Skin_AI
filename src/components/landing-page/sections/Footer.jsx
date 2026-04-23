import BrandLogo from '../../common/BrandLogo'

function Footer() {
    return (
        <footer id="contact" className="mt-8 border-t border-slate-200 bg-white">
            <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
                <div>
                    <BrandLogo />
                    <p className="mt-2 text-sm text-slate-600">Personalized routines for healthier skin, without overspending.</p>
                </div>

                <div className="md:text-right">
                    <p className="text-sm font-medium text-slate-700">Contact: hello@skin-ai.app</p>
                    <p className="mt-1 text-xs text-slate-500">© {new Date().getFullYear()} Skin_AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
