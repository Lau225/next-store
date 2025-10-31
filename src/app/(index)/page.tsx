import React from 'react'
import Sort from '@/components/Sort'
import Product from '@/components/Product'
import { productionsAction } from '@/actions/product'
export default async function page() {
  const result = await productionsAction()
  const production = result.data
  return (
    <div className='container flex py-6'>
      <Sort />
      <Product data={production}/>
    </div>
  )
}
