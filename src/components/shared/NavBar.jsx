import React from 'react';
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link';
import '../static/Navbar.css'
const Logo = require('../images/BCCC_logo.png');

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg fixed-top navbar-scroll" data-mdb-navbar-init>
            <div class="container-fluid">
                <img src={Logo}/>
                <button class="navbar-toggler ps-0" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01"  aria-expanded="false" aria-label="Toggle navigation">
                    <span class="d-flex justify-content-start align-items-center">
                        <i class="fas fa-bars"></i>
                    </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarExample01">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li class="nav-item active">
                            <a class="nav-link" aria-current="page" href="#hero">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#verse">Verse</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#hero">Statement Of Faith</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#contact">Photos</a >
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" aria-current="page" href="#time">Times Of Service</a>
                        </li> */}
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#about" >About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#Anthology" >Anthology</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#footer">Contacts</a >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        
    );
}


export default NavBar;
{/*         // <header className='navbar navbar-expand-md bg-white navbar-white'>
        //     <div className='navBar container-fluid px-5'>
        //         <img src={Logo} className='logo'/>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className='collapse navbar-collapse justify-content-end align-center' id='main-nav'>
        //             <ul className='navbar-nav'>
        //                 <li className='nav-item'><HashLink smooth to='/#about' className='nav-link' href="#">About</HashLink></li>
        //                 <li className='nav-item'><HashLink smooth to='/#anthology' className='nav-link' href="#">Anthology</HashLink></li>
        //                 <li className='nav-item'><Link to='/contact' className='nav-link'>Contact</Link></li>
        //                 <li className='nav-item'><HashLink smooth to='/#anthology' className='nav-link' href="#">Anthology</HashLink></li>
        //             </ul>
        //         </div>
        //     </div>
        // </header> */}
