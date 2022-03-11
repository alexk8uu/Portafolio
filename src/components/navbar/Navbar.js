import React from 'react'
import "./Navbar.css"



const Navbar = ({ isScrolling }) => {

    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    const toQuienSoy= () => {
        window.scrollTo({ top: 580, left: 0, behavior: "smooth" })
    }
    const toProyects= () => {
        window.scrollTo({ top: 1040, left: 0, behavior: "smooth" })
    }
    const toSkills= () => {
        window.scrollTo({ top: 1750, left: 0, behavior: "smooth" })
    }
    const toContact= () => {
        window.scrollTo({ top: 2250, left: 0, behavior: "smooth" })
    }

    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className='navbar-logo'>
                <div onClick={toTheTop} >Home</div>
                <div onClick={toQuienSoy}>Quien Soy</div>
                <div onClick={toProyects}>Mis Proyectos</div>
                <div onClick={toSkills}>Habilidades</div>
                <div onClick={toContact}>Contactame</div>
            </div>
        </nav>
    )
}

export default Navbar