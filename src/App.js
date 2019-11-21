import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Writers from './Components/Writers';

class App extends Component {
	state = {
		writers: []
	};


	async componentDidMount() {
		const writers = await (await fetch('http://localhost:3001/writers')).json();
		this.setState({ writers });
	}

	render() {
    const { writers } = this.state;

		return (
			<BrowserRouter>
				<React.Fragment>
					<ul>
						<li>
							<Link to="/writers">writers</Link>
						</li>
					</ul>
					<hr/>
					<Route exact path="/" render={() => <div>Home</div>} />
					<Route path="/writers" render={ props => <Writers {...props} writers={writers} />} />
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

export default App;
