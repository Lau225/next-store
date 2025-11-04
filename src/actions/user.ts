'use server'

import db from "@/lib/db"
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers"
const SECRET_KEY = 'DUYI-SECRET-KEY'
export async function loginAccount(email:any,password:any){
    const result = await db`select * from users where email = ${email} and password = ${password}`
    const cookie = await cookies()
    if(result.length === 0){
        return {status: 'error', message: 'Invalid email or password'}
    }else{
        const token = jwt.sign({email,name:result[0],userId:result[0].id},SECRET_KEY,{
            expiresIn:'1h'
        })
        cookie.set({
            name:'token',
            value:token,
            path:'/',
            maxAge:60*60*24
        })
        return {status: 'success', message: 'Login successful', user: result[0]}
    }
}

export async function registerAccount(email:any,name:any,password:any){
    // 检查email是否存在
    const checkEmail = await db`select * from users where email = ${email}`
    if(checkEmail.length > 0){
        return {status: 'error', message: 'Email already exists'}
    }
    const result = await db`insert into users (email,name,password) values (${email},${name},${password})`
    return {status: 'success', message: 'Register successful', user: result[0]}
    
}

export async function authAction(){
    const cookie = await cookies()
    const token = cookie.get('token')?.value
    try{
        if(!token){
            return {status: 'error', message: 'Auth failed'}
        }else{
            const result = jwt.verify(token,SECRET_KEY)
            return {status: 'success', message: 'Auth successful', data: result}
        }
    }catch(err){
        return {status: 'error', message: 'Auth failed'}
    }
}
export async function logoutAction(){
    const cookie = await cookies()
    cookie.delete('token')
    return {status: 'success', message: 'Logout successful'}
}