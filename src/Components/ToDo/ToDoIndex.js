import React, { useState, Component, Form, Col, Label, Input, Button  } from 'react';
 
class ToDoIndex extends Component {
 constructor(props){
   super(props)
   this.state = {
       list: [],
       listItem: "",
    }
 } 
 //We need a method that will update the state of 'listitem'  
Input(e) {
   this.setState({
       listItem: e.target.value
   })
}

 //We need a method to update the list with the captured state of list item. And then we will reset the list item inside this method
 
updateList = (e) => {
e.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.listItem],
      listItem: ""
    })
}

 //We need a method to mark the task as complete and remove it from the list.
 
removeItem(index) {
  const list = this.state.list

  list.splice(index,1);
  this.setState({list})
}

render() {
   return (
     <div>
     <form onSubmit={this.updateList}>
       <input onChange={(e) => this.Input(e)}  type="text" />
       <button>submit</button>
       {this.state.list.map((item, i) => (
         <div>
         <li>{item}</li>
         <button  onClick={() => this.removeItem(i)}>Delete</button>
        </div>
       ))}
     </form>
     </div>
   );
   }
}

export default ToDoIndex;