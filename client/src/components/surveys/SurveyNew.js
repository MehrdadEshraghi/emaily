import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import { reduxForm } from 'redux-form';
import SurveyFormReview from './SurveyFormReview';
import Container from '@material-ui/core/Container';

class SurveyNew extends Component {
	state = {
		showFormReview: false
	};

	renderContent() {
		if (this.state.showFormReview) {
			return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })} />;
		}

		return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />;
	}

	render() {
		return (
			<Container style={{ paddingTop: '5rem' }}>
				<div>{this.renderContent()}</div>
			</Container>
		);
	}
}

export default reduxForm({
	form: 'surveyForm'
})(SurveyNew);
