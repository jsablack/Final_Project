require('./map');
require('./../css/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import Container from './mashup';

ReactDOM.render(
	<Container />,
	document.getElementById('react-container')
);