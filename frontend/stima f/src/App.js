import './App.css';
import React, { useState } from 'react';
import Menu from './menu/Menu';
import getResult from './Service/getResult';
import postTest from './Service/postTest';

const App = () => {
  async function handleData(pengguna,ill,dna){
    console.log('fungsi dipanggil',pengguna,ill,dna)
    const checkResult = await postTest(pengguna,ill,dna)
    console.log('hasil dari postTest',checkResult)
    return checkResult
  }
  return (
    <div  className='App-header'>
      <img src={process.env.PUBLIC_URL+"dna.jpg"} className="App-logo" alt="logo"/>      
      <body className='App-body'>
        <h3>
          <img src={process.env.PUBLIC_URL+"hmif.png"} className="App-logo" alt="logo" />
        </h3>
        <h3 >
          Welcome to DNA Checker!
        </h3>
        <h3>
          Algeo Reborn!
        </h3>
        <Menu handleData={handleData}/>
      </body>
    </div>
  );
}

export default App;