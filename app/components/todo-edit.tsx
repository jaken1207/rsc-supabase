import useStore from '@/store'
import supabase from '@/utils/supabase'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import React, { FormEvent } from 'react'

const EditTask = () => {
  const router = useRouter()
  const { editedTask } = useStore()
  const { loginUser } = useStore()
  const updateTask = useStore((state) => state.updateEditedTask)
  const reset = useStore((state) => state.resetEditedTask)
  function signOut() {
    supabase.auth.signOut()
    router.push('/auth')
  }
  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (editedTask.id === '') {
      const { error } = await supabase
        .from('todos')
        .insert({ title: editedTask.title, user_id: loginUser.id })
      router.refresh()
      reset()
    } else {
      const { error } = await supabase
        .from('todos')
        .update({ title: editedTask.title })
        .eq('id', editedTask.id)
      router.refresh()
      reset()
    }
  }
  return (
    <div className="m-5 text-center">
      <p className="my-3">{loginUser.email}</p>
      <div className="flex justify-center">
        <ArrowRightOnRectangleIcon
          className="my-3 h-6 w-6 cursor-pointer text-blue-500"
          onClick={signOut}
        />
      </div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="my-2 rounded border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
          placeholder="NewTask?"
          value={editedTask.title || ''}
          onChange={(e) => updateTask({ ...editedTask, title: e.target.value })}
        />
        <button
          type="submit"
          className="ml-2 rounded bg-ingigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700"
        >
          {editedTask.id === '' ? 'Create' : 'Update'}
        </button>
      </form>
    </div>
  )
}

export default EditTask
