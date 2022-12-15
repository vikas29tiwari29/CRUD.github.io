import './App.css';
import Create from './Component/Create';
import Read from './Component/Read';
import Update from './Component/Update';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Create />}></Route>
          <Route exact path='/Read' element={<Read/>}></Route>
          <Route exact path='/Update' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
