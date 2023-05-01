import { ThemeContext } from './pages/context/ChangeThemeContext';
import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import NightMode from './components/NightMode'

import Create from './pages/Create'
import Home from './pages/Home'
import Recipe from './pages/Recipe'

function App() {

  const { mode, changeMode } = useContext(ThemeContext);

  return (
    <div className={`${mode ? 'App' : 'App-dark'}`} >
      <BrowserRouter>
      <Navbar/>
      <NightMode />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/recipe/:id' element={<Recipe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
