'use client'
import Login from '@/components/Login'
import Register from '@/components/Register'
import React, { useState } from 'react'

export default function page() {
   const [notAccountType,setNotAccountType] = useState('login')
    return (
      <div>
        {notAccountType === 'login' ? <Login setNotAccountType={setNotAccountType}></Login> : <Register setNotAccountType={setNotAccountType}></Register>}
      </div>
    )
}
