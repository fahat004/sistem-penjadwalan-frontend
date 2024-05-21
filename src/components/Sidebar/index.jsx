import React from 'react'
import { Link } from 'react-router-dom';
import "./styles.css"
import Logo from "../../assets/img/logo.png";

const SidebarComponent = () => {
  return (
    <div className="">
        <div className="">
            <div className="px-sm-2 px-0 bg-utama border-end">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white" style={{height: '89vh'}}>
                <div className="admin">
                 <img src={Logo}alt="logountad" width={45}/>
                <p>ADMIN PROGRAM STUDI TEKNIK INFORMATIKA</p>
                <hr></hr>
                </div>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li>
                            <Link to="/" className="nav-link px-0">
                                <i className="fs-4 bi bi-house"></i> <span className="d-none d-sm-inline">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dosen' className="nav-link px-0"> 
                                <i className="fs-4 bi bi-person-circle"></i> <span className="d-none d-sm-inline">Dosen</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/matakuliah" className="nav-link px-0"> 
                                <i className="fs-4 bi bi-book"></i> <span className="d-none d-sm-inline">Matakuliah</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/jadwal" className="nav-link px-0">
                                <i className="fs-4 bi bi-table"></i> <span className="d-none d-sm-inline">Penjadwalan</span>
                            </Link>
                        </li>
                        
                    </ul>
                    <hr />
                    <div className="dropdown pb-4">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={Logo} alt="logountad" width="30" height="30" className="rounded-circle" />
                            <span className="d-none d-sm-inline mx-3 text-secondary">Profile</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu text-small shadow">
                            <li><Link to="/profile" className="dropdown-item" >Profile</Link></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><Link  to="/login" className="dropdown-item col-auto">Sign out</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        
    </div>
</div>
  )
}

export default SidebarComponent