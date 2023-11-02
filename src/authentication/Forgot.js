import { ImCross } from 'react-icons/im';

const Forgot = ( { setShowLogin }) => {
    const handleCloseModal = () => {
        setShowLogin(false);
      };
  return (
  <>
     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white w-[700px] p-6 rounded-lg relative ">
          <ImCross onClick={handleCloseModal} className="w-3 h-3 cursor-pointer mt-[20px] text-[#ADADAD]  ml-[600px]" />
          <div className="login_container mt-[170px]  ">
            <h1 className="text-2xl font-bold mb-4 pt-10 pl-[220px]">Forgot Password?</h1>
          </div>
          {/* <div className="login_d1 pl-[150px]">
            <p className='text-[#00A6DB]'>Elevate Your Brand with Premium Printing Solutions</p>
          </div> */}
          <div className="login_inputs mt-4">
            <div className="mb-4 w-[370px] ml-[150px] p-2">
             <h1 className='font-semibold text-[#474747] text-sm pb-7'>Email<span className='text-red-600'>*</span></h1>
              <input
                type="email"
                placeholder="Name@gmail.com"
                className="outline-none w-[360px] ml-5"
              />
            </div>
            {/* <div className="mb-4 w-[370px] ml-[150px] p-2 border border-gray-300 rounded flex">
              <AiFillLock className="w-5 h-5 mt-0 mr-2 text-[#ADADAD] cursor-pointer" />
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                className="outline-none w-[320px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordVisible ? (
                <AiOutlineEye
                  className="w-6 h-6 text-[#ADADAD] cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="w-6 h-6 text-[#ADADAD] cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div> */}
          </div>
          <div className="login_btn mt-4 mb-[170px]">
            <button className="bg-custom-btn text-white py-2 rounded-[10px] w-[250px] ml-[200px]">
            Request a reset link
            </button>
            {/* <p className="text-sm text-[#00A6DB] mt-2 cursor-pointer ml-[150px]">
              Forgot password?
            </p> */}
          </div>
          {/* <p className="text-center mt-4 ml-[30px] text-[#D3D3D3]">---- or ----</p> */}
          {/* <div className="login_google mt-4 w-[370px] ml-[150px] flex bg-white border-2 border-[#00A6DB] rounded-[12px]">
          <img src={Google} className='w-6 h-5 mt-3 ml-2' />
            <button className="w-[370px] py-2 rounded-[10px] text-lg font-semibold text-[#00A6DB] ">
              Log in with Google
            </button>
          </div> */}
          {/* <div className="register mt-4 text-center w-[370px] ml-[60px] mb-[50px]">
            <p className='text-sm text-[#ADADAD]'>
              New to InkPrint? <Link className='text-[#00A6DB] font-base' onClick={handleRegisterClick}>Register here!</Link>
            </p>
          </div> */}
        </div>
      </div>
  </>
  )
}

export default Forgot