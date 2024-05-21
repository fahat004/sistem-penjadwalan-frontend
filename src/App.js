import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import Jadwal from './pages/Jadwal';
import Matakuliah from './pages/Matakuliah';
import Layout from './components/Layout';
import Profile from './pages/profile';
import DosenPage from './pages/Dosen';
import AddDataDosen from './components/AddDataDosen';
import EditDataDosen from './components/EditDataDosen';
import AddDataMatakuliah from './components/AddDataMatakuliah';
import EditDataMatakuliah from './components/EditDataMatakuliah';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dosen" element={<DosenPage />} />
        <Route path="/matakuliah" element={<Matakuliah />} />
        <Route path="/jadwal" element={<Jadwal />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add" element={<AddDataDosen />} />
        <Route path="/edit/:id" element={<EditDataDosen />} />
        <Route path="/addmk" element={<AddDataMatakuliah />} />
        <Route path="/editmk/:id" element={<EditDataMatakuliah />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
