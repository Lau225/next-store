import { neon } from "@neondatabase/serverless"
import { revalidatePath } from "next/cache"
const sql = neon(`${process.env.DATABASE_URL}`)
export default async function page() {
  async function createAction(formData: FormData) {
    'use server'
    const username = formData.get('username')
    const password = formData.get('password')
    await sql`INSERT INTO users (username, password) VALUES (${username}, ${password})`
    revalidatePath('/')
  }  
  return (
    <div>
      部署成功
    </div>
  )
}