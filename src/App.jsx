import './App.css'
import { Outlet } from "react-router-dom";
import Footer from './components/Footer';
import Home from './components/Home';
function App() {
  return (
    <>
      <Outlet></Outlet>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App
