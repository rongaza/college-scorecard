import React, { useEffect, useState, useCallback } from 'react';
import Searchbar from './components/Searchbar';
import Dashboard from './components/Dashboard';
import { fetchData } from './Api/api';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1200px;
	margin: auto;
`;

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
		<Container>
			<Searchbar searchByState={handleSearchByState} />
			<Dashboard collegeData={collegeData} error={error} loading={loading} />
		</Container>
	);
}

export default App;
