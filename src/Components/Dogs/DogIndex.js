import React, { Component } from 'react';
 
export default class Dogs extends Component {
 constructor(props){
   super(props)
   this.state = {
       dog: ""
   }
 }

getDog = () => {
fetch("https://dog.ceo/api/breeds/image/random")
.then(res => res.json())
.then (data => (
  this.setState({
    dog: data.message
    })
  )
)}

 render() {
   return (
     <div>
       <img src={this.state.dog} alt='doggo' />
       <button onClick={this.getDog}>RANDOM DOGGO</button>
     </div>
   )
 }
}