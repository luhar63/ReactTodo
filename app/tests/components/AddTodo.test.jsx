import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

var AddTodo = require('AddTodo');

describe ("AddTodo",()=> {
  it("should Exist", ()=>{
    expect(AddTodo).toExist();
  });
  it('should call onAddTodo if valid text entered',() =>{
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.refs.todoText.value = 'New Todo for Test';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('New Todo for Test');
  });

  it('should not call onAddTodo if invalid text entered',() =>{
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
