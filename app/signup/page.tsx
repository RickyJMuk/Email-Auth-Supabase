import { signup } from './actions'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center">
      <form className="flex flex-col items-center">
        <h1 className='text-3xl font-bold'>Sign up</h1>

        <div className='flex flex-col mt-8'>
          <div className='flex flex-col gap-x-4'>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required className="mt-2 px-2 border border-black b-2 h-12 rounded-md" />
          </div>

          <div className='flex flex-col gap-x-4 mt-4'>
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required className="mt-2 px-2 border border-black b-2 h-12 rounded-md" />
          </div>

          <div className='flex flex-col gap-x-4 mt-4'>
            <label htmlFor="first_name">First Name:</label>
            <input id="first_name" name="first_name" type="text" required className="mt-2 px-2 border border-black b-2 h-12 rounded-md" />
          </div>

          <div className='flex flex-col gap-x-4 mt-4'>
            <label htmlFor="last_name">Last Name:</label>
            <input id="last_name" name="last_name" type="text" required className="mt-2 px-2 border border-black b-2 h-12 rounded-md" />
          </div>

          <button formAction={signup} className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign up
          </button>

          <p className='mt-4 text-black'>Already have an account? <Link href="/login" className="font-bold">Login</Link></p>
        </div>
      </form>
    </div>
  )
}
