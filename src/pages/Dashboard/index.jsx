import React from 'react'
import "./styles.css";
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import Book from "../../assets/img/book.png";
import Teacher from "../../assets/img/teacher.png";
import Class from "../../assets/img/class.png";

const Dashboard = () => {
  let navigate = useNavigate();
  const handleDashboard = () => {
     navigate("/");
  }
  return (
    <Layout>
        <p className='title'>Dashboard</p>
        <form className='dashboard'>

          <div className="jumlah-mk">
          <img src={Book} alt="book" width={70}/>
            <hr></hr>
            <p>Jumlah Matakuliah</p>
          </div>
          <div className="jumlah-dosen">
          <img src={Teacher} alt="teacher" width={65}/>
            <hr></hr>
            <p>Jumlah Dosen</p>
          </div>
          <div className="jumlah-kelas">
          <img src={Class} alt="class" width={65}/>
            <hr></hr>
            <p>Jumlah Kelas</p>
          </div>
       
        </form>
    </Layout>

  )
}

export default Dashboard