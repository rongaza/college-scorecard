import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const A = styled.a`
	margin-right: 4px;
	margin-left: 4px;
`;

const AttributionLinks = () => {
	return (
		<Wrapper>
			Icons made by
			<A href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
				Pixel perfect
			</A>
			from
			<A href="https://www.flaticon.com/" title="Flaticon">
				www.flaticon.com
			</A>
		</Wrapper>
	);
};

export default AttributionLinks;
