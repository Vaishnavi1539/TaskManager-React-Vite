import React, { useState, createContext, useEffect } from 'react'
import { getLocalStorage,setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState([])
  
useEffect(() => {
    const { employees } = getLocalStorage();
    if (!employees || employees.length === 0) {
        setLocalStorage();
        setUserData(getLocalStorage().employees);
    } else {
        setUserData(employees);
    }
}, []);
  
  return (
    <AuthContext.Provider value={[userData,setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider