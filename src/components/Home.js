import React, { useEffect, useState } from 'react'
import api from '../lib/api'
import BookCard from '../components/BookCard'


export default function Home(){
const [books, setBooks] = useState([])
const [loading, setLoading] = useState(true)


useEffect(()=>{
api.get('/books').then(res=> setBooks(res.data.books || [])).catch(()=>{}).finally(()=>setLoading(false))
}, [])


return (
<div>
<header className="mb-6">
<h1 className="text-3xl font-bold">Find books near you</h1>
<p className="text-gray-600">Swap books with community members</p>
</header>


{loading ? <div>Loading...</div> : (
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{books.map(b => <BookCard key={b._id} book={b} />)}
</div>
)}
</div>
)
}