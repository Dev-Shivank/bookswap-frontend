import React, { useEffect, useState } from 'react'
import api from '../lib/api'


export default function Requests(){
const [requests, setRequests] = useState([])
const [loading, setLoading] = useState(true)


useEffect(()=>{
api.get('/requests').then(res => setRequests(res.data.requests||[])).catch(()=>{}).finally(()=>setLoading(false))
}, [])


const action = async (id, actionType) =>{
try{
await api.patch(`/requests/${id}`, { action: actionType })
setRequests(prev => prev.map(r => r._id===id ? { ...r, status: actionType } : r))
}catch(err){ alert('Action failed') }
}


return (
<div>
<h2 className="text-2xl font-bold mb-4">Manage Requests</h2>
{loading ? <div>Loading...</div> : (
requests.length===0 ? <div className="text-gray-600">No requests yet.</div> : (
<div className="space-y-3">
{requests.map(r => (
<div key={r._id} className="bg-white p-3 rounded shadow flex items-center justify-between">
<div>
<div className="font-semibold">{r.book.title}</div>
<div className="text-sm text-gray-600">From: {r.requester?.name || r.requester?.email}</div>
<div className="text-xs mt-1">Status: <span className="font-medium">{r.status}</span></div>
</div>
<div className="flex gap-2">
{r.status === 'pending' && (
<>
<button onClick={()=>action(r._id, 'accepted')} className="px-3 py-1 rounded bg-green-600 text-white">Accept</button>
<button onClick={()=>action(r._id, 'declined')} className="px-3 py-1 rounded bg-red-500 text-white">Decline</button>
</>
)}
</div>
</div>
))}
</div>
)
)}
</div>
)
}