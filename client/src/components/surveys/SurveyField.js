import React from 'react';

function SurveyField({ input, label, meta: { error, touched } }) {
	const recipientsGuide = 'Separate emails by comma (e.g., micheal@gmail.com, john@gmail.com)';
	return (
		<div>
			<label>{label}</label>
			<input style={{ marginBottom: '5px' }} {...input} />
			<div style={{ color: '#9e9e9e' }}>{label === 'Recipient List' ? recipientsGuide : null}</div>
			<div style={{ marginBottom: '20px' }} className="red-text">
				{touched && error}
			</div>
		</div>
	);
}

export default SurveyField;
