import React from 'react'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Home from './Home.jsx'
import './style.css'

const App = () => {
    return (
        <div className="container">
            <Home/>
            <About />
            <Contact />
        </div>
    )
}

export default App
