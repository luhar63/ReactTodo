var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

//var TodoList = require('TodoList');
import TodoList from 'TodoList';  // it is ConnectedTodoList
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState:function () {
    return {
      showCompleted:false,
      searchText:"",
      todos:TodoAPI.getTodos()
    };
  },
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
  handleSearch: function (showCompleted,searchText) {
    this.setState({
      showCompleted : showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  componentDidUpdate:function(){
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id:uuid(),
          text:text,
          completed:false,
          createdAt:moment().unix(),
          completedAt:undefined
        }
      ]
    });
  },
  render : function() {
    var {todos,showCompleted, searchText} = this.state;
    var filterTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);

    return (
      <div className = "row">
        <h1 className="page-title">Todo Application</h1>
        <div className = "column small-centered medium-6 large-4">
          <div className="container">
            <TodoSearch onSearch = {this.handleSearch}/>
            <TodoList/>
            <AddTodo onAddTodo = {this.handleAddTodo} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
