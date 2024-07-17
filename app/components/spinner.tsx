import React from 'react'

const Spinner = ({ color = 'border-blue-500' }: { color?: string }) => {
  return (
    <div className="my-16 flex justify-center">
      {/* <div
      className={`h-10 w-10 animate-spin rounded-full border-4 ${color} border-t-transparent`}
      /> */}
      <span className={`loading loading-infinity loading-lg ${color}`}></span>
    </div>
  )
}

export default Spinner
