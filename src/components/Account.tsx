'use client'
import { JwtPayload } from 'jsonwebtoken'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import { logoutAction } from '@/actions/user';

export default function account({authData}:{authData:JwtPayload}) {
  const router = useRouter()
  const handleClick = async () => {
    const res = await logoutAction()
    if(res.status === 'error'){
      return alert(res.message)  
    }
    router.refresh()
  }
  return (
    <div className='container2 py-10'>
      <div className='border-b py-4'>
        <h2 className='text-lg leading-10 font-bold'>Account</h2>
        <div className='flex justify-between items-center'>
          <div>
            <p>Hello：{authData.name.name}</p>
            <p>Sign in as：{authData.name.email}</p>
          </div>
          <Button onClick={handleClick}>Logout</Button>
        </div>
      </div>
      <div className='border-b py-4'>
        <h2 className='text-lg leading-10 font-bold'>Address</h2>
        <div className='flex justify-between items-center'>
          <div>
            <p>xxxxxxxxxxsaxxxxxxxxxxxxxxxx</p>
            <p>xxxxxxxxxxsaxxxxxxxxxxxxxxxx</p>
          </div>
        </div>
      </div>
    </div>
  )
}
