import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import { connect } from 'react-redux';
import Landing from './Landing';
import * as actions from '../actions';
import '../styles/App.css';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<div>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route path="/" exact component={Landing} />
						<Route path="/surveys" exact component={Dashboard} />
						<Route path="/surveys/new" exact component={SurveyNew} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
