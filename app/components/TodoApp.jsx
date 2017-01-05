var React = require('react');
var TodoList = require('TodoList');
var Todo = require('Todo');
var AddTodo = require('AddTodo')

var TodoApp = React.createClass({
  getInitialState:function () {
    return {
      todos:[
      {
        id:1,text:"Walk the Dog"
      },
      {
        id:2,text:"Clean the Yard"
      },
      {
        id:3,text:"Kill the dog"
      },
      {
        id:4,text:"Suicide"
      }
      ]
    };
  },
  handleAddTodo: function (text) {
    var {todos} = this.state;
    todos.push({
      id:todos.length+1,
      text:text
    })
    this.setState({
      todos:todos
    });
  },
  render : function() {
    var {todos} = this.state;
    return (
      <div className = "row">
        <h1 className="page-title">Todo Application</h1>
        <div className = "column small-centered medium-6 large-4">
          <TodoList todos = {todos} />
          <AddTodo onAddTodo = {this.handleAddTodo} />
        </div>
      </div>

    );
  }
});

module.exports = TodoApp;
