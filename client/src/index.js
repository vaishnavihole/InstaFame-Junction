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
  }
 
])

root.render(<RouterProvider router={router} />);

