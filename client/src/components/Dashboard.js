import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

function Dashboard() {
	return (
		<div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
			<SurveyList />
			<div className="fixed-action-btn">
				<Link to="/surveys/new" className="btn-floating btn-large red">
					<i className="material-icons">add</i>
				</Link>
			</div>
		</div>
	);
}

export default Dashboard;
