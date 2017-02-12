var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

//var TodoList = require('TodoList');
import TodoList from 'TodoList';  // it is ConnectedTodoList
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({

  // handleToggle: function(id){
  //   var updatedTodos = this.state.todos.map((todo)=>{
  //     if(todo.id==id){
  //       todo.completed= !todo.completed;
  //       todo.completedAt = todo.completed?moment().unix():undefined;
  //     }
  //     return todo;
  //   });
  //   this.setState({todos:updatedTodos});
  // },


  render : function() {
    return (
      <div className = "row">
        <h1 className="page-title">Todo Application</h1>
        <div className = "column small-centered medium-6 large-4">
          <div className="container">
            <TodoSearch/>
            <TodoList/>
            <AddTodo />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
