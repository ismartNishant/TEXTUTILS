import './my.css';
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <h3 className="navbar-brand" >RENY-TextUtils</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><span>Home</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about"><span>About</span></Link>
                        </li>
                    </ul>
                    <div className="theme">
                        <i onClick={() => { props.toggleMode('secondary') }} className='bx bxs-circle text-secondary'></i>
                        <i onClick={() => { props.toggleMode('danger') }} className='bx bxs-circle text-danger'></i>
                        <i onClick={() => { props.toggleMode('warning') }} className='bx bxs-circle text-warning'></i>
                        <i onClick={() => { props.toggleMode('success') }} className='bx bxs-circle text-success'></i>
                        <i onClick={() => { props.toggleMode(null) }} className={`bx mode bxs-${props.mode === 'dark' ? 'sun' : 'moon'}`}></i>
                    </div>

                </div>
            </div>
        </nav>
    );
}
export default Navbar;