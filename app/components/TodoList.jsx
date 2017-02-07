var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render:function (){
    var {todos} = this.props;
    var renderTodos = () =>{
      if(todos.length){
        return todos.map((todo)=>{
          return (<Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />);
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

module.exports = TodoList;
