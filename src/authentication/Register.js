import React, { useState,useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiFillMail, AiOutlineEye, AiOutlineEyeInvisible ,AiFillLock } from 'react-icons/ai';
import {ImCross} from 'react-icons/im'
import Google from '../assets/img/google_icon.png'
import Login from './Login';
const Register = ({setShowLogin}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [showLogin,setLogin] =useState(false)
    // const [showRegister, setShowRegister] = useState(false);
    const modalRef = useRef();
  
  
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  
    const handleCloseModal = () => {
      setShowLogin(false);
    };
    const handlelogin = ()=>{
      setLogin(true);
    }
  return (
    <>
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white w-[700px] p-6 rounded-lg">
        <ImCross onClick={handleCloseModal} className="w-3 h-3 cursor-pointer text-[#ADADAD] ml-[600px]  "/>
          <div className="login_container">
            <h1 className="text-2xl font-bold mb-4 pt-10 pl-[150px]">Sign Up</h1>
          </div>
          <div className="login_d1 pl-[150px]">
            <p className='text-[#00A6DB]'>Elevate Your Brand with Premium Printing Solutions</p>
          </div>
          <div className="login_inputs mt-4">
            <div className="mb-4 w-[370px] ml-[150px] p-2 border border-gray-300 rounded flex">
            <AiFillMail className="w-4 h-4 text-[#ADADAD] mr-2 mt-[4px]" />
              <input
                type="text"
                placeholder="Username or Email Address"
                className="outline-none w-[360px]"
              />
            </div>
            <div className="mb-4 w-[370px] ml-[150px] p-2 border border-gray-300 rounded flex">
            <AiFillLock  className="w-5 h-5 mt-0 mr-2 text-[#ADADAD] cursor-pointer "  />
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                className="outline-none w-[320px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordVisible ? (
                <AiOutlineEye
                  className="w-6 h-6 text-[#ADADAD] cursor-pointer "
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="w-6 h-6 text-[#ADADAD] cursor-pointer"
                  onClick={togglePasswordVisibility}        
                />
              )}
            </div>
          </div>
          <div className="login_btn mt-4">
            <button className=" bg-custom-btn text-white py-2 rounded-[10px] w-[370px] ml-[150px]">
              Sign Up
            </button>
            {/* <p className="text-sm text-[#00A6DB] mt-2 cursor-pointer ml-[150px]">
              Forgot password?
            </p> */}
          </div>
          <p className="text-center mt-4 ml-[30px] text-[#D3D3D3]">---- or ----</p>
          <div className="login_google mt-4 w-[370px] ml-[150px] flex bg-white border-2 border-[#00A6DB] rounded-[12px]">
          <img src={Google} className='w-6 h-5 mt-3 ml-2' />
            <button className="w-[370px]  py-2 rounded-[10px] text-lg font-semibold  text-[#00A6DB] ">
              Sign Up with Google
            </button>
          </div>
          <div className="register mt-4 text-center w-[370px] ml-[60px] mb-[50px]">
            <p className='text-sm text-[#ADADAD]'>
              Have an account? <Link className='text-[#00A6DB] font-base' onClick={handlelogin} >Login here!</Link>
            </p>
          </div>
        </div>
      </div>
      {showLogin && (
        <div ref={modalRef}>
          <Login setShowLogin={setShowLogin} />
        </div>
      )}
    </>
  )
}

export default Register