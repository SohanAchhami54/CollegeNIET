import Link from 'next/link'
import { robotoFont, graduateFont } from '@/font'

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        {/* Lock Icon */}
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>

        <h1 className={`${graduateFont.className} text-4xl md:text-5xl text-gray-900 mb-4`}>
          Access Denied
        </h1>
        
        <p className={`${robotoFont.className} text-lg text-gray-600 mb-8`}>
          You need to log in to access this page.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className={`${robotoFont.className} px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium`}
          >
            Log In
          </Link>
          
          <Link
            href="/"
            className={`${robotoFont.className} px-8 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors font-medium`}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}