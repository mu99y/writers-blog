import React, { Component } from 'react';

class App extends Component {
	state = {
		writers: []
	};

	componentDidMount() {
		fetch('http://localhost:3001/writers').then((res) => res.json()).then((writers) => this.setState({ writers }));
	}

	render() {
		return <div />;
	}
}

export default App;
