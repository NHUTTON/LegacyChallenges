import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
export default class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      input: ""
    }
   }
   
   search(e) {
    this.setState({
      input: e.target.value
    })
   }
   
   render() {

    // filteredThings = (  this.state.things.filter(thing, index) => {
    //   return thing.index.toLowerCase().includes(this.state.input.toLowerCase())
    // })

    // filteredThings() {
    //   this.state.things.map(thing => {
    //       console.log(thing)
    //   })
    // }
  
     return (
       <div>
     <Input placeholder='Search Here'  onChange={(e) => this.search(e)} />
     <h3>Results:</h3>
     {this.filteredThings} 
     {
       this.state.things.filter(thing => thing.includes(this.state.input)).map(filteredList => (<li> {filteredList} </li>))   
      }
     </div>
      )
    } 
  }