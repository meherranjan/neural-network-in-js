import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import iris from './iris.json';

class App extends Component {
	render() {
	  return (
		<div>
			It works!
		</div>
	  );
	}
  }

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();