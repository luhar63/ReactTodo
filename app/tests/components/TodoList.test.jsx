import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

//var TodoList = require('TodoList');
import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo , {Todo} from 'Todo';
//var Todo = require('Todo');

describe ("TodoList",()=> {
  it("should Exist", ()=>{
    expect(TodoList).toExist();
  });
  it("should render one Todo Component For each Todo items", ()=>{
    var todos = [
      {
          id:1,
          text : "Do Something",
          completed:false,
          completedAt:undefined,
          createdAt:500
      },
      {
          id:2,
          text : "Check Mail",
          completed:false,
          completedAt:undefined,
          createdAt:500
      },
      {
          id:3,
          text : "Again do Something",
          conmleted:false,
          completedAt:undefined,
          createdAt:500
      }
    ];
    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store = {store}>
        <ConnectedTodoList />
      </Provider>
    );

    //var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todoList = TestUtils.scryRenderedComponentsWithType(provider,ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);

  });

  it("should render empty message when no to dos", ()=>{
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);

  });
});
