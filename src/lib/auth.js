import React, { createContext, useContext, useEffect, useState } from 'react'
import api from './api'


const AuthContext = createContext()


export function AuthProvider({ children }) {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)


useEffect(() => {
const token = localStorage.getItem('token')
if (!token) return setLoading(false)
    
// optionally fetch profile
api.get('/auth/me').then(res => {
setUser(res.data.user)
}).catch(()=>{
localStorage.removeItem('token')
}).finally(()=>setLoading(false))
}, [])


const login = async (email, password) => {
const res = await api.post('/auth/login', { email, password })
if (res.data.token) {
localStorage.setItem('token', res.data.token)
setUser(res.data.user || null)
}
return res.data
}


const signup = async (payload) => {
const res = await api.post('/auth/signup', payload)
if (res.data.token) {
localStorage.setItem('token', res.data.token)
setUser(res.data.user || null)
}
return res.data
}


const logout = () => {
localStorage.removeItem('token')
setUser(null)
}


return (
<AuthContext.Provider value={{ user, loading, login, signup, logout }}>
{children}
</AuthContext.Provider>
)
}


export const useAuth = () => useContext(AuthContext)