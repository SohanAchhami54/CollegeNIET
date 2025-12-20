import { robotoFont, graduateFont } from '@/font'

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-50 px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        {/* Maintenance Icon */}
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
            <span className="text-6xl">🔧</span>
          </div>
        </div>

        <h1 className={`${graduateFont.className} text-4xl md:text-5xl text-gray-900 mb-4`}>
          Under Maintenance
        </h1>
        
        <p className={`${robotoFont.className} text-lg text-gray-600 mb-4`}>
          We're currently performing scheduled maintenance to improve your experience.
        </p>

        <p className={`${robotoFont.className} text-base text-gray-500 mb-8`}>
          We'll be back shortly. Thank you for your patience!
        </p>

        <div className="animate-pulse">
          <div className="h-2 bg-blue-600 rounded-full w-48 mx-auto"></div>
        </div>
      </div>
    </div>
  )
}