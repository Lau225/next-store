'use server'

import db from "@/lib/db"

export async function loginAccount(email:any,password:any){
    const result = await db`select * from users where email = ${email} and password = ${password}`
    if(result.length === 0){
        return {status: 'error', message: 'Invalid email or password'}
    }else{
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