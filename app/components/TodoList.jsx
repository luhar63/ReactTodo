var React = require('react');
var {connect} = require('react-redux');
//var Todo = require('Todo');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render:function (){
    var {todos,showCompleted, searchText} = this.props;


    var renderTodos = () =>{
      if(TodoAPI.filterTodos(todos,showCompleted,searchText).length){
        return TodoAPI.filterTodos(todos,showCompleted,searchText).map((todo)=>{
          return (<Todo key={todo.id} {...todo} />);
        });
      }else {
        return (<div className="container__message">Nothing to do</div>);
      }
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  (state)=>{
    return state;
  }
)(TodoList);
