import React, { useEffect, useState, useCallback } from 'react';
import Searchbar from './components/Searchbar';
import Dashboard from './components/Dashboard';
import { fetchData } from './Api/api';

function App() {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [collegeData, setCollegeData] = useState([]);

	const handleSearchByState = useCallback(
		(state) => {
			fetchData(state, setCollegeData, setError, setLoading);
		},
		[setCollegeData, setError, setLoading]
	);

	// get initial data when component first loads
	useEffect(() => {
		fetchData('ID', setCollegeData, setError, setLoading);
	}, []);

	return (
		<div className="App">
			<Searchbar searchByState={handleSearchByState} />
			<Dashboard collegeData={collegeData} error={error} loading={loading} />
		</div>
	);
}

export default App;
