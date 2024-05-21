import React from 'react'
import Layout from './Layout'
import axios from "axios";
import useSWR, {useSWRConfig} from "swr";
import { Link } from 'react-router-dom';

const Matakuliahlist = () => {
    const {mutate} = useSWRConfig();
    const fetcher = async () =>{
      const response = await axios.get ('http://localhost:5001/matakuliahs');
      console.log(response)
      return response.data;
    };
    const {data} = useSWR('matakuliahs', fetcher);
    if(!data) return <h2>Loading...</h2>;

    const deleteMatakuliah = async (matakuliahId) =>{
      await axios.delete(`http://localhost:5001/matakuliahs/${matakuliahId}`);
      mutate('matakuliahs')
    }
    return (
    <Layout>
    <p className='title'>Daftar Matakuliah</p>
      <hr></hr>
      <form className='Dosen'>
      <Link to="/addmk" class="btn btn-primary mx-4 my-1 ">Tambah Data</Link>
      <hr></hr>

     
      <div class="position top-30 start-40">
        <div className="column"></div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Kode MK</th>
              <th scope="col">Matakuliah</th>
              <th scope="col">Dosen </th>
              <th scope="col">SKS </th>
              <th scope="col">Semester </th>
              <th scope="col">Actions </th>
              <th></th>
            </tr>
          </thead>
          <tbody class="table">
          {data.map((matakuliah, index)=>(
            <tr key={matakuliah.id}>
              <th class="align-middle"scope="row">{index+1}</th>
              <td class="align-middle">{matakuliah.kode}</td>
              <td class="align-middle">{matakuliah.name}</td>
              <td class="align-middle">{matakuliah.dosenpj.name}</td>
              <td class="align-middle">{matakuliah.sks} </td>
              <td class="align-middle">{matakuliah.semester}</td>
              <td>
                <div>
                    <Link to={`/editmk/${matakuliah.id}`} class="btn btn-primary mx-1 my-1 ">Edit</Link>
                    <button onClick={() => deleteMatakuliah(matakuliah.id)} type="button" class="btn btn-danger mx-1 my-1 ">Hapus</button>
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

export default Matakuliahlist