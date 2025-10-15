import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../lib/auth'

export default function Signup(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const { signup } = useAuth()
  const nav = useNavigate()

  const submit = async (e) =>{
    e.preventDefault(); 
    setError('')
    try{
      const res = await signup({ email, password, name })
      if (res.token) nav('/dashboard')
      else setError(res.message || 'Signup failed')
    }catch(err){ 
      setError(err.response?.data?.message || 'Signup failed') 
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">Create an account</h2>
      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
      <form onSubmit={submit} className="space-y-3">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" required className="w-full p-2 border rounded" />
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" required className="w-full p-2 border rounded" />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" required className="w-full p-2 border rounded" />
        <button className="w-full bg-blue-600 text-white p-2 rounded">Sign up</button>
      </form>
      <p className="text-sm mt-3">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
    </div>
  )
}
