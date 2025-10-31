import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'
import { MenuList, Title } from '@/lib/constants'

export default async function Header() {
  return (
    <div className='h-16 px-10 border-b bg-white'>
      <div className="container flex items-center justify-between h-full">
        <h1 className='text-2xl'>
          <Link href='/'>{Title}</Link>
        </h1>
        <div className='flex justify-end space-x-4 text-sm h-1/3'>
        {
          MenuList.map((item,index) => {
            return (
              <>
                { index!==0 && <Separator orientation='vertical' />}
                <Link key={index} href={item.href}>{item.label}</Link>
              </>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}
