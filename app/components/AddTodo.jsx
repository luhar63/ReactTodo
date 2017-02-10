var React = require('react');
var {connect} =require ('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onSubmit: function (e){
    e.preventDefault();
    var {dispatch} = this.props;
    var text = this.refs.todoText.value;
    if(text && typeof text === "string"){
      this.refs.todoText.value = '';
      //this.props.onAddTodo(text);
      dispatch(actions.addTodo(text));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function (){
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" ref="todoText" placeholder="What do u want to do ?"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
