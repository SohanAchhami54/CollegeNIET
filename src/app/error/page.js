'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { robotoFont, graduateFont } from '@/font'
import { useEffect, useState } from 'react'

export default function ErrorPage() {
  const searchParams = useSearchParams()
  const [errorInfo, setErrorInfo] = useState({
    code: '500',
    title: 'Something Went Wrong',
    message: 'We encountered an unexpected error.'
  })

  useEffect(() => {
    const code = searchParams.get('code') || '500'
    const message = searchParams.get('message') || 'An unexpected error occurred'

    // Set error info based on error code
    switch (code) {
      case '400':
        setErrorInfo({
          code: '400',
          title: 'Bad Request',
          message: 'The request could not be understood by the server.'
        })
        break
      case '401':
        setErrorInfo({
          code: '401',
          title: 'Unauthorized',
          message: 'You need to log in to access this resource.'
        })
        break
      case '403':
        setErrorInfo({
          code: '403',
          title: 'Forbidden',
          message: 'You don\'t have permission to access this resource.'
        })
        break
      case '404':
        setErrorInfo({
          code: '404',
          title: 'Page Not Found',
          message: 'The page you\'re looking for doesn\'t exist.'
        })
        break
      case '500':
        setErrorInfo({
          code: '500',
          title: 'Server Error',
          message: message || 'Something went wrong on our end.'
        })
        break
      case 'network':
        setErrorInfo({
          code: '🌐',
          title: 'Network Error',
          message: 'Please check your internet connection and try again.'
        })
        break
      default:
        setErrorInfo({
          code: code,
          title: 'Error',
          message: message
        })
    }
  }, [searchParams])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        {/* Error Code */}
        <div className="mb-6">
          <h2 className={`${graduateFont.className} text-8xl md:text-9xl text-red-600 font-bold`}>
            {errorInfo.code}
          </h2>
        </div>

        {/* Error Icon */}
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>

        {/* Error Title */}
        <h1 className={`${graduateFont.className} text-4xl md:text-5xl text-gray-900 mb-4`}>
          {errorInfo.title}
        </h1>
        
        {/* Error Message */}
        <p className={`${robotoFont.className} text-lg text-gray-600 mb-8`}>
          {errorInfo.message}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className={`${robotoFont.className} px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium`}
          >
            Go Back
          </button>
          
          <Link
            href="/"
            className={`${robotoFont.className} px-8 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors font-medium`}
          >
            Go to Homepage
          </Link>
        </div>

        {/* Support Link */}
        <div className="mt-8">
          <Link
            href="/contact"
            className={`${robotoFont.className} text-blue-600 hover:text-blue-800 underline`}
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}