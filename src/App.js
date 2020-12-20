import React from "react"
import './App.css';
import Navbar from './components/Layouts/Navbar'
import Home from './components/Pages/Home'
import GuestState from './context/guestContext/GuestState'

function App() {
  return (
    <GuestState>
      <div>
        <Navbar />
        <Home />
      </div>
    </GuestState>
  );
}

export default App;
