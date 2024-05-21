import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

const EditDataMatakuliah = () => {
    const [kode, setKode] = useState("");
    const [name, setName] = useState("");
    const [dosenpjId, setDosenpjId] = useState("");
    const [sks, setSks] = useState("");
    const [semester, setSemester] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getMatakuliahById = async () => {
            const response = await axios.get(`http://localhost:5001/matakuliahs/${id}`);
            setKode(response.data.kode);
            setName(response.data.name);
            setDosenpjId(response.data.dosenpjId);
            setSks(response.data.sks);
            setSemester(response.data.semester);
        };
        getMatakuliahById();
    }, [id]);

    const UpdateMatakuliah = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5001/matakuliahs/${id}`, {
            kode: kode,
            name: name,
            dosenpjId: parseInt(dosenpjId),
            sks: parseFloat(sks),
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

    const filterDosen = (id) => {
        const filteredDosen = data.filter((item) => item.id == id)
        console.log(filteredDosen)
    }
    return (
        <Layout>
            <div>
                <form onSubmit={UpdateMatakuliah}>
                    <h4 className="text-center mx-auto w-50 mb-3-4">Edit Data Matakuliah</h4>
                    <div className="mx-auto w-50 mb-3">
                        <label className="form-label">Kode Matakuliah</label>
                        <input value={kode} onChange={(e) => setKode(e.target.value)} type="text" className="form-control" input />
                    </div>
                    <div className="mx-auto w-50 mb-3">
                        <label className="form-label" >Nama Matakuliah</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" input />
                    </div>
                    <div className="mx-auto w-50 mb-3">
                        <label className="form-label" >Nama Dosen PJ</label>
                        <select id="namaDosen" className="form-select" aria-label="Default select example" onChange={(e) => setDosenpjId(e.target.value)}>
                            <option selected disabled>--Pilih Dosen PJ--</option>
                            {/* <option selected value={dosenpjId}>{data ? data.filter(item => item.id == dosenpjId)[0]?.name : "-- Pilih Dosen PJ"}</option> */}
                            {
                                data?.map((item, index) => (
                                    <option value={item.id} key={item.id} selected={item.id == dosenpjId ? true : false}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mx-auto w-50 mb-3">
                        <label className="form-label" >SKS</label>
                        <input value={sks} onChange={(e) => setSks(e.target.value)} type="text" className="form-control" input />
                    </div>
                    <div className="mx-auto w-50 mb-3">
                        <label className="form-label" >Semester</label>
                        <input value={semester} onChange={(e) => setSemester(e.target.value)} type="text" className="form-control" input />
                        <button type="submit" className="btn btn-primary mx-auto mt-3">Update</button>
                    </div>

                </form>
            </div>
        </Layout>
    )
}

export default EditDataMatakuliah