import React, {useState} from 'react'
import Layout from './Layout'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddDataDosen = () => {
    const [name, setName] = useState("");
    const [nip, setNip] = useState("");
    const navigate = useNavigate();

    const saveDosen = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:5001/dosens",{
            name,
            nip
        });
        navigate("/dosen")
    }
  return (
    <Layout>
    <div>
        <form onSubmit={saveDosen}>
            <h4 className="text-center mb-3">Tambah Data Dosen</h4>
            <div className="mx-auto w-50 mb-3">
                <label htmlFor="namaDosen" className="form-label">Nama Dosen</label>
                <input  value={name} onChange={(e)=> setName(e.target.value)} type="text" className="form-control" id="namaDosen"/>
            </div>
            <div className="mx-auto w-50">
              <label htmlFor="nip" className="form-label" >NIP</label>
              <input value={nip} onChange={(e)=> setNip(e.target.value)} type="text" className="form-control" id="nip"/>
              <button type="submit" className="btn btn-primary mx-auto mt-3">Submit</button>
            </div>
          </form>
      </div>
    </Layout>
  )
}

export default AddDataDosen