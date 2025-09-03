import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCoffee from './Components/AddCoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import Signin from './Components/Signin.jsx'
import SignUp from './Components/SignUp.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import Users from './Components/Users.jsx'

const router = createBrowserRouter([
 {
  path:"/",
  element:<MainLayout/>,
  children:[
    {
      path:"/",
      element:<App/>,
      loader: ()=> fetch("https://coffee-stores-server.onrender.com/coffee")
    },
    {
      path:"addCoffee",
      element:<AddCoffee/>
    },
    {
      path:"updateCoffee/:id",
      element:<UpdateCoffee/>,
      loader: ({params})=> fetch(`https://coffee-stores-server.onrender.com/coffee/${params.id}`)
    },
    {
      path:"signin",
      element:<Signin/>
    },
    {
      path:"signup",
      element:<SignUp/>
    },
    {
      path:"users",
      element:<Users/>,
      loader: ()=> fetch("https://coffee-stores-server.onrender.com/users")
    }
  ]
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/> 
    </AuthProvider>
  </StrictMode>,
)
