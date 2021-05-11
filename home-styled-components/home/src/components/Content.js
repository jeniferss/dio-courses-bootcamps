import React from 'react';
import styled from 'styled-components';

const Content = styled.main `
display: flex;
background-color: #DAF7A6;
height: 570px;
justify-content: space-between;
align-items: center;
margin: 0 auto;
flex-direction: row;
box-sizing: border-box;
`

const ContentItem = styled.p `
color: black;
width: 600px;
margin: 30px;
font-size: 18px;
text-align: justify;
margin:30px;
box-sizing: border-box;
`

const ContentTitle = styled.h1 `
color: #2E4053;
width: 600px;
font-size: 28px;
margin: 30px;
font-weight: bold;
text-align: left;
`

export default function content() {
	return(
		<React.Fragment>
				<Content>
					<p>
						<ContentTitle>WHAT ARE NORTHERN LIGHTS?</ContentTitle>
						<ContentItem>
							The bright dancing lights of the aurora are actually
							collisions between electrically charged particles from the sun
							that enter the earth's atmosphere.
							The lights are seen above the magnetic poles of the northern and
							southern hemispheres.
						</ContentItem>
					</p>

					<p>
						<ContentTitle>LEGENDS OF THE LIGHTS</ContentTitle>
						<ContentItem>
							'Aurora borealis', the lights of the northern hemisphere, means
							'dawn of the north'. 'Aurora australis' means 'dawn of the south'.
							In Roman myths, Aurora was the goddess of the dawn. The Maori of
							New Zealand shared a belief with many northern people of Europe
							and North America that the lights were reflections from torches
							or campfires. The Menominee Indians of Wisconsin believed that
							the lights indicated the location of manabai'wok (giants) who
							were the spirits of great hunters and fishermen. The Inuit of
							Alaska believed that the lights were the spirits of the animals
							they hunted: the seals, salmon, deer and beluga whales. Other
							aboriginal peoples believed that the lights were the spirits of
							their people.
						</ContentItem>
					</p>

				</Content>
		</React.Fragment>
	);
}
