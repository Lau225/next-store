'use client'
import React, { useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group'
import { Button } from './ui/button'
import { useCartStore } from '@/store'
export default function AddCart({ product }: { product: any }) {
    const [value, setValue] = useState<string | null>(null)
    const store:any = useCartStore()
    
    const handleValueChange = (value:string) => {
        setValue(value)
    }
    const addProduct = () => {       
        const index = store.isItemInCart(product.name, value)     
        if(index < 0){
            store.addToCart({
                product,
                quantity:1,
                selectVariant:value
            })
        }else{
            store.updateQuantity(index,store.cartList[index].quantity + 1)
        }
        // 清空选中
        setValue('')
    }
    return (
        <div className='w-64 py-12'>
            <h3>Select</h3>
            <ToggleGroup value={value?.toString()} type="single"  className=' justify-start py-6 border-b mb-6' onValueChange={handleValueChange}>
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
            <Button onClick={addProduct} disabled={value ? false : true}>Add to cart</Button>
        </div>
    )
}
