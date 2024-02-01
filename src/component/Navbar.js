import {NavLink} from "react-router-dom"

function Navbar () {
    return(
        <div >
            <nav className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

        </div>
    )
}

export default Navbar;