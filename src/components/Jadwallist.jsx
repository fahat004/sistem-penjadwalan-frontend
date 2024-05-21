import React, { useState } from 'react'
import Layout from './Layout'

const Jadwallist = () => {
  const [rombel, setRombel] = useState();
  const [isToggle, setIsToggle] = useState(false);

  const handleToggleButton = () => {
    if (isToggle) {
      setRombel("")
      setIsToggle((prev) => !prev);
    } else {
      alert(`Data Tersimpan, Rombel ${rombel}`);
      setIsToggle((prev) => !prev);
    }
  }

const handleGenerateSchedule = () => {
  alert(`Rombel ${rombel}`)
}
return(
    <Layout>
        <p className='title'>Jadwal Matakuliah</p>
        <hr></hr>
        <div className='d-flex'>
        <p className='me-2 ms-4'>Jumlah Rombel:</p>
        <input  input type='number' id='inputRombel' value={rombel} onChange={(e) => setRombel(e.target.value)}/> 
        <button to="/" className={`btn ${isToggle ? "btn-danger" : "btn-primary"} mx-2 my-1`} onClick={handleToggleButton}>{isToggle ? "Reset" : "Simpan"}</button>
        <button to="/" className="btn btn-danger mx-1 my-1" onClick={handleGenerateSchedule}>Generate</button>
      </div>
      <hr></hr>
  
      <div className="position top-30 start-40">
        <div className="column"></div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Kode Matakuliah</th>
              <th scope="col">Matakuliah</th>
              <th scope="col">Dosen </th>
              <th scope="col">SKS </th>
              <th scope="col">Semester </th>
              <th scope="col">Kelas </th>
              <th scope="col">Hari </th>
              <th scope="col">Jam </th>
              <th scope="col">Ruangan </th>
              <th scope="col">Actions </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table"></tbody>
          
            <tbody>                
                  <tr>
              <th className="align-middle"scope="row"></th>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td>
                <div>
                    <button to={`/`} className="btn btn-primary mx-1 my-1 ">Edit</button>
                    <button type="button" className="btn btn-danger mx-1 my-1 ">Hapus</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </Layout>

  ) 
}
export default Jadwallist