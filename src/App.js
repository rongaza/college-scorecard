import React from 'react';
import Searchbar from './components/Searchbar';
import Dashboard from './components/Dashboard';

function App() {
	return (
		<div className="App">
			<div>
				<h2>College Scorecard API</h2>
				<Searchbar />
				<Dashboard />
			</div>
		</div>
	);
}

export default App;
