import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand mb-0 h1" to="/dashboard/games">Game Libraries</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/games">Games</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/genres">Genres</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/platforms">Platforms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/publishers">Publishers</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar