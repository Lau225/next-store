import React, { Dispatch, SetStateAction } from 'react'
import {z} from 'zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
const formSchema = z.object({
  email: z.string().min(2, {
    message: "eamil must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password must be at least 2 characters.",
  }),
})
export default function Login({setNotAccountType}:{setNotAccountType:Dispatch<SetStateAction<any>>}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:''
    },
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
  return (
    <div className='container2 my-20'>
      <h1 className='text-xl mb-3 text-center font-bold'>
        Welcome back
      </h1>
      <p className='text-center mb-6'>Login to your account</p>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="Please enter your email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Please enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' type="submit">Submit</Button>
      </form>
    </Form>
    <p className='text-center text-sm mt-3'>Not a member?
      <span className='underline text-orange-400 cursor-pointer' onClick={() => setNotAccountType('register')}>Join Us</span>
    </p>
    </div>
  )
}
