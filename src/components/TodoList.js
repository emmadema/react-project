// src/components/TodoList.js
//creating and array maping through the JSON
//taking what we did in todos container and putting it in it sown component
import React, {Component} from 'react'
import Todo from './todos'

class TodoList extends Component {
  render(){
    let todoArray = this.props.todos.map( (todo) => {
      return (
        <Todo
          key={todo._id}
          todo={todo}
          onUpdateTodo={this.props.onUpdateTodo}
          onDeleteTodo={this.props.onDeleteTodo} />
      )
    })
    return(
      <div className="todos">
        {todoArray}
      </div>
    )
  }
}

export default TodoList