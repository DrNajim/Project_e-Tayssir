import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbare from './Components/Navbare';
import Search from './Components/Search';
import Contact from './Components/Contact';
import Universites from './Components/Universites';
import UniversiteDetail from './Components/UniversiteDetail';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbare/>
      <Routes>
      <Route path='/' element={<Search/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Universites' element={<Universites/>}/>
      <Route path='/UniversiteDetail' element={<UniversiteDetail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
