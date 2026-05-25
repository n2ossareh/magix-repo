import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [activeKid, setActiveKid] = useState(null)
  const login = (userData) => {setUser(userData), setActiveKid(true)}
  const logout = () => {setUser(null), setActiveKid(null)}

  return (
    <AuthContext.Provider value={{ user, activeKid, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}