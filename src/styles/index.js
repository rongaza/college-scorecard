import styled from 'styled-components';

export const Card = styled.div`
	margin: 10px 10px;
	padding: 20px;
	min-height: 200px;
	width: 300px;
	border-radius: 3px;
	background-color: white;
	-webkit-box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.25);
	-moz-box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.25);
	box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.25);
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
	font-size: 12px;
	margin-top: 2px;
	margin-bottom: 2px;
	line-height: 1;
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
	border-bottom-left-radius: 25px;
	border-top-left-radius: 25px;
`;

export const SearchBar = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;

export const OptionsBox = styled.div`
	z-index: 9;
	width: 380px;
	height: auto;
	margin-top: 40px;
	background: white;
	border-radius: 5px;
	-webkit-box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.25);
	-moz-box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.25);
	box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.25);
`;

export const Ul = styled.ul`
	list-style-type: none;
	margin-left: 0;
	padding: 5px;
`;
export const Li = styled.li`
	font-size: 16px;
	line-height: 1.6;
	&:hover {
		background: lightBlue;
		border-radius: 5px;
	}
`;

export const BGColor = styled.span`
	background: rgb(113, 181, 204);
	background: linear-gradient(0deg, rgba(113, 181, 204, 1) 29%, rgba(173, 216, 230, 1) 70%);
`;
