import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const AttributionLinks = () => {
	return (
		<Wrapper>
			Icons made by{' '}
			<a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
				Pixel perfect
			</a>{' '}
			from{' '}
			<a href="https://www.flaticon.com/" title="Flaticon">
				www.flaticon.com
			</a>
		</Wrapper>
	);
};

export default AttributionLinks;
