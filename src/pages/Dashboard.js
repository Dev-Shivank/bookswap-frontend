import React, { useEffect, useState } from 'react'
import api from '../lib/api'
import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard'
import { useAuth } from '../lib/auth'


export default function Dashboard(){
const [myBooks, setMyBooks] = useState([])
const [loading, setLoading] = useState(true)
const { user } = useAuth()


useEffect(()=>{
api.get('/books/mine').then(res => setMyBooks(res.data.books||[])).catch(()=>{}).finally(()=>setLoading(false))
}, [])


return (
<div>
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-bold">My Books</h2>
<Link to="/books/create" className="px-3 py-1 bg-blue-600 text-white rounded">Post a Book</Link>
</div>


{loading ? <div>Loading...</div> : (
myBooks.length === 0 ? <div className="text-gray-600">You haven't posted any books yet.</div> : (
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{myBooks.map(b => <BookCard key={b._id} book={b} />)}
</div>
)
)}


<div className="mt-8">
<h3 className="text-xl font-semibold mb-3">Recent requests on your books</h3>
<Link to="/requests" className="text-blue-600">Manage requests</Link>
</div>
</div>
)
}