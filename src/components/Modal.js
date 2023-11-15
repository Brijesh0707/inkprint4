import AuthForm from "./AuthForm"


function Modal({isLogin, setLogForm, logForm, handleCloseModal}) {
  return (
    <div className="fixed bg-white z-[102] rounded-[24px] h-[580px] w-[56vw] left-[23%] top-[1px] mt-[6rem] md:w-[100%] md:h-[100vh] md:rounded-none md:left-0 md:top-0 md:mt-0">
        {logForm && <AuthForm isLogin={isLogin}  logForm={logForm} setLogForm={setLogForm} handleCloseModal={handleCloseModal}/>}
        {!logForm && <AuthForm  logForm={logForm} setLogForm={setLogForm} handleCloseModal={handleCloseModal}/>}
    </div>
  )
}

export default Modal