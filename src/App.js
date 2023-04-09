import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './view/home'
import Menu from './view/menu'
import Contact from './view/contact'
import Login from './view/admin/Login'
import MenuItem from './view/admin/MenuItem'
import MenuItemAdd from './view/admin/MenuItemAdd'
import MenuItemEdit from './view/admin/MenuItemEdit'
import Ingredient from './view/admin/Ingredient'
import {isAdmin} from './utility/utility'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Toast from './components/Toast'
import { useSelector } from 'react-redux'

function App() {
  const [toastMes, toastShow] = useSelector((state) => [state.Home.toastMes, state.Home.toastShow])
  return (
    <div className="App">
      <div className="appContianer">
        <Nav/>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={ !isAdmin() ? <Login /> : <Navigate replace to={"/admin/menuitem"} /> } />
            <Route path="/admin/menuitem" element={ isAdmin() ? <MenuItem /> : <Navigate replace to={"/login"} /> } />
            <Route path="/admin/menuitem/add" element={ isAdmin() ? <MenuItemAdd /> : <Navigate replace to={"/login"} /> } />
            <Route path="/admin/menuitem/edit/:id" element={ isAdmin() ? <MenuItemEdit /> : <Navigate replace to={"/login"} /> } />
            <Route path="/admin/ingredient" element={ isAdmin() ? <Ingredient /> : <Navigate replace to={"/login"} /> } />
          </Routes>
        </Router>
        
      </div>
      { window.location.pathname.includes('/admin') ?  '' : <Footer/>}
      <Toast mes={toastMes} show={toastShow} />
    </div>
  );
}

export default App;
