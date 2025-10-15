import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/auth/login'
import Signup from './pages/auth/Signup'
import Dashboard from './pages/Dashboard'
import CreateBook from './pages/CreateBook'
import Requests from './pages/Requests'
import BookDetails from './pages/BookDetails'
import { useAuth } from './lib/auth'
import Navbar from './components/Navbar'


function PrivateRoute({ children }) {
const { user, loading } = useAuth()
if (loading) return <div className="p-6">Loading...</div>
return user ? children : <Navigate to="/login" replace />
}


export default function App(){
return (
<div className="min-h-screen">
<Navbar />
<main className="max-w-6xl mx-auto p-4">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/login" element={<Login/>} />
<Route path="/signup" element={<Signup/>} />


<Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
<Route path="/books/create" element={<PrivateRoute><CreateBook/></PrivateRoute>} />
<Route path="/requests" element={<PrivateRoute><Requests/></PrivateRoute>} />
<Route path="/books/:id" element={<PrivateRoute><BookDetails/></PrivateRoute>} />


<Route path="*" element={<div className="p-8">Page not found</div>} />
</Routes>
</main>
</div>
)
}