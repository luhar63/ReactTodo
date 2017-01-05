var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e){
    e.preventDefault();
    var text = this.refs.todoText.value;
    if(text && typeof text === "string"){
      this.refs.todoText.value = '';
      this.props.onAddTodo(text);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function (){
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" ref="todoText" placeholder="What do u want to do ?"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
