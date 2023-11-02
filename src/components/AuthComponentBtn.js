// import { useGoogleLogin } from '@react-oauth/google';

function AuthComponentBtn({children}) {
    // const login = useGoogleLogin({
    //     onSuccess: tokenResponse => console.log(tokenResponse),
    //   });
  return (
    <button className="w-full bg-custom-btn rounded text-white p-[10px]">
        {children}
    </button>
  )
}

export default AuthComponentBtn