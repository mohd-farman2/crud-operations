import React from 'react';
//import Context from './Context';
import Home from './components/Home';
import Employees from './components/Employees';
import Add from './components/Add';
import Edit from './components/Edit';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/employees' element={<Employees />}/>
        <Route path='/create' element={<Add />}/>
        <Route path='/edit' element={<Edit />}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App