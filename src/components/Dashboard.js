import React from 'react';
import CollegeDisplay from './CollegeDisplay';
import Loading from './Loading';
import styled from 'styled-components';
import AttributionLinks from './Attribution';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	margin: 10px 0px;
	padding: 20px;
`;

const Dashboard = ({ collegeData, error, loading }) => {
	const renderData = (collegeData) => {
		if (error) {
			return renderError();
		}
		if (collegeData.length > 0) {
			return collegeData.map((college) => {
				return <CollegeDisplay college={college} key={college.id} />;
			});
		} else {
			return <h1>Results: 0</h1>;
		}
	};

	const renderError = () => {
		// will render if error returns from api call
		return (
			<div>
				<h1>{error.status}</h1>
				<p>{error.statusText}</p>
			</div>
		);
	};

	return (
		<React.Fragment>
			{loading ? <Loading /> : <Wrapper>{renderData(collegeData)}</Wrapper>}
			<AttributionLinks />
		</React.Fragment>
	);
};

export default Dashboard;
