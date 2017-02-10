var React = require('react');
var {connect} = require('react-redux');
//var Todo = require('Todo');
import Todo from 'Todo';

export var TodoList = React.createClass({
  render:function (){
    var {todos} = this.props;
    var renderTodos = () =>{
      if(todos.length){
        return todos.map((todo)=>{
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
    return {
      todos:state.todos
    }
  }
)(TodoList);
