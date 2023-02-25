import React from 'react'
import './card.css';
import CardEnd from './CardEnd';

import Cardheader from './Cardheader';
import CardMiddle from './CardMiddle';
export default function Card(props) {
  console.log(props.selected);
  let discount = (props.original_price - props.discounted_price) / (props.original_price / 100)
  return (
    <div  className='card-body'>
          <Cardheader key={props.display_name} Dname={props.name} rating={props.rating} discount={discount} />
          <CardMiddle {...props} />
          <CardEnd gameCount={props.games_count} CertiCount={props.certificate_count} NoClass={props.num_classes} />
    </div>
  )
}
