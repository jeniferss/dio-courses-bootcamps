import React from 'react';
import styled from 'styled-components';

const Nav = styled.div `
background-color: #2E4053 ;
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex: .7;
width: 100%;
height: 80px;
`

const Item = styled.p `
font-size: 30px;
font-family: 'Roboto';
font-weight: bold;
color: white;
padding: 50px;
`

export default function header() {
	return(
		<Nav>
			<Item>The Northern Lights</Item>
		</Nav>
	);
}
