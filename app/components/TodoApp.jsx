var React = require('react');
var uuid = require('node-uuid');


var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState:function () {
    return {
      showCompleted:false,
      searchText:"",
      todos:TodoAPI.getTodos()
    };
  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map((todo)=>{
      if(todo.id==id){
        todo.completed= !todo.completed;
      }
      return todo;
    });
    this.setState({todos:updatedTodos});
  },
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
          completed:false
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
          <TodoSearch onSearch = {this.handleSearch}/>
          <TodoList todos = {filterTodos} onToggle={this.handleToggle}/>
          <AddTodo onAddTodo = {this.handleAddTodo} />
        </div>
      </div>

    );
  }
});

module.exports = TodoApp;
