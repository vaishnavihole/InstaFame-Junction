import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './index.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import InfluncerCards from './views/InfluncerCards/InfluncerCards';
import  MyDeals from './views/MyDeals/MyDeals';
import AddNote from './views/AddNote/AddNote';
import MyPackages from './views/MyPackages/MyPackages';
import ContactUs from './views/ContactUs/ContactUs';
import MyProfile from './views/MyProfile/MyProfile';
import AddPackageForm from './views/AddPackageForm/AddPackageForm';
import MyAccounts from './views/MyAccounts/MyAccounts';
import AddAccountForm from './views/AddAccountForm/AddAccountForm';
import InfluncerDasboard from './views/InfluncerDasboard/InfluncerDasboard';
import InfluncerPackages from './views/InfluncerPackages/InfluncerPackages';
import UserDashboard from './views/UserDashboard/UserDashboard';
import ChatPage from './views/ChatPage/ChatPage';
import ViewAllChats from './views/ViewAllChats/ViewAllChats';


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
    path: '/addNote/:packageId',
    element: <AddNote/>
  },

  {
    path: '/myPackages',
    element: <MyPackages/>
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
  },
  {
    path: '/myAccounts',
    element: <MyAccounts/>
  },
  {
    path: '/addAccountForm',
    element: <AddAccountForm/>
  },
  {
    path:'/influncerDasboard',
    element:<InfluncerDasboard/>
  },
  {
    path: '/influncerPackages/:userId',
    element: <InfluncerPackages />
  },
  {
    path: '/userDashboard',
    element: <UserDashboard />
  },
  {
    path: '/chatPage/:id',
    element: <ChatPage />
  },
  {
    path: '/viewAllChats',
    element:<ViewAllChats />
  }
 
])

root.render(<RouterProvider router={router} />);

