import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import Landing from './Landing';
import * as actions from '../actions';

function Dashbord() {
	return (
		<div>
			<h2>Dashbord</h2>
		</div>
	);
}
function SurveyNew() {
	return (
		<div>
			<h2>SurveyNew</h2>
		</div>
	);
}

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route path="/" exact component={Landing} />
						<Route path="/surveys" exact component={Dashbord} />
						<Route path="/surveys/new" exact component={SurveyNew} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
