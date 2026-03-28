import React, { useState } from 'react'

const Login = ({handleLogin}) => {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-10'>
        
        <form onSubmit={submitHandler}
          className='flex flex-col items-center gap-4'>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='bg-transparent outline-none border-2 border-emerald-600 px-4 py-2 rounded-full'
            type="email"
            placeholder='Enter your email'
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='bg-transparent outline-none border-2 border-emerald-600 px-4 py-2 rounded-full'
            type="password"
            placeholder='Enter your password'
          />

          <button className='mt-3 bg-emerald-600 text-white px-4 py-2 rounded-full'>
            Log in
          </button>

        </form>

      </div>
    </div>
  )
}

export default Login
