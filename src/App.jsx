import React, { useState, useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashBoard'
import { AuthContext } from './context/Authprovider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  // Keep logged in employee updated on userData change
  useEffect(() => {
    if (user === 'employee' && userData) {
      const storedEmail = loggedInUserData?.email || JSON.parse(localStorage.getItem('loggedInUser'))?.data?.email
      if (storedEmail) {
        const updatedUser = userData.find(e => e.email === storedEmail)
        if (updatedUser) setLoggedInUserData(updatedUser)
      }
    }
  }, [userData, loggedInUserData, user])

  const handleLogin = (email, password) => {
    const trimmedEmail = email.trim()
    const trimmedPass = password.trim()

    if (trimmedEmail === 'admin@example.com' && trimmedPass === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find(e => e.email === trimmedEmail && e.password === trimmedPass)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert("Invalid credentials")
      }
    }
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && <AdminDashboard changeUser={setUser} />}

      {user === 'employee' && loggedInUserData && (
        <EmployeeDashboard
          changeUser={setUser}
          data={userData.find(e => e.email === loggedInUserData.email)}
        />
      )}
    </>
  )
}

export default App
