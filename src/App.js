
import './App.css';
import Create from './Create';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Read from './Read';
import Update from './Update';



function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Routes>
        <Route path='/create' element={<Create/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/update' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
