import './App.css';

//Router
import {BrowserRouter, Routes, Route, navigate, Navigate} from "react-router-dom"

//Hooks
import { useAuth } from './hooks/useAuth';

//Pages
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import EditProfile from './pages/EditProfile/EditProfile';
import Profile from './pages/profile/Profile';

function App() {

  const {auth, loading} = useAuth()

  if (loading) {
    return <p>Carregando...</p>
  }
  return (
    <div className="App">
		  <BrowserRouter>
          <Navbar/>
          <div className="container">
            <Routes>
              <Route path='/' element={auth? <Home/>:<Navigate to="/login"/>}/>
              <Route path='/profile' element={auth? <EditProfile/>:<Navigate to="/login"/>}/>
              <Route path='/users/:id' element={auth? <Profile/>:<Navigate to="/login"/>}/>
              <Route path='/login' element={!auth? <Login/>: <Navigate to="/"/>}/>
              <Route path='/register' element={!auth? <Register/>: <Navigate to="/"/>}/>
            </Routes>
          </div>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
