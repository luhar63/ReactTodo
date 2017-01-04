var React = require('react');
var TodoList = require('TodoList');
var Todo = require('Todo');

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
  render : function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos = {todos} />
      </div>
    );
  }
});

module.exports = TodoApp;
