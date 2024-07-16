'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const RefreshBtn = () => {
  const router = useRouter()
  return (
    <div>
      <button
        className="rounded bg-indigo-600 px-3 py-1 font-medium text-white hover:bg-indigo-700"
        onClick={() => {
          router.refresh()
        }}
      >
        Refresh current route
      </button>
    </div>
  )
}

export default RefreshBtn
