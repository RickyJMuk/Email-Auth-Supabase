import { login } from './actions'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen  bg-white text-black flex flex-col items-center justify-center">
      <form className="flex flex-col items-center">
        <h1 className='text-3xl font-bold'>Login</h1>

        <div className='flex flex-col mt-8'>

          <div className='flex flex-col gap-x-4'>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required className="mt-2 px-2 border border-black b-2 h-12 rounded-md " />
          </div>
          <div className='flex flex-col gap-x-4'>
            <label htmlFor="password" className="mt-4">Password:</label>
            <input id="password" name="password" type="password" required className="mt-2 px-2 border border-black b-2 h-12 rounded-md " />
          </div>

          <button formAction={login} className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Log in
          </button>

          <p className='mt-4 text-black'>Don&apos;t have an account? <Link href="/signup" className="font-bold">SignUp</Link></p>
        </div>
      </form>
    </div>
  )
}
