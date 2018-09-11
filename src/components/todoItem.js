import React from 'react';
import'./TodoItem.css' ;

export default class TodoItem extends React.Componet{
  constructor(props){
    super(props);

  }
  removeTodo(id) {
    this.props.removeTodo(id)
  }
  render(){
    return(
      <div className='todo-wrapper'>
       <button className='removeTodo' onClick={(e) => this.removeTodo(this.props.id)}>Remove</buton>
      </div>
    )
  }
}
