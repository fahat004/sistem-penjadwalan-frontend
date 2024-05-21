import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

const AddDataMatakuliah = () => {
    const [kode, setKode] = useState("");
    const [name, setName] = useState("");
    const [dosenpjId, setDosenpjId] = useState("");
    const [sks, setSks] = useState("");
    const [semester, setSemester] = useState("");
    const navigate = useNavigate();

    const saveMatakuliah = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5001/matakuliahs", {
            kode,
            name,
            dosenpjId: parseInt(dosenpjId),
            sks: parseInt(sks),
            semester: parseInt(semester)
        });
        navigate("/matakuliah")
    }

    const fetcher = async () => {
        const response = await axios.get('http://localhost:5001/dosens');
        console.log(response)
        return response.data;
    };
    const { data } = useSWR('dosens', fetcher);

    return (
        <Layout>
            <div>
                <form onSubmit={saveMatakuliah}>
                    <h4 className="text-center mb-4">Tambah Data Matakuliah</h4>
                    <div className="mx-auto w-50 mb-3">
                        <label htmlFor="kodeMatakuliah" className="form-label">Kode Matakuliah</label>
                        <input value={kode} onChange={(e) => setKode(e.target.value)} type="text" className="form-control" id="kodeMatakuliah" input />
                    </div>
                    <div className="mx-auto w-50 mb-3">
                        <label htmlFor="namaMatakuliah" className="form-label" >Nama Matakuliah</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="namaMatakuliah" input />
                    </div>
                    <div className="mx-auto w-50 mb-3">
                        <label htmlFor="namaDosen" className="form-label" >Nama Dosen PJ</label>
                        <select id="namaDosen" className="form-select" aria-label="Default select example" onChange={(e) => setDosenpjId(e.target.value)}>
                            <option selected disabled>--Pilih Dosen PJ--</option>
                            {
                                data?.map((item, index) => (
                                    <option value={item.id} key={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mx-auto w-50 mb-3">
                        <label htmlFor="sks" className="form-label" >SKS</label>
                        <input value={sks} onChange={(e) => setSks(e.target.value)} type="text" className="form-control" id="sks" input />
                    </div>
                    <div className="mx-auto w-50 mb-3">
                        <label htmlFor="semester" className="form-label" >Semester</label>
                        <input value={semester} onChange={(e) => setSemester(e.target.value)} type="text" className="form-control" id="semester" input />
                        <button type="submit" className="btn btn-primary mx-auto mt-3">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default AddDataMatakuliah