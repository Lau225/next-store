import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'
import { Title,MenuList } from '@/lib/constants'
export default function Footer() {
  return (
    <div className="border-t mt-6">
        <div className='container py-32 flex justify-between'>
            <h2 className='text-2xl'>
                <Link href='/'>{Title}</Link>
            </h2>
            <div className='flex gap-10'>
                <div>
                    <span>Categories</span>
                    <ul className='m-4 space-y-3'>
                        <li>Clothing</li>
                        <li>Audio</li>
                        <li>Furniture</li>
                    </ul>
                </div>
                <Separator orientation='vertical' />
                <div>
                    <span>Categories</span>
                    <ul className='m-4 space-y-3'>
                        <li>Clothing</li>
                        <li>Audio</li>
                        <li>Furniture</li>
                    </ul>
                </div>
                <Separator orientation='vertical' />
                <div>
                    <span>Categories</span>
                    <ul className='m-4 space-y-3'>
                        <li>Clothing</li>
                        <li>Audio</li>
                        <li>Furniture</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
