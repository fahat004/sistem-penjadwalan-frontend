import React from 'react'
import "./styles.css";
import Layout from '../../components/Layout';
import { useNavigate } from 'react-router-dom';


const ProfilePage = () => {
    let navigate = useNavigate();
    const handleProfile = () => {
      navigate("/profile");
    }

  return (
    <Layout>
      <form className='profile'>
        <p className='title'>Ganti Password</p>
        <hr></hr>
        <label className='password'> Password Lama :
        <input type="text"  name="pass-lama" className='pass-lama'/>
        </label>
        <label className='password'>Password Baru :
            <input type="text" name="pass-baru" className="pass-baru" />
        </label>
        <button className="btn" class="btn btn-info" onClick={handleProfile}>Perbarui</button>
      </form>
    </Layout>

  )
}

export default ProfilePage 
