import React from 'react';
import styled from 'styled-components';

import theme from '../../theme';

const FullWidthContainer = styled.div`
    background-color: ${theme.colors.green};
`;

const SectionContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: ${theme.spacing['5']};
    color: white;
    font-size: 1.2rem;
    line-height: 2rem;
`;

const H2 = styled.h2`
    text-align: center;
`;

const Parties = () => (
    <FullWidthContainer>
        <SectionContainer>
            <H2>Parties</H2>

            <p>Happy Pops, Happy Children, Happy Parents and Perfect Parties!</p>

            <p>We want to ensure your party is one to remember so we offer you the very best facilities in a safe and secure environment.</p>

            <p>To book please email happypopsplay@gmail.com or call on 0781 111 5860</p>

        </SectionContainer>
    </FullWidthContainer>
);

export default Parties;