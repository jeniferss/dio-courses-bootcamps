import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer `
background-color: #2E4053;
position: absolute;
bottom: 0;
left: 0;
height: 40px;
width: 100%;
display: flex;
font-weight: bold;
align-items: center;
justify-content: center;
`

const FooterItem = styled.div `
text-decoration: none;
font-size: 16px;
color: white;
font-family: 'Roboto';
padding: 10px;
`

export default function footer() {
	return(
		<React.Fragment>
			<Footer>
				<FooterItem>First React Application</FooterItem>
			</Footer>
		</React.Fragment>
	);
}
