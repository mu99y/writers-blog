import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class App extends Component {
	state = {
		writers: []
	};

	async componentDidMount() {
		const writers = await (await fetch('http://localhost:3001/writers')).json();
		this.setState({ writers });
	}

	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<ul>
						<li>
							<Link to="/writers">writers</Link>
						</li>
					</ul>

					<Route exact path="/" render={() => <div>Home</div>} />
					<Route path="/writers" render={() => <div>Writers</div>} />
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

export default App;
