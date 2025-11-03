'use client'
import React, { useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group'
import { Button } from './ui/button'

export default function AddCart({ product }: { product: any }) {
    const [value, setValue] = useState<string | null>(null)
    const handleValueChange = (value:string) => {
        setValue(value)
    }
    return (
        <div className='w-64 py-12'>
            <h3>Select</h3>
            <ToggleGroup type="single"  className=' justify-start py-6 border-b mb-6' onValueChange={handleValueChange}>
                {product.variant.map((item:any,index:number) => {
                    return(
                        <ToggleGroupItem className='px-4 bg-slate-100 mr-3' key={index} value={item}>
                            {item}
                        </ToggleGroupItem>
                    )
                })}
            </ToggleGroup>
            <h3>Price</h3>
            <p className='text-2xl font-bold text-red-400 mb-6'>${product.price}</p>
            <Button disabled={value ? false : true}>Add to cart</Button>
        </div>
    )
}
