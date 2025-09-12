import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from "./components/navbar"
import Signup from './pages/Signup';
import Chats from './pages/Chats';
const App = ()=> {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/register" element={<Signup />} />
         <Route path="/Chats" element={<Chats />} />
    </Routes>

</BrowserRouter>
  )

}
export default App