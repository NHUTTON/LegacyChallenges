import React, { Component } from 'react';
 
const CatList = (props) => {
 return (
   <div>
     {props.cats.map(cat => {
       return <Cat cat={cat}/>
      })}
   </div>
 )
}

const Cat = (props) => {
  return (
    <li>{props.cat}</li>
  )
}

export default CatList;
 

