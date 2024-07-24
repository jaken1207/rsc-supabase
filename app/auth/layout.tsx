import { cookies, headers } from 'next/dist/client/components/headers'
import React, { Children } from 'react'
import SupabaseListener from '../components/supabase-listener'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/database.types'

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return (
    <div>
      <SupabaseListener accessToken={session?.access_token} />
      {children}
    </div>
  )
}

export default AuthLayout
