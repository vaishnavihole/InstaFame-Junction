import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import InfluncerCards from './views/InfluncerCards/InfluncerCards';
import PackageCard from './views/PackageCard/PackageCard';
import  DealCard from './views/DealCard/DealCard';
import AddNote from './views/AddNote/AddNote';
import InfluncerDashboard from './views/InfluncerDashboard/InfluncerDashboard';
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
    path: '/packageCard',
    element: <PackageCard/>
  },

  {
    path: '/DealCard',
    element: <DealCard/>
  },

  {
    path: '/addNote',
    element: <AddNote/>
  },

  {
    path: '/influncerDashboard',
    element: <InfluncerDashboard/>
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

