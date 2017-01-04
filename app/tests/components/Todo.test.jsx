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
});
