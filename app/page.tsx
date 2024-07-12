import Image from 'next/image'
import NoteList from './components/notes-list'

export default function Home() {
  return (
    <main>
      <div className="m-10 text-center">
        Hello world🚀
        <NoteList />
      </div>
    </main>
  )
}
