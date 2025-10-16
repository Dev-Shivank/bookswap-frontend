import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/auth'


export default function Navbar(){
const { user, logout } = useAuth()
const nav = useNavigate()
return (
<nav className="bg-white shadow-sm">
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<Link to="/" className="font-bold text-xl">BookSwap</Link>
<Link to="/" className="text-sm text-gray-600">Browse</Link>
</div>
<div className="flex items-center gap-3">
{user ? (
<>
<Link to="/dashboard" className="text-sm">Dashboard</Link>
<Link to="/books/create" className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Post Book</Link>
<button onClick={()=>{logout(); nav('/')}} className="text-sm text-red-500">Logout</button>
</>
) : (
<>
{/* <Link to="/login" className="text-sm">Login</Link> */}
<Link to="/signup" className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Sign up</Link>
</>
)}
</div>
</div>
</nav>
)
}