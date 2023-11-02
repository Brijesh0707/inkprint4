import AuthForm from "./AuthForm"


function Modal({isLogin, setLogForm, logForm}) {
  return (
    <div className="fixed bg-white z-20 rounded-[24px] h-[580px] w-[56vw] left-[23%] top-[1px]">
        {logForm && <AuthForm isLogin={isLogin}  logForm={logForm} setLogForm={setLogForm}/>}
        {!logForm && <AuthForm  logForm={logForm} setLogForm={setLogForm}/>}
    </div>
  )
}

export default Modal