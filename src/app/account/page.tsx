import NotAccount from "@/components/notAccount";
import Account from "@/components/Account";
import { authAction } from "@/actions/user";

export default async function page(){
  const auth:any = await authAction()
  console.log(auth);
  
  return (
    <>
      {auth.status === 'success' ? <Account authData={auth.data}/> : <NotAccount />}
    </>
  )
}