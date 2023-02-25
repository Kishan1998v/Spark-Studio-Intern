import React from 'react'
import './card.css'
export default function CardMiddle(props) {
    const listofarchivement = props.curriculum_outcomes.map(val => {
        return (<li key={val}>{val}</li>)
    })
    let number_of_classes_price = Math.floor(props.discounted_price/props.num_classes)
 
  return (
    <section className='midArea'>
              <p>{props.pitch}</p>
              <h3>Student will archive:</h3>
              <ul>
                  {listofarchivement}
              </ul>
              <section className='midAreaWarning'>
                  <div style={{display:"flex",justifyContent:"space-between" ,marginInline:"20px"}}>
                      <article style={{ marginTop: "-13px" }}>
                            <h3 style={{fontSize:"24px"}}>₹{props.discounted_price}</h3>
                            <p style={{marginTop:"-20px", textDecorationLine:"line-through",fontSize:"15px",color:"#999999"}}>₹{props.original_price}</p>
                      </article>
                      <p style={{fontSize:"17px"}}><b>₹{number_of_classes_price}</b> per class</p>
                  </div>
                  <p>We'll schedule thr slots as per your convenience</p>
              </section>
      </section>
     
  )
}
