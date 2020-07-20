import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import location from '../images/location.png';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Form = styled.form`
	display: flex;
	justify-content: center;
`;

const Input = styled.input`
	height: 20px;
	width: 300px;
	border: 0px;
	background-image: url(${location});
	background-size: 20px;
	background-repeat: no-repeat;
	padding-left: 30px;
	border-radius: 25px;
`;

const Searchbar = ({ searchByState }) => {
	const [state, setState] = useState('');

	const handleSearchState = (e) => {
		setState(e.target.value);
	};

	useEffect(() => {
		const validState = () => {
			// only allow letters for state code
			return /^[a-zA-Z]+$/.test(state);
		};

		if (state.length === 2 && validState) {
			searchByState(state);
		}
	}, [state, searchByState]);

	return (
		<Wrapper>
			<Form onSubmit={(e) => e.preventDefault()}>
				<Input
					type="textarea"
					name="states"
					value={state.toUpperCase()}
					maxLength={2}
					placeholder="Enter a two letter state code: CA"
					onChange={handleSearchState}
				/>
			</Form>
		</Wrapper>
	);
};

export default Searchbar;
