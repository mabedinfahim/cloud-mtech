import './App.css';
import Header from './Components/Header/Header';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Support from './Components/Support/Support';
import Platforms from './Components/Platforms/Platforms';
import Pricing from './Components/Pricing/Pricing';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import SingIn from './Components/SingIn/SingIn';
import SingUp from './Components/SingUp/SingUp'
import ForgottenPassword from './Components/ForgottenPassword/ForgottenPassword';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/support' element={<Support/>}></Route>
          <Route path='/platforms' element={<Platforms/>}></Route>
          <Route path='/pricing' element={<Pricing/>}></Route>
          <Route path='/sing-in' element={<SingIn/>}/>
          <Route path="/sing-up" element={<SingUp/>}></Route>
          <Route path='/forgotten-password' element={<ForgottenPassword/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
