import React from 'react'
import logo from '../res/honey.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <head>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
            </head>
            <div className="container-fluid my-1 py-2 rounded sticky-top z-1 bg-white">
                <div className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">                        
                            <img src={logo} alt="logo" height={40} width={40} />
                        <NavLink to='/'
                            className="navbar-brand"
                        >
                            Nectar Foods
                        </NavLink>
                        <button className="navbar-toggler" type="button" >
                            <NavLink className="navbar-toggler-icon"></NavLink>
                        </button>
                        <div className={"collapse navbar-collapse"}>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to={'/products'}
                                    >
                                        Products
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to={'/about'}
                                        
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to={'/community'}
                                    >
                                        Community
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to='/contact'
                                    >
                                        Find Us
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/faq"
                                        
                                    >
                                        FAQ
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link bg-danger rounded-4 text-white' to='/buy'>
                                        Buy Now
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header