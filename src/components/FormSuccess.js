import React from 'react';
import '../Form.css';

export const FormSuccess = () => {
	return (
		<div className="form-content-right">
			<h1 className="form-success">We have received your request!</h1>{' '}
			<img src="./assets/img/img-3.svg" alt="success" className="form-img-2" />
		</div>
	);
};
