import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import InfluncerCards from './views/InfluncerCards/InfluncerCards';
import  MyDeals from './views/MyDeals/MyDeals';
import AddNote from './views/AddNote/AddNote';
import MyPackage from './views/MyPackage/MyPackage';
import ContactUs from './views/ContactUs/ContactUs';
import MyProfile from './views/MyProfile/MyProfile';
import AddPackageForm from './views/AddPackageForm/AddPackageForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />
  },

  {
    path: '/login',
    element: <Login />
  },
  
  {
    path: '/influncerCards',
    element: <InfluncerCards/>
  },

  {
    path: '/myDeals',
    element: <MyDeals/>
  },

  {
    path: '/addNote',
    element: <AddNote/>
  },

  {
    path: '/myPackage',
    element: <MyPackage/>
  },

  {
    path: '/contactUs',
    element: <ContactUs/>
  },

  {
    path: '/myProfile',
    element: <MyProfile/>
  },

  {
    path: '/contactUs',
    element: <ContactUs/>
  },

  {
    path: '/addPackageForm',
    element: <AddPackageForm/>
  }
 
])

root.render(<RouterProvider router={router} />);

