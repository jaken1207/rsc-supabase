import React from 'react'

const FirstLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main className="mt-6 text-center">
        <p>Layout 2</p>
        {children}
      </main>
    </div>
  )
}

export default FirstLayout
