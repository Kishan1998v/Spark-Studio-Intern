import React from 'react'
import Fstar from './Logo/Fstar.png';
import Estar from './Logo/Estar.png'
import './card.css';
import '../Extra.css'

export default function Stars() {
    
    return (
      <div style={{display:"flex",marginTop:"-20px",fontSize:13}}>
        <div style={{marginRight:"5px",}}>
          <img alt='' className='styleStar' src={Fstar}/>
          <img alt='' className='styleStar' src={Fstar}/>
          <img alt='' className='styleStar' src={Fstar}/>
          <img alt='' className='styleStar' src={Fstar}/>
          <img alt='' className='styleStar' src={Estar}/>
        </div>
        <span className='Topreview'>(50 reviews)</span>
      </div>
  )
}
