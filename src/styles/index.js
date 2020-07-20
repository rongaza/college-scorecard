import styled from 'styled-components';

export const Card = styled.div`
	margin: 10px 10px;
	padding: 20px;
	min-height: 200px;
	width: 300px;
	background-color: white;
	-webkit-box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.41);
	-moz-box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.41);
	box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.41);
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export const Title = styled.h4`
	font-size: 12px;
	margin-top: 0px;
	margin-bottom: 0;
	font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

export const Text = styled.p`
	font-size: 10px;
	margin-top: 0;
	margin-bottom: 0;
	font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
	color: ${(props) => props.color};
`;

export const PercentageWrapper = styled.div`
	height: 10px;
	width: ${(props) => (props.width ? props.width : '100%')};
	background-color: ${(props) => (props.color ? props.color : 'lightgray')};
	align-content: center;
	border-radius: 25px;
	margin: 5px;
	margin-left: 0px;
`;

export const PercentBar = styled.div`
	height: 100%;
	width: ${(props) => (props.percent ? `${props.percent}%` : '0%')};
	background-color: ${(props) => (props.color ? props.color : 'lightblue')};
	margin: auto;
	margin-left: 0px;
	border-radius: 25px;
`;
