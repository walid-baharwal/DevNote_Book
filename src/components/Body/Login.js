import React,{useState} from 'react'
import {  useNavigate ,Link} from 'react-router-dom';


const Login = () => {
  const [error,setError] = useState('')
  const [Eerror,setEError] = useState('')
  let navigate =  useNavigate();
  const [credentials,setCredentials] = useState({email: '', password: ''})
  const handleLogin = async (e) => {
    e.preventDefault()
    // console.log(credentials);
   let result = await fetch(`${process.env.REACT_APP_HOST}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:credentials.email, password:credentials.password}),
    });

    result = await result.json();
    // console.log(result);
    if(result.success){
      localStorage.setItem('token',result.authToken);
      navigate('/');
    }
    if(result.errors){
      // console.log(result.errors[0].msg);
      setEError(result.errors[0].msg)
      setError('')
    }
    if(result.error){
      setError(result.error)
      setEError('')
    }
  }
  const handleChange = (e) => {
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <>
    {/* <div>Login

        <input className='border-2 border-red-600 mx-2' name='email' value={credentials.email} onChange={handleChange} type="email" placeholder='email' />
        <input className='border-2 border-red-600 mx-2' name='password' value={credentials.password} onChange={handleChange} type="password" placeholder='password' /> 

        <button onClick={handleLogin}>
          login
        </button>
    </div> */}
    <section className="bg-gray-50">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img className="w-8 h-8 mr-2" src="https://raw.githubusercontent.com/danklammer/bytesize-icons/210d2f81c340c838053eed4c5a0385fbf2a033e9/dist/icons/book.svg" alt="logo"/>
          DevNoteBook    
      </div>
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Login your account
              </h1>
              <form className="space-y-4 md:space-y-6" >
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                      <input  value={credentials.email} onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 outline-none focus:border-BoxFocus-50 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-BoxFocus-50 focus:bg-primary-600 block w-full p-2.5 " placeholder="" required={true} />
                      <div className='h-1 pt-1 px-2 text-red-700'>{Eerror}</div>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input  value={credentials.password} onChange={handleChange} type="password" name="password" id="password" placeholder="" className="bg-gray-50 border border-gray-300 outline-none focus:border-BoxFocus-50 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-BoxFocus-50 focus:bg-primary-600 block w-full p-2.5    " required={true} />
                  </div>
                  {/* <div>
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                  </div> */}
                  {/* <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 ">I accept the <a className="font-medium text-primary-600 hover:underline " href="#">Terms and Conditions</a></label>
                      </div>
                  </div> */}
                  <div className='mt-2 h-1 pb-3 px-4 text-red-700'>{error}</div>
                  <button type="submit" className="w-full hover:text-white hover:bg-BoxFocus-50 text-BoxFocus-50 border-2 border-BoxFocus-50  focus:outline-none  font-medium rounded-lg text-lg px-5 py-2.5 text-center "  onClick={handleLogin}>Login account</button>
                  <p className="text-sm font-light text-gray-500 ">
                      Don't have an account? <Link to="/signup" className="font-medium text-primary-600 hover:underline ">Register here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

    </>
  )
}

export default Login