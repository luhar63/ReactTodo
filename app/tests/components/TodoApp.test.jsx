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
});
