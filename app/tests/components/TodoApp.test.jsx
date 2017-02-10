import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';


var configureStore = require('configureStore');
var TodoApp = require('TodoApp');
//var TodoList = require('TodoList');
import TodoList from 'TodoList';  // it is ConnectedTodoList

describe ("TodoApp",()=> {
  it("should Exist", ()=>{
    expect(TodoApp).toExist();
  });

  it("should render TodoList", ()=> {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider,TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp,TodoList);

    expect(todoList.length).toEqual(1);
  });

});
