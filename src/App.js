import React, { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import Dashboard from './components/Dashboard';
import { fetchData } from './Api/api';

function App() {
	const [error, setError] = useState({});
	const [collegeData, setCollegeData] = useState([]);

	// get initial data when component first loads
	useEffect(() => {
		fetchData('ID', setCollegeData, setError);
	}, []);

	return (
		<div className="App">
			<div>
				<h2>College Scorecard API</h2>
				<Searchbar />
				<Dashboard collegeData={collegeData} greeting={'hi'} />
			</div>
		</div>
	);
}

export default App;
