import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

var TodoList = require('TodoList');
var Todo = require('Todo');

describe ("TodoList",()=> {
  it("should Exist", ()=>{
    expect(TodoList).toExist();
  });
  it("should render one Todo Component For each Todo items", ()=>{
    var todos = [
      {
          id:1,
          text : "Do Something"
      },
      {
          id:2,
          text : "Check Mail"
      },
      {
          id:3,
          text : "Again do Something"
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);

  });

  it("should render empty message when no to dos", ()=>{
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);

  });
});
