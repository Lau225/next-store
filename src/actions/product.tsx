'use server'
import db from '@/lib/db'
import { Product, responseProduct } from '@/lib/global'
export async function productionsAction():Promise<responseProduct> {
    const res = (await db.query('SELECT * FROM products')) as Product[]
    return {
        code:200,
        body:'get products success',
        data:res
    }
}