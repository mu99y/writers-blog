import React, { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import { NotFound } from '../Errors';
import Writer from './Writer';

export default ({ match: { url }, writers }) => (
	<Fragment>
		<ul>
			{writers.map(({ id, name }) => (
				<li key={id}>
					<Link to={`${url}/${id}`}>{name}</Link>
				</li>
			))}
		</ul>
        <Route path={url} render={() => <h1>Please select a writer from above...</h1>} />
		<Route
			path={`${url}/:writerId`}
			render={
				({ match }) => {
					const writer = writers.find((writer) => writer.id === match.params.writerId)

					if(!writer){
						return <NotFound />
					}

					return <Writer {...writer} />
				}
			}
		/>
	</Fragment>
);
