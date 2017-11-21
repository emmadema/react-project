// src/containers/TodosContainer.js
//a container is still a component 
//moved to a seperate directory because they will never have their own functionailty
//all container do is hold things
//components add up to be a login page the container will hold the whole page
//hold components inside of it 
//need state and not props because we are updating it with dat from the API
//set state also tell the component to re render whatever this is

import React, {Component} from 'react'
import TodoModel from '../models/Todo'
import TodoList from '../components/TodoList'
import CreateTodoForm from '../components/CreateTodoForm'
// import EditTodoForm from '../components/EditTodoForm'

class TodosContainer extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    TodoModel.all().then( (res) => {
      this.setState ({
        todos: res.todos
      })
    })
  }

  createTodo(newBody) {
    let newTodo = {
      body: newBody,
      completed: false
    }
    TodoModel.create(newTodo).then((res) => {
      console.log('created todo', res)
      let todos = this.state.todos
      let newTodos = todos.push(res)
      this.setState({newTodos})
    })
  }

  deleteTodo(todo) {
      console.log('deleting todo', todo)
      TodoModel.delete(todo).then((res) => {
          let todos = this.state.todos.filter(function(todo) {
            return todo._id !== res._id
          });
          this.setState({todos})
      })
  }

   updateTodo(newTodoBody, id) {
    console.log('updating todo in TodosContainer')
    TodoModel.update(newTodoBody, id).then((res)=> {
      let targetTodo = this.state.todos.find((item)=>{
        return item._id === id;
      })
      targetTodo.body = res.body
    })
  }

  render(){
    return (
      <div className='todosContainer'>
        <CreateTodoForm
          createTodo={this.createTodo.bind(this)} />
        <TodoList
          todos={this.state.todos}
          onUpdateTodo={this.updateTodo.bind(this)}
          onDeleteTodo={this.deleteTodo.bind(this)} />
      </div>    )
  }
}

export default TodosContainer