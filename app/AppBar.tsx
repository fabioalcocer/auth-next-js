import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const AppBar = () => {
  const { data: session } = useSession()
  console.log({ session })

  return (
    <div className='bg-gradient-to-r from-gray-800 via-gray-900 to-black p-2 py-4'>
      <div className='flex gap-5 max-w-6xl mx-auto'>
        <Link
          className='text-lg text-zinc-100 font-semibold hover:text-zinc-300'
          href={'/'}
        >
          Home
        </Link>

        <Link
          className='text-lg text-zinc-100 font-semibold hover:text-zinc-300'
          href={'/admin/panel'}
        >
          Admin Panel
        </Link>
        <Link
          className='text-lg text-zinc-100 font-semibold hover:text-zinc-300'
          href={'/user'}
        >
          User Panel
        </Link>
        <div className='ml-auto flex gap-2'>
          {session?.user ? (
            <>
              <p className='text-sky-600'> {session.user.name}</p>
              <button
                className='text-red-500'
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              className='text-xl text-zinc-100 font-semibold hover:text-zinc-300'
              onClick={() => signIn()}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default AppBar
