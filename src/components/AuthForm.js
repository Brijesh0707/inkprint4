import { useState } from "react";
import { IoMail } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import AuthComponentBtn from "./AuthComponentBtn";
import GoogleAuthButton from "./GoogleAuthButton";
import { Link } from "react-router-dom";

function Loginform({ setLogForm, logForm }) {
  const [passwordToggle, setpasswordToggle] = useState(true);
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className='w-[50%]'>
        <h4 className="font-medium text-[36px] mb-[20px]">Log In</h4>
        <p className="text-custom-text">Elevate Your Brand with Premium Printing Solutions</p>
        <div className="flex items-center w-full border-grayMid border rounded-lg text-custom-text-grey px-[12px] py-[6px] mt-[24px] mb-[20px]">
        <IoMail/>
        <input type="text" name="email" placeholder="Username or Email Address" className="text-black focus:outline-none px-[12px] w-full"/>
      </div>
      <div className="flex items-center w-full border-grayMid border rounded-lg text-custom-text-grey px-[12px] py-[6px] mb-[40px]">
        <FaLock/>
        <input type={passwordToggle? 'password' : 'text'} name="password" placeholder="Password"  className="text-black focus:outline-none px-[12px] w-full"/>
        <button onClick={()=>{setpasswordToggle(!passwordToggle)}}>{passwordToggle ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</button>
      </div>
      <AuthComponentBtn>Login</AuthComponentBtn>
      <p className="font-medium text-[14px] cursor-pointer text-custom-text mt-[17px]">Forgot Password?</p>
      <div className="flex w-full justify-center items-center mt-[25px]">
        <hr className="border-t border-grayLight w-[57px]"/>
        <span className="mx-[10px] text-custom-text-grey">or</span>
        <hr className="border-t border-grayLight w-[57px]"/>
      </div>
      <GoogleAuthButton>Log in with Google</GoogleAuthButton>
      <p className="font-medium text-[14px] text-custom-text-grey mt-[20px]">New to InkPrint? <button onClick={() => { setLogForm(!logForm) }} className="text-custom-text">Register here!</button></p>
      </div>
    </div>
  )
}

function SignupForm({ setLogForm, logForm }) {
  const [passwordToggle, setpasswordToggle] = useState(true);
  return (
    <div className='h-full w-full flex justify-center items-center'>
    <div className='w-[50%]'>
      <h4 className="font-medium text-[36px] mb-[20px]">Sign Up</h4>
      <p className="text-custom-text">Elevate Your Brand with Premium Printing Solutions</p>
      <GoogleAuthButton>Sign up with Google</GoogleAuthButton>
      <div className="flex w-full justify-center items-center mt-[25px]">
      <hr className="border-t border-grayLight w-[57px]"/>
      <span className="mx-[10px] text-custom-text-grey">or</span>
      <hr className="border-t border-grayLight w-[57px]"/>
    </div>
      <div className="flex items-center w-full border-grayMid border rounded-lg text-custom-text-grey px-[12px] py-[6px] mt-[24px] mb-[20px]">
      <IoMail/>
      <input type="text" name="email" placeholder="Your Email Address" className="text-black focus:outline-none px-[12px] w-full"/>
    </div>
    <div className="flex items-center w-full border-grayMid border rounded-lg text-custom-text-grey px-[12px] py-[6px] mb-[12px]">
      <FaLock/>
      <input type={passwordToggle? 'password' : 'text'} name="password" placeholder="Password"  className="text-black focus:outline-none px-[12px] w-full"/>
      <button onClick={()=>{setpasswordToggle(!passwordToggle)}}>{passwordToggle ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</button>
    </div>
    <p className="text-[14px] text-custom-text-grey mb-[32px]">By signing up, I agree to the <Link className="decoration-solid underline" to="/termsandconditions">Terms of Service</Link> and <Link className="decoration-solid underline" to="/privacypolicy">Privacy Policy</Link>.</p>
    <AuthComponentBtn>Sign up</AuthComponentBtn>
    
    
    <p className="font-medium text-[14px] text-custom-text-grey mt-[20px]">Have an account? <button onClick={() => { setLogForm(!logForm) }} className="text-custom-text">Login now!</button></p>
    </div>
  </div>
  );
}

function AuthForm({ isLogin, setLogForm, logForm }) {
  if (isLogin) {
    return <Loginform logForm={logForm} setLogForm={setLogForm} />
  }
  else {
    return <SignupForm logForm={logForm} setLogForm={setLogForm} />
  }
}

export default AuthForm