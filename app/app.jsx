var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');




$(document).foundation();
//load custom css--- App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boilerplate 3 Project</p>,
  document.getElementById('app')
);
