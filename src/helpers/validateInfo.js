export default function validateinfo(values) {
	let errors = {};
	const emailIsValidRegex = /\S+@\S+\.\S+/.test(values.email);

	if (!values.username.trim()) {
		errors.username = 'Username required';
	}

	if (!values.email) {
		errors.email = 'Email required';
	} else if (!emailIsValidRegex) {
		errors.email = 'Email adress is invalid';
	}

	if (!values.password) {
		errors.password = 'Password is required';
	} else if (values.password.length < 6) {
		errors.password = 'Password must be at least 6 characters';
	}

	if (!values.passwordConf) {
		errors.passwordConf = 'Password confirmation is required';
	} else if (values.passwordConf !== values.password) {
		errors.passwordConf = "Passwords don't match";
	}

	return errors;
}
