import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SignIn from './pages/signIn/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage';
import RoleGuard from './routes/RoleGuard';
import AdminDashboard from './pages/adminDashboard/AdminDashboard'
import MainDashboard from './pages/mainDashboard/MainDashboard'
import Unauthorized from './pages/unauthorized/Unauthorized'
import AdminProfile from './pages/adminDashboard/AdminProfile';
import SignUp from './pages/signUp/SignUp';
import AdminData from './pages/adminDashboard/AdminData';
import Navbar from './components/navbar/Navbar';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={Store}>
      <Toaster />

      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />

          <Route path='/admin-dashboard/' element={<AdminDashboard userRole={'admin'} allowedRoles={['admin', 'visitor']} />}>

            <Route path='' element={<AdminProfile />} />
            <Route path='admin-data' element={<AdminData />} />
            <Route path='*' element={<h4>NOTHING IN admin-dashboard</h4>} />



          </Route>





          {/* <RoleGuard
          path="/admin-dashboard"
          component={AdminDashboard}
          allowedRoles={['admin']}
          userRole={'creator'}
        />
        <RoleGuard
          path="/main-dashboard"
          component={MainDashboard}
          allowedRoles={['creator', 'visitor']}
          userRole={'creator'}
        /> */}
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path='/*' element={<h4>NOTHING</h4>} />

        </Routes>


      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
