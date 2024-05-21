import React from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Logo from "../../assets/img/logo.png";
import "./styles.css";

const LoginPage = () => {
  let navigate = useNavigate();
  const handleLogin = () => {
     navigate("/");
  }
 
  return (
    <form>
      <header className='d-flex gap-3 align-items-center header'>
        <img src={Logo} alt="logountad" width={60}/>
        <div>
          <h5>Sistem Penjadwalan Mata Kuliah</h5>
          <h6>Prodi Teknik Informatika</h6>
        </div>
      </header>
      <div className='logo-login'>
        <img src={Logo} width={70} />
      </div>
      <div className='title-login'>
        <h3>Sistem Penjadwalan Mata Kuliah</h3>
        <h4>Prodi Teknik Informatika</h4>

      </div>  
        <div class="mx-auto w-25 mt-3">
          <div class='mb-5'>
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" input/>
          </div>
          <div>
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" input/>
          </div>
            <button class="btn btn-primary mt-5 mx-1 my-1  w-0" onClick={handleLogin}>Login</button>
        </div>
        
      </form>
  )  
}
export default LoginPage