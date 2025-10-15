import React from 'react'
import { Link } from 'react-router-dom'


export default function BookCard({ book }){
return (
<div className="bg-white p-4 rounded shadow-sm flex flex-col">
<div className="h-48 bg-gray-100 rounded overflow-hidden mb-3 flex items-center justify-center">
{book.imageUrl ? <img src={book.imageUrl} alt={book.title} className="object-cover h-full w-full" /> : <div className="text-gray-400">No image</div>}
</div>
<h3 className="font-semibold text-lg">{book.title}</h3>
<p className="text-sm text-gray-600">{book.author}</p>
<p className="text-xs mt-2">Condition: <span className="font-medium">{book.condition}</span></p>
<div className="mt-auto pt-3 flex gap-2">
<Link to={`/books/${book._id}`} className="text-sm px-3 py-1 bg-blue-600 text-white rounded">View</Link>
</div>
</div>
)
}