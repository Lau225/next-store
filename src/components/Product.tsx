'use client'
import { Product as P } from '@/lib/global'
import Image from 'next/image'
import React from 'react'

export default function Product({data}:{data:P[]}) {
    const products = [...data]
  return (
    <div className='flex-1'>
            <h2 className='mb-8 text-4xl'>All Production</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    products.map((item,index) => {
                        return (
                            <div key={index} className='bg-slate-50 p-4 rounded-lg shadow-md hover:bg-slate-200
                            transition duration-300 ease-in-out cursor-pointer'>
                                <Image src={item.image} alt={item.description} width={300} height={300} priority/>
                                <div className='flex items-center justify-between mt-4'>
                                    <h3 className='flex-2xl text-slate-700'>{item.name}</h3>
                                    <p className='text-lg font-bold text-red-400'>${item.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    </div>
  )
}
