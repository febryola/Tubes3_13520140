import './Menu.css'
import React, { useState } from 'react';

const App = (props) => {

    const[pengguna,updateName] = useState('');
    const[ill,updateIll] = useState('');
    const[dna,updateDna] = useState('');

    const[resultPengguna,updateResultName] = useState('');
    const[resultIll,updateResultIll] = useState('');
    const[presentase,updatePresentase] = useState(0);
    const[status,updateStatus] = useState("");

    const[isReponseSuccess,updateResponseSuccess]= useState(false);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const handleInput = (event) => {
      switch(event.target.name){
        case "pengguna":
          updateName(event.target.value)
          break;
        case "penyakit":
          updateIll(event.target.value)
          break;
      }
    };
    const onSubmitClick = async (event) =>{
      if(pengguna === '' || ill === '' || dna === ''){
        alert('Data tidak boleh kosong')
      }else{
      event.preventDefault();
      const result = await props.handleData(pengguna,ill,dna);
      if (result.status != 200){
        alert('Data tidak valid')
        updateResponseSuccess(false)
      }
      else{
        updateResultName(result.data.nama)
        updateResultIll(result.data.penyakit)
        updatePresentase(result.data.persentase)
        updateStatus(result.data.status)
        updateResponseSuccess(true)
      }
    }
    };
    const setUploadFile = (event) =>{
      event.preventDefault();
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        console.log(text);
        updateDna(text);
      };
      reader.readAsText(event.target.files[0]);

    }
    
    return ( 
      <>
        <form onSubmit={onSubmitClick}>
          <div className='Option-txt'>
            <p className='txt'>Nama Pengguna : </p>
            <input className='Input' type="text" name="pengguna" value = {pengguna} onChange={handleInput} placeholder="nama..." />
          </div>
          <div className='Option-txt'>
            <p className='txt'>Sequence DNA : </p>
            <input className='Input' type="file" onChange={setUploadFile} />
          </div>
          <div className='Option-txt'>
            <p className='txt'>Prediksi Penyakit : </p>
            <input className='Input' type="text" name="penyakit" value = {ill} onChange={handleInput} placeholder="penyakit..." />
          </div>
          <div className='submitField'>
            <button className='button button1'>
              Submit
            </button>
          </div>
        </form>
        <hr></hr>
        <p className='App-Result'>
          <strong>Hasil Tes</strong>
        </p>
        <p className='App-Result' hidden={!isReponseSuccess} id="HasilTest" >
          <strong>{date} - {resultPengguna} - {resultIll} -{presentase}% - {status} - {dna}</strong> 
        </p>
      </>
    )
}

export default App;
