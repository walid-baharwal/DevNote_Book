import React,{useContext} from "react";
import { Link } from "react-router-dom";
import './style.css'
import { useNavigate } from 'react-router-dom' 
import noteContext from "../../context/Context";


const Navbar = (props) => {
    const context =  useContext(noteContext)
    const {user} = context

    const navigate = useNavigate();
    const Logout = ()=>{
        localStorage.clear();
         navigate('/login');
    }
  return (
    <>
    <nav className="nav-shadow navbar navbar-expand-lg navbar-light bg-warning marginb">
        <div className="container-fluid">
        <img className="d-block" src="https://raw.githubusercontent.com/danklammer/bytesize-icons/210d2f81c340c838053eed4c5a0385fbf2a033e9/dist/icons/book.svg" alt="" width="40" height="35"/>
            <Link className=" mt-1 navbar-brand ms-2 fw-bold text-dark " href="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto my-1 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active text-lg text-hover" aria-current="page" to="/">Home</Link>
                    </li>
                   
               

     </ul>
 <div className="dropdown" >

                <svg className="dr0pbtn" width='40px' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 64 64" viewBox="0 0 64 64" id="account"><path fill="#fff" d="M62.5,32c0,0.5-0.01,1-0.04,1.5c-0.78,16.14-14.12,29-30.46,29c-16.34,0-29.68-12.86-30.46-29
			C1.51,33,1.5,32.5,1.5,32s0.01-1,0.04-1.5C2.32,14.36,15.66,1.5,32,1.5c16.34,0,29.68,12.86,30.46,29C62.49,31,62.5,31.5,62.5,32z
			"></path><path fill="#ffb612" d="M62.5,32c0,16.34-12.85,29.68-29,30.45c-0.14,0.02-0.29,0.02-0.44,0.03h-0.05c-0.17,0-0.34-0.01-0.51-0.02
			c-0.17-0.01-0.34-0.02-0.5-0.03c-0.17-0.01-0.34-0.03-0.5-0.04c-0.34-0.03-0.67-0.06-1-0.1C15.31,60.56,3.5,47.66,3.5,32
			c0-15.66,11.81-28.56,27-30.29c0.33-0.04,0.66-0.07,1-0.1c0.16-0.01,0.33-0.03,0.5-0.03c0.16-0.02,0.33-0.03,0.5-0.04
			c0.17-0.01,0.34-0.02,0.51-0.02h0.05c0.15,0.01,0.3,0.01,0.44,0.03C49.65,2.32,62.5,15.66,62.5,32z"></path><ellipse cx="31.5" cy="32" fill="#fdcc32" rx="28" ry="30.39"></ellipse><path fill="#fa6e34" d="M56.5,32c0,8.96-4.81,16.8-12,21.07c-0.96,0.58-1.96,1.08-3,1.52c-2.92,1.23-6.13,1.91-9.5,1.91
			c-0.5,0-1.01-0.02-1.5-0.05c-4-0.24-7.74-1.44-11-3.38c-7.18-4.26-12-12.1-12-21.07c0-13.03,10.17-23.68,23-24.45
			c0.49-0.03,1-0.05,1.5-0.05C45.53,7.5,56.5,18.47,56.5,32z"></path><ellipse cx="30.5" cy="32" fill="#fa8840" rx="23" ry="24.45"></ellipse><path fill="#2baefe" d="M39.5 25c0 4.14-3.36 7.5-7.5 7.5-.51 0-1.01-.05-1.49-.15-.01 0-.01 0-.02 0-3.42-.7-5.99-3.73-5.99-7.35s2.57-6.65 5.99-7.35c.01 0 .01 0 .02 0 .48-.1.98-.15 1.49-.15C36.14 17.5 39.5 20.86 39.5 25zM44.5 36.5v16.57c-.96.58-1.96 1.08-3 1.52-2.92 1.23-6.13 1.91-9.5 1.91-.5 0-1.01-.02-1.5-.05-4-.24-7.74-1.44-11-3.38V36.5l5-2h15l2 .8L44.5 36.5z"></path><path fill="#3cf" d="M36.5 25c0 3.62-2.57 6.65-5.99 7.35-.01 0-.01 0-.02 0-3.42-.7-5.99-3.73-5.99-7.35s2.57-6.65 5.99-7.35c.01 0 .01 0 .02 0C33.93 18.35 36.5 21.38 36.5 25zM41.5 35.3v19.29c-2.92 1.23-6.13 1.91-9.5 1.91-.5 0-1.01-.02-1.5-.05-4-.24-7.74-1.44-11-3.38V36.5l5-2h15L41.5 35.3z"></path><path fill="#1c225c" d="M32,57C18.215,57,7,45.785,7,32S18.215,7,32,7s25,11.215,25,25S45.785,57,32,57z M32,8
				C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path><path fill="#1c225c" d="M32,33c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S36.411,33,32,33z M32,18c-3.86,0-7,3.14-7,7
				s3.14,7,7,7s7-3.14,7-7S35.86,18,32,18z"></path><path fill="#1c225c" d="M7.938 51.244c-.149 0-.296-.066-.395-.192C3.263 45.564 1 38.976 1 32 1 14.907 14.907 1 32 1c6.669 0 13.023 2.085 18.375 6.031.222.164.27.477.105.699-.164.222-.477.269-.699.105C44.603 4.018 38.455 2 32 2 15.458 2 2 15.458 2 32c0 6.751 2.189 13.126 6.332 18.436.17.218.131.532-.086.702C8.154 51.209 8.045 51.244 7.938 51.244zM11.16 54.77c-.123 0-.245-.044-.342-.135-.506-.474-1.002-.971-1.475-1.477-.188-.202-.178-.519.024-.707.202-.189.519-.178.707.024.458.49.938.971 1.428 1.429.202.189.212.505.023.707C11.426 54.716 11.293 54.77 11.16 54.77zM32 63c-6.706 0-13.088-2.106-18.457-6.091-.222-.165-.268-.478-.104-.699.165-.221.478-.268.699-.104C19.334 59.962 25.511 62 32 62c16.542 0 30-13.458 30-30 0-6.771-2.201-13.16-6.365-18.479-.17-.217-.132-.532.085-.702.217-.171.531-.132.702.085C60.726 18.401 63 25.004 63 32 63 49.093 49.093 63 32 63zM54.299 11.691c-.134 0-.267-.053-.366-.159-.468-.502-.962-.996-1.469-1.469-.202-.188-.212-.505-.024-.707.188-.202.505-.213.707-.024.523.488 1.034.999 1.518 1.517.188.202.177.519-.024.707C54.543 11.646 54.421 11.691 54.299 11.691z"></path><path fill="#1c225c" d="M44.5,53.576c-0.276,0-0.5-0.224-0.5-0.5V36.838L39.404,35H24.596L20,36.838v16.237
				c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5V36.5c0-0.205,0.125-0.388,0.314-0.464l5-2C24.374,34.012,24.437,34,24.5,34h15
				c0.063,0,0.126,0.012,0.186,0.036l5,2C44.875,36.112,45,36.295,45,36.5v16.576C45,53.352,44.776,53.576,44.5,53.576z"></path><path fill="#1c225c" d="M24.5 55.831c-.276 0-.5-.224-.5-.5V41.5c0-.276.224-.5.5-.5s.5.224.5.5v13.831C25 55.607 24.776 55.831 24.5 55.831zM39.5 55.831c-.276 0-.5-.224-.5-.5V41.5c0-.276.224-.5.5-.5s.5.224.5.5v13.831C40 55.607 39.776 55.831 39.5 55.831z"></path>
                </svg>             
  <div className="dropdown-content">
    <div className="name">{user.name}</div>
    <hr />
 <ul>

 <li className="nav-item">
 <Link className="nav-link text-hover2 t text-lg p-0 pt-2 fw-bold"  to='/login' onClick={Logout}>Logout</Link>

  {/* <Link className="nav-link logout p-0 text-danger text-hover"  onClick={Logout}>Logout</Link> */}
 </li>
 </ul>
    
  </div>
</div>
            </div>
        </div>
    </nav>
    








    </>
  );
};

export default Navbar;
