import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		return this.props.surveys.reverse().map((survey) => {
			return (
				<div className="card darken-1" key={survey._id}>
					<div className="card-content">
						<span className="card-title">{survey.title}</span>
						<p>{survey.body}</p>
						<p className="right">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
					</div>
					<div className="card-action">
						<Button>Yes: {survey.yes}</Button>
						<Button>No: {survey.no}</Button>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<Container style={{ marginTop: '0', paddingTop: '5rem' }}>
				<div>{this.renderSurveys()}</div>
			</Container>
		);
	}
}

function mapStateToProps({ surveys }) {
	return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
