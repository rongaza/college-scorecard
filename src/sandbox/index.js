import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row } from '../styles';
import { stateAbbrev } from '../helpers';
import location from '../images/location.png';
import { SearchBar, OptionsBox, Ul, Li } from '../styles';

const Wrapper = styled.div`
	width: 350px;
	height: 40px;
	position: relative;
	margin: 0;
`;

const Input = styled.input`
	width: 100%;
	height: 30px;
	border-radius: 15px;
	border: 0px;
	background-image: url(${location});
	background-size: 30px;
	background-repeat: no-repeat;
	padding-left: 30px;
`;
const Sandbox = ({ searchByState }) => {
	const [showList, setShowList] = useState(false);
	// const [state, setState] = useState('');
	const [searchInput, setSearchInput] = useState('');

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setShowList(false);
		searchByState(searchInput);
		setSearchInput('');
	};
	const handleSearchInput = (e) => {
		console.log(e.target.value);
		// show available state abbreviation options

		if (/^[a-zA-Z]{0,2}$/.test(e.target.value)) {
			setSearchInput(e.target.value.toUpperCase());
			setShowList(true);
		}
	};

	const handleSelectOption = (option) => {
		// setState(option);
		setSearchInput(option);
		// stop options list from displaying
		setShowList(false);
		searchByState(option);
	};

	const renderOptionsList = () => {
		const optionsList = stateAbbrev.filter((state) => {
			if (searchInput.length === 1) {
				return state[0] === searchInput;
			} else {
				return state === searchInput;
			}
		});
		return optionsList.map((option, index) => {
			return (
				<Li key={option} tabIndex={index} onClick={() => handleSelectOption(option)}>
					{option}
				</Li>
			);
		});
	};

	// controls display for search list
	useEffect(() => {
		if (searchInput === '') {
			setShowList(false);
		}
	}, [searchInput]);

	// initiate search without having to hit enter or click option
	useEffect(() => {
		const validState = () => {
			// only allow letters for state code
			return /^[a-zA-Z]+$/.test(searchInput);
		};

		if (searchInput.length === 2 && validState) {
			searchByState(searchInput);
			setShowList(false);
		}
	}, [searchInput, searchByState]);

	return (
		<Row style={{ justifyContent: 'center' }}>
			<Wrapper>
				<SearchBar>
					<form onSubmit={handleFormSubmit}>
						<Input type="text" maxLength={2} onChange={(e) => handleSearchInput(e)} value={searchInput} />
						<span id="error"></span>
					</form>
				</SearchBar>
				{showList ? (
					<OptionsBox>
						<Ul>{renderOptionsList()}</Ul>
					</OptionsBox>
				) : null}
			</Wrapper>
		</Row>
	);
};

export default Sandbox;
