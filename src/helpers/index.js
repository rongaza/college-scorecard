export const getProgramCounts = (programs) => {
	const programCount = {};
	// check to see if college offers degree programs
	if (programs) {
		// create key/value pair {'Associate Degree': 15}
		programs.forEach((program) => {
			programCount[program.credential.title] = (programCount[program.credential.title] || 0) + 1;
		});
	}
	return programCount;
};

export const formatNumber = (num) => {
	//
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const stateAbbrev = [
	'AL',
	'AK',
	'AS',
	'AZ',
	'AR',
	'CA',
	'CO',
	'CT',
	'DE',
	'DC',
	'FM',
	'FL',
	'GA',
	'GU',
	'HI',
	'ID',
	'IL',
	'IN',
	'IA',
	'KS',
	'KY',
	'LA',
	'ME',
	'MH',
	'MD',
	'MA',
	'MI',
	'MN',
	'MS',
	'MO',
	'MT',
	'NE',
	'NV',
	'NH',
	'NJ',
	'NM',
	'NY',
	'NC',
	'ND',
	'MP',
	'OH',
	'OK',
	'OR',
	'PW',
	'PA',
	'PR',
	'RI',
	'SC',
	'SD',
	'TN',
	'TX',
	'UT',
	'VT',
	'VI',
	'VA',
	'WA',
	'WV',
	'WI',
	'WY',
];
