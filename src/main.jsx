import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layouts/Layout.jsx'
import ListGroup from './components/ListGroup.jsx'
import { Login } from './components/Login.jsx'
import UserContextProvider from './components/context/UserContextProvider.jsx'
import "./components/layouts/Layout.css"
import '@fontsource/roboto/400.css';
import { Store } from './components/redux/Store.js'
import { Provider } from 'react-redux'
import AddTodo from './components/AddTodo.jsx'



const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [{
    path: "home",
    element: <ListGroup />
  }, {
    path: "root",
    element: <Login />
  },
  {
    path: "todo",
    element: <AddTodo />
  }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <UserContextProvider>
      <Provider store={Store}>

        <RouterProvider router={router} />
      </Provider>

    </UserContextProvider>
  </React.StrictMode >,

)
