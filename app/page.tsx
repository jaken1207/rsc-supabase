import Image from 'next/image'
import NoteList from './components/notes-list'
import TimerCounter from './components/timer-counter'
import { Suspense } from 'react'
import Spinner from './components/spinner'
import RefreshBtn from './components/refresh-btn'

export default function Home() {
  return (
    <main>
      <div className="m-10 text-center">
        Hello world🚀
        <Suspense fallback={<Spinner color="border-green-500" />}>
          {/* ↓ServerComponent */}
          <NoteList />
        </Suspense>
        {/* ↓ClientComponent */}
        <TimerCounter />
        <RefreshBtn />
      </div>
    </main>
  )
}
