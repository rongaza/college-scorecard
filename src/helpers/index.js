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
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
