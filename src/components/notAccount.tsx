'use client'
import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'
export default function notAccount() {
    const [notAccountType,setNotAccountType] = useState()
  return (
    <div>
      {notAccountType === 'login' ? <Login setNotAccountType={setNotAccountType}></Login> : <Register setNotAccountType={setNotAccountType}></Register>}
    </div>
  )
}
