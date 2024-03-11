import './App.css'
import Topbar from './layout/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Router';
import Footer from './layout/Footer';


function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
