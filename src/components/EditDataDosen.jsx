import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const EditDataDosen = () => {
  const [name, setName] = useState("");
  const [nip, setNip] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getDosenById = async () => {
      const response = await axios.get(`http://localhost:5001/dosens/${id}`);
      setName(response.data.name);
      setNip(response.data.nip);
    };
    getDosenById();
  }, [id]);

  const UpdateDosen = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5001/dosens/${id}`, {
      name,
      nip
    });
    navigate("/dosen")
  }
  return (
    <Layout>
      <div>
        <form onSubmit={UpdateDosen}>
          <div className="mx-auto w-50 mb-3">
          <h4 className="text-center mb-3">Edit Data Dosen</h4>
            <label className="form-label" htmlFor='namaDosen'>Nama Dosen</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="namaDosen" />
          </div>
          <div className="mx-auto w-50 mb-3">
            <label htmlFor="nip" className="form-label" >NIP</label>
            <input value={nip} onChange={(e) => setNip(e.target.value)} type="text" className="form-control" id="nip" />
            <button type="submit" className="btn btn-primary mx-auto mt-3">Update</button>
          </div>
          
        </form>
      </div>
    </Layout>
  )
}

export default EditDataDosen