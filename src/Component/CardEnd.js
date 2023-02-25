
import activity from './Logo/activity.png'
import game from "./Logo/game.png"
import certficate from './Logo/certificate.png'
import React from 'react'

export default function CardEnd({gameCount,CertiCount,NoClass}) {
  
  return (
    <section className='Bar'>
      <div style={{paddingInline:'3px', gap: "20px", listStyle: "none", fontSize: "12px", display: "flex", color: "black", alignItems: "center", justifyContent: "center" }} className='EndBarInfo'>
          <li style={{display:"flex" , alignItems:"center" ,fontSize:"13px",fontWeight:"bold" }}><img alt='img'style={{marginRight:"3px"}} src={activity} />{NoClass-10} Activites</li>
          <li style={{display:"flex" , alignItems:"center" ,fontSize:"13px",fontWeight:"bold" }}><img alt='img'style={{marginRight:"3px"}} src={game} /> {gameCount} Games</li>
          <li style={{display:"flex" , alignItems:"center" ,fontSize:"13px",fontWeight:"bold" }}><img alt='img'style={{marginRight:"3px"}} src={certficate} /> {CertiCount} Certificate</li>
      </div>
      <button className='FinalButton'>Buy Course</button>
    </section>
  )
}
