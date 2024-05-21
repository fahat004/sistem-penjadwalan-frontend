import React from 'react'
import Logo from "../../assets/img/logo.png";
import "./styles.css";

const Header = () => {
  return (
    <header className='d-flex gap-3 align-items-center header'>
        <img src={Logo} alt="logountad" width={60}/>
        <div>
          <h5>Sistem Penjadwalan Mata Kuliah</h5>
          <h6>Prodi Teknik Informatika</h6>
        </div>
    </header>
  )
}

export default Header