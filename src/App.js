
import './App.css';
import './Extra.css';
import Card from './Component/Card';
import data from "./data.json"
import React, { useState } from 'react'


function App(arr) {
  const val = (data[1]);
  const [card, setCard] = useState();

 
  function toggle(ind) {
    setCard(
      ind.map(i => {
        return (<div className='pTab'><Card key={i} {...val[i]} /></div>)
      })
    )
  }

  return (
    <section className='pallet'>
      <section className='Pbuttons ' style={{gap:"20px",width:"100%" ,display:"flex",justifyContent:"center"}}>
        <button onClick={() => toggle([0,1])} className="button-ui">
          <h3>Junior</h3>
          <div>(Age 6-10)</div>
          <div style={{position:"relative",top:"33px"}}><span className='triangle'></span></div>
        </button>
        
        <button onClick={() => toggle([2])} className="button-ui" >
          <h3>Senior</h3>
          <div>(Age 10-15)</div>
          <div style={{ position: "relative", top: "33px" }}><span className='triangle'></span></div>
        </button>  
    
      </section>
      <section className='ViewResults'>
        {card}
      </section>
    </section>
   
  );
}

export default App;
