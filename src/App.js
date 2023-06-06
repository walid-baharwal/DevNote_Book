import './App.css';
import Home from './components/Body/Home';
import Login from './components/Body/Login';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Body/Signup';
import NoteState from './context/NoteState';
import PrivateComponent from './components/PrivateComponent';
import {
   Route,Routes,useLocation
} from "react-router-dom";


function App() {
  const location = useLocation();
  return (
    <div>
    <NoteState>

     
      
      {(location.pathname !== '/signup' && location.pathname !== '/login') &&  <Navbar title={'DevNoteBook'}  />}
  
        <Routes>
          <Route  element={<PrivateComponent/>}>
          <Route exact path='/' element={<Home/>}/>
          </Route>
          <Route  exact path='/login' element={<Login/>}/>
          <Route  exact path='/signup' element={<Signup/>}/>
        </Routes>

     
    </NoteState>
    </div>
  );
}

export default App;
