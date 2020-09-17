import React from 'react';
import validateinfo from '../helpers/validateInfo';
import { useForm } from '../hooks/useForm';
import '../Form.css';

export const FormSignup = ({ submitForm }) => {
	const { values, handleChange, handleSubmit, errors } = useForm(
		submitForm,
		validateinfo
	);

	return (
		<div className="form-content-right">
			<form className="form" onSubmit={handleSubmit}>
				<h1>
					Get Started with us today! Create your account by filling out the
					information below.
				</h1>
				<div className="form-inputs">
					<label htmlFor="username" className="form-label">
						Username
					</label>
					<input
						id="username"
						type="text"
						name="username"
						className="form-input"
						placeholder="Enter your username"
						autoComplete="off"
						value={values.username}
						onChange={handleChange}
					/>
					{errors.username && <p>{errors.username}</p>}
				</div>
				<div className="form-inputs">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						id="email"
						type="text"
						name="email"
						className="form-input"
						placeholder="Enter your email"
						autoComplete="off"
						value={values.email}
						onChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div className="form-inputs">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						id="password"
						type="password"
						name="password"
						className="form-input"
						placeholder="Enter your password"
						autoComplete="off"
						value={values.password}
						onChange={handleChange}
					/>
					{errors.password && <p>{errors.password}</p>}
				</div>
				<div className="form-inputs">
					<label htmlFor="passwordConf" className="form-label">
						Confirm Password
					</label>
					<input
						id="passwordConf"
						type="password"
						name="passwordConf"
						className="form-input"
						placeholder="Enter your passwordConf"
						autoComplete="off"
						value={values.passwordConf}
						onChange={handleChange}
					/>
					{errors.passwordConf && <p>{errors.passwordConf}</p>}
				</div>
				<button type="submit" className="form-input-btn">
					Sign Up
				</button>
				<span className="form-input-login">
					Already have an account? <button href="#">Sign In</button>
				</span>
			</form>
		</div>
	);
};
