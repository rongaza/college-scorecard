import axios from 'axios';

export const fetchData = async (state, successCB, errorCB, setLoading) => {
	const url =
		'https://api.data.gov/ed/collegescorecard/v1/schools.json?per_page=100&_fields=school.name,school.school_url,id,school.city,school.state,latest.student.size,latest.admissions.admission_rate.overall,latest.programs.cip_4_digit.credential';

	try {
		setLoading(true);

		const data = await axios.get(url, {
			params: {
				api_key: process.env.REACT_APP_API_KEY,
				'school.state': state,
			},
		});
		successCB(data.data.results);

		// set Loading component to unmount
		setTimeout(() => {
			setLoading(false);
		}, 500);
	} catch (error) {
		setLoading(false);
		if (error.response) {
			// Request made and server responded
			console.log(error.response.data);
			console.log(error.response.status);
			console.log(error.response.headers);
			errorCB(error.response);
		} else if (error.request) {
			// The request was made but no response was received
			console.log(error.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log('Error', error.message);
		}
	}
};
