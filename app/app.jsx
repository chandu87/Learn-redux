var React= require('react');
var ReactDOM=require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load Foundation
$(document).foundation();

//App CSS adding custom styles
require('style!css!sass!applicationStyles')

// ReactDOM.render(
// 					<p>BiolerPlate 3</p>,
// 					document.getElementById('app')
// 				);

 require('./redux-example.jsx');
// require('./redux-todo-example.jsx');
