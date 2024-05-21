import React from 'react'
import Layout from './Layout'
import axios from "axios";
import useSWR, {useSWRConfig} from "swr";
import { Link } from 'react-router-dom';

const Dosenlist = () => {
  const {mutate} = useSWRConfig();
  const fetcher = async () =>{
    const response = await axios.get ('http://localhost:5001/dosens');
    console.log(response)
    return response.data;
  };

  const {data} = useSWR('dosens', fetcher);

  if(!data) return <h2>Loading...</h2>;

  const deleteDosen = async (dosenId) =>{
    await axios.delete(`http://localhost:5001/dosens/${dosenId}`);
    mutate('dosens')
  }
  return (
    <Layout>
    <p className='title'>Daftar Dosen</p>
      <hr></hr>
      <form className='Dosen'>
      <Link to="/add" class="btn btn-primary mx-4 my-1 ">Tambah Data</Link>
      <hr></hr>

      <div class="position top-30 start-50">
        <div className="column"></div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">NIP</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody class="table">
            {data.map((dosen, index)=>(
              <tr key={dosen.id}>
              <th class="align-middle"scope="row">{index+1}</th>
              <td class="align-middle">{dosen.name}</td>
              <td class="align-middle">{dosen.nip}</td>
              <td>
              <div>
                    <Link to={`/edit/${dosen.id}`} class="btn btn-primary mx-1 my-1 ">Edit</Link>
                    <button onClick={() => deleteDosen(dosen.id)} type="button" class="btn btn-danger mx-0 my-1 ">Hapus</button>
                </div>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
   


      </form>
  </Layout>

  )
}

export default Dosenlist