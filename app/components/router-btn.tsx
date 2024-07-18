'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const RouterBtn = ({ destination = '' }: { destination?: string }) => {
  const router = useRouter()
  return (
    <div>
      <button
        className="rounded bg-indigo-600 px-3 py-1 font-medium text-white hover:bg-indigo-700"
        onClick={() => {
          router.push(`/${destination}`)
        }}
      >
        Nav to {destination ? destination : 'home'}
      </button>
    </div>
  )
}

export default RouterBtn
