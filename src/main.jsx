import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layouts/Layout.jsx'
import ListGroup from './components/ListGroup.jsx'
import { Login } from './components/Login.jsx'
import UserContextProvider from './components/context/UserContextProvider.jsx'
import "./components/layouts/Layout.css"
import '@fontsource/roboto/400.css';



const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [{
    path: "home",
    element: <ListGroup />
  }, {
    path: "root",
    element: <Login />
  }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>




  </React.StrictMode >,

)
