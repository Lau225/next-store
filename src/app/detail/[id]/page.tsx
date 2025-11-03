import { productAction, productionsAction } from '@/actions/products'
import AddCart from '@/components/AddCart'
import Image from 'next/image'
import React from 'react'
export async function generateStaticParams(){
    const result = await productionsAction()
    return result.data.map((item:any) => ({id:item.id.toString()}))
}
export default async function page({params} : {params: Promise<any>}) {
  const {id} = params as any
  const res = await productAction(Number(id))
  const product = res.data
  return (
    <div className='container flex py-6'>
        <div className='w-64'>
            <h2 className='font-sans text-3xl leading-10 font-bold my-8'>{product.name}</h2>
            <p className='leading-10'>{product.description}</p>
        </div>
        <div className='flex-1 mx-10 bg-slate-50 p-4 rounded-lg shadow-md h-[500px] relative'>
            <Image src={product.image} alt={product.name} fill priority sizes='300' style={{objectFit:'cover'}}/>
        </div>
        <AddCart product={product}/>
    </div>
  )
}
