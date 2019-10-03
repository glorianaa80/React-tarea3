import React from 'react';
import './App.css';
import Title from './title';
import Paragraph from './paragraph';
import Image from './image';

function Card(props) {
  return (
    
    <div className='card col-sm-12 col-md-4'>
      <Image>{props.src}</Image>
      <Title>{props.title}</Title>
      <Paragraph>{props.cont}</Paragraph>
    </div>

  )
}

export default Card;