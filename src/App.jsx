import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HeaderComponent from "./components/HeaderComponent.jsx";
import FilterListCoursesComponent from "./components/FilterListCoursesComponent.jsx";
import ListCoursesComponent from "./components/ListCoursesComponent.jsx";
import TestComponent from "./components/TestComponent.jsx";

function App() {

  return (
    <div className="App">
        <HeaderComponent />
        <FilterListCoursesComponent />
        <ListCoursesComponent />
        <TestComponent />
    </div>
  )
}

export default App
