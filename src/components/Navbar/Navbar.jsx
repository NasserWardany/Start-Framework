import { NavLink } from "react-router-dom";


export default function Navbar() {

    return (<>
        <nav className="navbar navbar-expand-lg bg-dark p-3  ">
            <NavLink to={''} className="navbar-brand nav-link text-white mx-5 w-75 fw-bold fs-3">START FRAMEWORK</NavLink>
            <a href="#x" data-toogle="collapse" className="navbar-toggler">
                <span className="navbar-toggler-icon text-white"></span>
            </a>
            <div id="x" className="collapse navbar-collapse">
                <ul className="navbar-nav me-5 pe-5">
                    <li className="nav-item">
                        <NavLink className="nav-link text-white fw-bold fs-4" to={'About'}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white fw-bold fs-4" to={'portfolio'}>
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white fw-bold fs-4" to={'contact'}>
                            Contact
                        </NavLink>
                    </li>

                </ul>
            </div>
        </nav >
    </>);
}