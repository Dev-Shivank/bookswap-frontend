import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../lib/api'


export default function BookDetails(){
const { id } = useParams()
const [book, setBook] = useState(null)
const [loading, setLoading] = useState(true)
const [message, setMessage] = useState('')


useEffect(()=>{
api.get(`/books/${id}`).then(res => setBook(res.data.book)).catch(()=>{}).finally(()=>setLoading(false))
}, [id])


const requestBook = async () =>{
try{
await api.post(`/books/${id}/request`, { message })
alert('Request sent')
}catch(err){ alert('Failed to send request') }
}


if (loading) return <div>Loading...</div>
if (!book) return <div>Book not found</div>


return (
<div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-6">
<div className="flex gap-6">
<div className="w-48 h-64 bg-gray-100 overflow-hidden rounded">
{book.imageUrl ? <img src={book.imageUrl} alt={book.title} className="object-cover w-full h-full"/> : <div className="p-6 text-gray-400">No image</div>}
</div>
<div>
<h2 className="text-2xl font-bold">{book.title}</h2>
<p className="text-gray-600">by {book.author}</p>
<p className="mt-3">Condition: <span className="font-medium">{book.condition}</span></p>
<p className="mt-4 text-sm text-gray-700">{book.description || ''}</p>


<div className="mt-6">
<textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Message to owner (optional)" className="w-full p-2 border rounded" />
<button onClick={requestBook} className="mt-3 px-4 py-2 bg-blue-600 text-white rounded">Request this book</button>
</div>
</div>
</div>
</div>
)
}