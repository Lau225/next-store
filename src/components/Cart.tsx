'use client'
import Link from 'next/link'
import React from 'react'
import { ArrowUpRight, Trash2 } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import Image from 'next/image'
import { Select, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { SelectContent } from './ui/select'
import { Button } from './ui/button'
import { useCartStore } from '@/store'
export default function Cart() {
    const store:any = useCartStore()
    const catrList = useCartStore((state: any) => state.cartList)
    const QuantityPotions = Array.from({ length: 10 }, (_, i) => i + 1)
    const deleteItem = (index: number) => {
        store.removeFromCart(index)
    }
    const handleValueChange = (value:any, index: number) => {
        store.updateQuantity(index,value)
    }
    return (
        <div className='container'>
            {
                catrList.length ?
                    <div className='py-24 px-2 flex '>
                        <div className='flex-1 mr-14'>
                            <h2 className='text-2xl font-bold'>Cart</h2>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className='w-[400px]'>Item</TableHead>
                                        <TableHead>Quantity</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead className='text-right'>Total</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        catrList.map((cartItem:any, i:any) => {
                                            return (
                                                <TableRow key={i}>
                                                    <TableCell>
                                                        <div className='flex items-center'>
                                                            <Image src={cartItem.product.image} alt={cartItem.product.name} width={64} height={64} priority style={{ width: '64px', height: "64px", objectFit: 'cover' }} />
                                                            <div className='ml-4 space-y-3'>
                                                                <p className='text-sm font-medium'>{cartItem.product.name}</p>
                                                                <p className='text-xs text-gray-400'>{cartItem.selectVariant}</p>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className='flex items-center'>
                                                            <Trash2 onClick={() => deleteItem(i)} className='mr-1' color="gray" cursor="pointer" />
                                                            <Select onValueChange={(value) => handleValueChange(value,i)} value={cartItem.quantity.toString()}> 
                                                                <SelectTrigger className='w-14'>
                                                                    <SelectValue placeholder="Select Quantity" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {
                                                                        QuantityPotions.map(item => {
                                                                            return <SelectItem key={item} value={item.toString()}>{item}</SelectItem>
                                                                        })
                                                                    }
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>${cartItem.product.price}</TableCell>
                                                    <TableCell className='text-right'>${cartItem.product.price * cartItem.quantity}</TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </div>
                        <div className='w-56'>
                            <h2 className='font-sans font-medium flex flex-row text-2xl mb-6'>Total</h2>
                            <p className='text-2xl font-bold text-red-400 mb-6'>${
                                (store.cartList.reduce((acc:any,cartItem:any) => acc + cartItem.product.price * cartItem.quantity,0)).toFixed(2)}</p>
                            <Link href='/account'>
                                <Button className='w-full'>Login</Button>
                            </Link>
                            <p className='text-sm text-slate-500 text-center mt-1'>
                                You need to login in to checkout
                            </p>
                        </div>
                    </div> :
                    <div className='py-48 px-2'>
                        <h2 className='text-2xl font-bold'>Cart</h2>
                        <p className='text-sm w-[400px] mb-6 mt-4'>
                            You don't have any items in your cart. Start shopping to fill it!
                        </p>
                        <div className='flex text-sm items-center underline text-orange-400'>
                            <Link href='/'>Start Shopping</Link>
                            <ArrowUpRight width={18} />
                        </div>
                    </div>
            }
        </div>
    )
}
