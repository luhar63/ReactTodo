import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

var Todo = require('Todo');

describe ("Todo",()=> {
  it("should Exist", ()=>{
    expect(Todo).toExist();
  });
it("should call onToggle prop with id on click", ()=>{
  var todoData = {
    id:199,
    text: 'Write todo.test test',
    completed : true,
    createdAt:0,
    completedAt:undefined
  };
  var spy = expect.createSpy();
  var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
  var $el = $(ReactDOM.findDOMNode(todo));

  TestUtils.Simulate.click($el[0]);

  expect(spy).toHaveBeenCalledWith(199);
});

});
