import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layouts/Layout.jsx'
import ListGroup from './components/ListGroup.jsx'
import { Form } from './components/Form.jsx'
import UserContextProvider from './components/context/UserContextProvider.jsx'
import "./components/layouts/Layout.css"
import '@fontsource/roboto/400.css';
import { Store } from './components/redux/Store.js'
import { Provider } from 'react-redux'
import AddTodo from './components/AddTodo.jsx'
import Articles from './components/Articles.jsx'



const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [{
    path: "home",
    element: <ListGroup />
  }, {
    path: "root",
    element: <Form />
  },
  {
    path: "todo",
    element: <AddTodo />
  },]
}])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={Store}>

      <UserContextProvider>

        <RouterProvider router={router} />

      </UserContextProvider>
    </Provider>

  </React.StrictMode >,

)
