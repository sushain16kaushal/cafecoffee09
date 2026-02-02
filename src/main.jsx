import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/home'
import About from './components/About'
import Menu from './components/Menu/Menu'
import Contact from './components/contact'
import Hotcoffee from './components/Menu/Hotcoffee'
import Coldcoffee from './components/Menu/Coldcoffee'
import Others from './components/Menu/Others'
import Menulayout from './components/Menu/Menulayout'
import Errorpage from './components/Errorpage'
const router=createBrowserRouter(
      createRoutesFromElements(
        <Route path='' element={<Layout />} errorElement={<Errorpage />}>
         <Route path='/' element={<Home />} />
        <Route path='menu' element={<Menulayout />}>
        <Route index element={<Hotcoffee />} />
        <Route path='hotcoffee' element={<Hotcoffee />} />
        <Route path='coldcoffee' element={<Coldcoffee />} />
        <Route path='others' element={<Others />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />}/>
         </Route>
      
      )
    )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
