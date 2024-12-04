import './App.css'
import { Outlet } from "react-router-dom";

import Home from './components/Home';
function App() {
  return (
    <>
    
      <Outlet></Outlet>
      <Home></Home>
    </>
  )
}

export default App
