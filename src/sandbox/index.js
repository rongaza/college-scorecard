// const [prevState, setPrevState] = useState('');

// trigger search when two letter state entered
// useEffect(() => {
// 	console.log('render searchbar', state);
// 	if (state.length === 2 && prevState !== state) {
// 		searchByState(state);
// 		setPrevState(state);
// 	}
// }, [state, prevState, searchByState]);

import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;
const Col = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

const PercentageWrapper = styled.div`
	height: 10px;
	max-width: 100px;
	background-color: ${(props) => (props.color ? props.color : 'lightgray')};
	align-content: center;
	border-radius: 25px;
	margin: 5px;
`;

const PercentBar = styled.div`
	height: 100%;
	width: ${(props) => (props.percent ? `${props.percent}%` : '0%')};
	background-color: ${(props) => (props.color ? props.color : 'lightblue')};
	margin: auto;
	margin-left: 0px;
	border-radius: 25px;
`;

const Title = styled.h4`
	font-size: 12px;
	margin-top: 0px;
	margin-bottom: 0;
	font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

const Text = styled.p`
	font-size: 10px;
	margin-top: 0;
	margin-bottom: 0;
	font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
	color: ${(props) => props.color};
`;

const Sandbox = () => {
	return (
		<Row style={{ maxWidth: '100px' }}>
			<Col>
				<Text>Addmission Rate:</Text>

				<Row>
					<Col
						style={{
							flex: 1,
							alignItems: 'center',
							margin: '3px',
						}}
					>
						<Text
							bold
							style={{
								paddingBottom: '3px',
							}}
						>
							33%
						</Text>
					</Col>
					<Col style={{ flex: 3, marginLeft: '0px', paddingLeft: 0 }}>
						<PercentageWrapper>
							<PercentBar percent={33} />
						</PercentageWrapper>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default Sandbox;

<form>
  <input>Whateves</input>
  <div id='error'>{ if input is blank than wiret codfe}</div>
</form>