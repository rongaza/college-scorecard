import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	margin: 10px 0px;
	padding: 20px;
`;

const Loading = () => {
	return (
		<Wrapper>
			<h1>Loading...</h1>
		</Wrapper>
	);
};

export default Loading;
