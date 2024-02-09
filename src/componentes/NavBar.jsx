import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import './NavBar.css'

export const NavBar = () => {

    const [Mobile, setMobile] = useState(false)


    return (
        <div>
            <div className="navegacion">
                <header>
                    <h1 className="logo"><a href="/Inicio">Infotrading</a></h1>
                    <nav className={ Mobile?  "nav-mobile" : "nav"} onClick={()=> setMobile(true)}>
                        <NavLink exact to="/Inicio" activeClassName="active"> Inicio</NavLink>
                        <NavLink exact to="/Productos" activeClassName="active">Productos</NavLink>
                        <NavLink exact to="/Servicios" activeClassName="active">Servicios</NavLink>
                        <NavLink exact to="/SobreNosotros" activeClassName="active">Sobre Nosotros</NavLink>
                        <NavLink exact to="/Contacto" activeClassName="active">Contacto</NavLink>
                    </nav>
                    <button className="menu-mobile" onClick={()=> setMobile(!Mobile)}>
                        { Mobile? <AiOutlineMenuUnfold/> : <RiCloseFill/> }
                    </button>
                </header>

            </div>

        </div>
    )
}
