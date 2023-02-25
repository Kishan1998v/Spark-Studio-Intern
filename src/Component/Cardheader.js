import React from 'react'
import './card.css'
import Stars from './Stars';
import '../Extra.css';

export default function Cardheader({ Dname, rating, discount }) { 
  return (
    <header className='card-header'>
      <section className="card-top-section">
        <div className='card-toptag'><h3>18 Lessons</h3></div>
        <div class="triangle-left"></div>

        <div className='card-header-circle'><h1>{Math.floor(discount)}% off</h1></div>
      </section>
      <section className='card-header-Titles'>
        <h1>{Dname}</h1>
        <Stars {...rating} />
      </section>
    </header>
  )
}
