import { useEffect, useState } from 'react';

export const useForm = (callback, validation) => {
	const [values, setValues] = useState({
		username: '',
		email: '',
		password: '',
		passwordConf: '',
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setErrors(validation(values));
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors, callback, isSubmitting]);

	return { values, handleChange, handleSubmit, errors };
};
