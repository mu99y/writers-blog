import React, { Component } from 'react';

class App extends Component {
	state = {
		writers: []
	};

	async componentDidMount() {
    const writers = await fetch('http://localhost:3001/writers').json()
    this.setState({ writers })
	}

	render() {
		return <div />;
	}
}

export default App;
