import React from 'react'
import Navbar from './Navbar/Navbar'
import { createBrowserRouter,RouterProvider, Outlet } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import AboutUs from './Pages/About/AboutUs';
import Footer from './Navbar/Footer/Footer';

const Layout = ( )  => {
    return (
        <div>
        <Navbar />
      <Outlet />
      <Footer />
      </div>
    )
}

const App = () => {
const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children:[{

        path: '/',
        element: <Home />,
    },
    {path: '/services',
    element: <Services />},

    {path: '/about',
    element: <AboutUs />,}]
}]);

  return (
    <div>
      <RouterProvider router ={ router } />
    </div>
  )
}

export default App;
