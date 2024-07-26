import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { cookies, headers } from 'next/dist/client/components/headers'
import type { Database } from '../../database.types'
import TodoItem from './todo-item'

import React from 'react'

const TodoList = async () => {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data: todos } = await supabase
    .from('todos')
    .select()
    .order('create_at', { ascending: true })
  return (
    <ul className="my-6 mx-3">
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo}></TodoItem>
      ))}
    </ul>
  )
}

export default TodoList
