import google_icon from '../assets/img/google_icon.png';
import { useGoogleLogin } from '@react-oauth/google';

function GoogleAuthButton({children}) {
        const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
      });
  return (
    <button className='border-2 rounded border-blue w-full hover:bg-custom-btn hover:text-white transition duration-300 p-[10px] text-custom-text flex justify-between items-center mt-[16px] h-[44px] max-h-[44px]' onClick={login}>
        <img src={google_icon} alt="google logo" className='md:h-[16px] md:w-[16px]'/>
        <span>{children}</span>
        <span></span>
    </button>
  )
}

export default GoogleAuthButton