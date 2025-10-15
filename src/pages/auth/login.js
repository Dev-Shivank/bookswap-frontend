import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../lib/auth'


export default function Login(){
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const { login } = useAuth()
const nav = useNavigate()


const submit = async (e) =>{
e.preventDefault(); setError('')
try{
const res = await login(email, password)
if (res.token) nav('/dashboard')
else setError(res.message || 'Login failed')
}catch(err){ setError(err.response?.data?.message || 'Login failed') }
}


return (
<div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-8">
<h2 className="text-2xl font-bold mb-4">Login</h2>
{error && <div className="text-red-500 text-sm mb-2">{error}</div>}
<form onSubmit={submit} className="space-y-3">
<input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" required className="w-full p-2 border rounded" />
<input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" required className="w-full p-2 border rounded" />
<button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
</form>
<p className="text-sm mt-3">Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link></p>
</div>
)
}