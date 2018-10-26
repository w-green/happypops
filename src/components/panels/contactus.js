import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const Container = styled.div`
    padding: ${theme.spacing['5']};
    background-color: ${theme.colors.pink};
    color: white;
    flex: 1 1 200px;
    font-size: 1.4rem;
    line-height: 1.8rem;

    @media only screen and (min-width: 718px) {
        border-radius: 8px;
        margin: ${theme.spacing['5']};
    }
`;

const H2 = styled.h2`
    padding-bottom: ${theme.spacing['4']};
    text-align: center;
    margin-bottom: 0;
`;

const Div = styled.div`
    font-size: 1.2rem;
    margin-bottom: ${theme.spacing['2']};
`;

const ContactUsPanel = () => (
    <Container>
        <H2>Contact us</H2>
        <Div><span>email: </span>
        <br /><span>happypopsplay@gmail.com</span></Div>
        <Div><span>telephone: </span>
        <br /><span>07811115860</span></Div>
    </Container>
);

export default ContactUsPanel;
