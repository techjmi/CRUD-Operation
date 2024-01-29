import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import Navbar from "./component/Navbar"
import Error from "./pages/Error"
import Logout from "./pages/Logout"
import AdminLayout from "./AdminPage/AdminLayout"
import Users from "./AdminPage/Users"
// import Contacts from "./AdminPage/Contacts"
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminUpdate from "./AdminPage/AdminUpdate"
import AdminContacts from "./AdminPage/AdminContacts"



function App() {
  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/service" element={<Service />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={< Registration/>}/>
      <Route path="/logout" element={< Logout/>}/>
      <Route path="/admin/users/:id" element={<AdminUpdate />}/>
      <Route path="/admin" element={< AdminLayout/>}>
        <Route path="users" element={< Users/>} />
        <Route path="contact" element={<AdminContacts/>} />
        {/* <Route path="users/id" element={<Contacts/>} /> */}
        {/* <Route path="users/:id" component={AdminUpdate} /> */}
      </Route>
     
      <Route path="*" element={<Error />} />
      
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
