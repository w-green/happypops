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
        <p>Happy Pops is an indoor play area in the heart of Shoreham. It has been created to engage, entertain and educate kids up to the age of 5.</p>
        <p>We are much more than a traditional Soft Play offering a dedicated baby area with sensory activities. Our older visitors can enjoy inflatables, ride ons, giant lego and more!</p>
        <p>We aim to unlock imaginations and give children the opportunity to play and explore in a safe and exciting environment.</p>
        <p>We are located in the main hall of the Shoreham Centre offering the convenience of a cafe for accompanying parents as well as toilet/baby changing facilities.</p>

        <p>Our drop in sessions are open every Tuesday, Wednesday (1.30pm-5pm) and Thursday (2pm-5pm). </p>

        <p>Have a birthday coming up?</p>
        <p>Why not book our space for your party?</p>
    </SectionContainer>
);

export default AboutUs;