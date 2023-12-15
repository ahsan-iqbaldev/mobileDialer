import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Call from './components/call/Call';
import Dialer from './components/dialer/Dialer';
import Recent from './components/recent/Recent';

function App() {
  return (
    <> 

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Dialer/>}/>
    <Route path='/call' element={<Call/>}/>
    <Route path='/recent' element={<Recent/>}/>
    </Routes>
    </BrowserRouter>
 

    </>
  );
}

export default App;
