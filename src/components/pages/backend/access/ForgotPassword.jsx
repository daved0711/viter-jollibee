import { imgPath } from '@/components/helpers/functions-general';
import { ArrowLeft, CheckCircle2, Eye, EyeClosed, EyeOff, MailCheck } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem("theme"));
    const [success, setSuccess] = React.useState(false);
    React.useEffect(() => {
        function setThemeColor() {
          const html = document.querySelector("html");
          html.setAttribute("class", "");
          html.classList.add(theme);
          setTheme(localStorage.getItem("theme"));
        }
    
        setThemeColor();
      }, [theme]);
    
    
  return (
    <main className='h-screen bg-primary center-all'>
      <div className='ForgotPassword-main bg-secondary  max-w-[320px] w-full p-4 border-line border rounded-md'>
<img src={`${imgPath}/jollibee-logo.webp`} alt=""  className='w-[150px] mx-auto mb-2'/>
      {success ? (<div className='success-message mt-5'>
      <MailCheck size={50} stroke='green' className='mx-auto' />
        <p className='my-5'>We have sent the instruction on hoow to reset your password</p>
            <Link to="/admin/login" className='text-center block hover:text-accent'> Back to Login</Link>
      </div>) : (<div>
      <h5 className='text-center'>Forgot Password</h5>     
      <form action="">
        <div className="input-wrap">
           <p className='text-center'>Enter your Registered email to rest your password</p>
            <label htmlFor="">Email</label>
            <input type="text" className='!py-2' />       
        </div>
      
      
        
        <button className=' btn btn-accent w-full center-all mt-5' onClick={()=> setSuccess(true)}>ResetPassword</button>
        <Link to="/" className='text-sm text-center block mt-5 hover:text-accent flex items-center justify-center'><ArrowLeft/> Go back to Login</Link>
      </form>
      </div>) }
      
      
      </div>
    </main>
  )
}

export default ForgotPassword

