import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const SectionContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: ${theme.spacing['5']};
    font-size: 1.2rem;
    line-height: 2rem;
`;

const H2 = styled.h2`
    text-align: center;
`;

const AboutUs = () => (
    <SectionContainer>
        <H2>ABOUT US</H2>
        <p>We are a kids drop in session with inflatables, ride ons, giant lego, baby area & sensory and more. This pop up playground is open for children upto 6 years old.</p>

        <p>We are located in the main hall of The Shoreham Centre, in the heart of town on Tuesdays, Wednesday and Thursdays afternoons.</p>

        <p>The Shoreham Centre comes with a cafe and baby changing facilities as well as parking and disabled toilets.</p>

        <p>There are also mutliple car parks within Shoreham town.</p>

        <p>We are available to hire for birthday parties.</p>
    </SectionContainer>
);

export default AboutUs;