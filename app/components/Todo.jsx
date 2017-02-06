var React = require('react');

var Todo = React.createClass({
  render:function (){
    var {id,text,completed,createdAt,completedAt} = this.props;
    var renderDate=() => {
      var message="Created ";
      var timestamp= createdAt;
      if(completed){
        var message="Completed ";
        var timestamp= completedAt;
      }

      return (message + moment.unix(timestamp).format("MMM Do YYYY @ hh:mm a"));
    };
    return (
      <div onClick={()=>{
          this.props.onToggle(id);
        }}>
        <p>
          <input type="checkbox"  checked={completed}/>
          {text}
          </p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo;
