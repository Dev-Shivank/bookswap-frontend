import React, { useEffect, useState } from 'react';
import api from '../lib/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Requests() {
  const [incoming, setIncoming] = useState([]);
  const [outgoing, setOutgoing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get('/requests', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(res => {
        setIncoming(res.data.incoming || []);
        setOutgoing(res.data.outgoing || []);
      })
      .catch(err => {
        console.error(err);
        toast.error('Failed to fetch requests.', { position: 'top-right', autoClose: 4000 });
      })
      .finally(() => setLoading(false));
  }, []);

  const handleAction = async (id, actionType) => {
    try {
      const res = await api.put(`/requests/${id}`, { status: actionType }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setIncoming(prev => prev.map(r => r._id === id ? res.data : r));
      toast.success(`Request ${actionType}`, { position: 'top-right', autoClose: 3000 });
    } catch (err) {
      console.error(err);
      toast.error('Action failed.', { position: 'top-right', autoClose: 4000 });
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Incoming Requests</h2>
      {incoming.length === 0 ? (
        <div className="text-gray-600">No incoming requests.</div>
      ) : (
        <div className="space-y-3">
          {incoming.map(r => (
            <div key={r._id} className="bg-white p-3 rounded shadow flex items-center justify-between">
              <div>
                <div className="font-semibold">{r.book.title}</div>
                <div className="text-sm text-gray-600">From: {r.fromUser.name || r.fromUser.email}</div>
                <div className="text-xs mt-1">Status: <span className="font-medium">{r.status}</span></div>
              </div>
              <div className="flex gap-2">
                {r.status === 'pending' && (
                  <>
                    <button onClick={() => handleAction(r._id, 'accepted')} className="px-3 py-1 rounded bg-green-600 text-white">Accept</button>
                    <button onClick={() => handleAction(r._id, 'declined')} className="px-3 py-1 rounded bg-red-500 text-white">Decline</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <h2 className="text-2xl font-bold mt-8 mb-4">Outgoing Requests</h2>
      {outgoing.length === 0 ? (
        <div className="text-gray-600">No outgoing requests.</div>
      ) : (
        <div className="space-y-3">
          {outgoing.map(r => (
            <div key={r._id} className="bg-white p-3 rounded shadow">
              <div className="font-semibold">{r.book.title}</div>
              <div className="text-sm text-gray-600">To: {r.toUser.name || r.toUser.email}</div>
              <div className="text-xs mt-1">Status: <span className="font-medium">{r.status}</span></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
