import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

var TodoApp = require('TodoApp');

describe ("TodoApp",()=> {
  it("should Exist", ()=>{
    expect(TodoApp).toExist();
  });
  it("should add todo to the todos state on handleAddTodo", ()=>{
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it("should toggle  comleteed value when handleToggle  called",()=>{
    var todoData = {
      id:11,
      text: 'Text Features',
      completed : false
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos:[todoData]});

    //check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);
    //call handleToggle with 11
    todoApp.handleToggle(11);
    //verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
