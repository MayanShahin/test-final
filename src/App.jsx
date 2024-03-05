import logo from './logo.svg';
import './App.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import Cart from './Components/Cart/Cart';
import Details from './Components/Details/Details';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import TokenContextProvider, {TokenContext} from './Context/Token';
import { useContext, useEffect } from 'react';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import WishList from './Components/WishList/WishList';
import Checkout from './Components/Checkout/Checkout';
import Allorders from './Components/AllOrders/AllOrders';

// import TokenContext from './Context/Token';
// import TokenContextProvider from './TokenContext'
// import TokenContextProvider, { TokenContext } from './TokenContext'

function App() {

  let { setToken } = useContext(TokenContext)

  const routes = createHashRouter([
    {
      path: "", element: <Layout />, children: [
        { path: "Home", element: <ProtectedRoutes><Home /></ProtectedRoutes> },
        { path: "Products", element: <ProtectedRoutes><Products /></ProtectedRoutes> },
        { path: "WishList", element: <ProtectedRoutes><WishList /></ProtectedRoutes> },
        { path: "Categories", element: <ProtectedRoutes><Categories /></ProtectedRoutes> },
        { path: "Brands", element: <ProtectedRoutes><Brands /></ProtectedRoutes> },
        { path: "Cart", element: <ProtectedRoutes><Cart /> </ProtectedRoutes>},
        { path: "details/:id", element: <ProtectedRoutes><Details/> </ProtectedRoutes>},
        { path: "Login", element: <Login /> },
        { path: "Register", element: <Register /> },
        { path: "*", element: <NotFound /> },
        { path: "Checkout", element: <ProtectedRoutes> <Checkout /></ProtectedRoutes> },
        { path: "AllOrders", element: <ProtectedRoutes> <Allorders /></ProtectedRoutes> }

      ]
    }
  ])

  useEffect(() => {
    if (localStorage.getItem("userToken") != null) {
      setToken(localStorage.getItem("userToken"))
    }
  },[])

  return <RouterProvider router={routes}></RouterProvider>
}
export default App;
