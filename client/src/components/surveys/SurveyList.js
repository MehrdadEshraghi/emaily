import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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

	renderContent() {
		if (Array.isArray(this.props.surveys) && this.props.surveys.length > 0) {
			return (
				<Container style={{ marginTop: '0', paddingTop: '5rem' }}>
					<div>{this.renderSurveys()}</div>
				</Container>
			);
		} else if (this.props.surveys === null) return;
		else {
			return (
				<Container style={{ paddingTop: '5rem' }}>
					<h4>You have no surveys at the time...</h4>
					<h4>Create One...</h4>
					<div>
						<Link to="/surveys/new" className="btn-floating btn-large red">
							<i className="material-icons">add</i>
						</Link>
					</div>
				</Container>
			);
		}
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

function mapStateToProps({ surveys }) {
	return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
