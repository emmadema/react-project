// src/models/Todo.js
//all crud routes live here right now because we don thave control over the backend
//if we had a backend this woukd route to controller
import $ from 'jquery';

//client side model just calling external api from the front end
//set up class called todo model
//static method is a utility class that you call to and cant change
//create go with ajax to super crud api and use post route instead to create that method
class TodoModel {
  static all(){
  	//letting us do an ajax request to our todos model
    let request = $.ajax({
    	//just returns a list of json
      url: "https://super-crud.herokuapp.com/todos",
      method: 'GET'
    });
    return request;
  }

  	static create(todo) {
	  let request = $.ajax({
	    url: "https://super-crud.herokuapp.com/todos",
	    method: 'POST',
	    data: todo
	  })
	  return request
	}

	static delete(todo){
	  let request = $.ajax({
	    url: `https://super-crud.herokuapp.com/todos/${todo._id}`,
	    method: 'DELETE'
	  })
	  return request
	}

	static update(newTodoBody, id) {
		let request = $.ajax({
			url: `https://super-crud.herokuapp.com/todos/${id}`,
			method: 'PUT',
			data: { body: newTodoBody }
		})
		return request
	}
}

export default TodoModel