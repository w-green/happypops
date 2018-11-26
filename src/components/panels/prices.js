import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const Container = styled.div`
    padding: ${theme.spacing['5']};
    background-color: ${theme.colors.pink};
    color: white;
    flex: 45%;
    font-size: 1.4rem;
    line-height: 1.8rem;

    @media only screen and (min-width: 768px) {
        border-radius: 8px;
        margin-bottom: ${theme.spacing['5']};
    }
`;

const H2 = styled.h2`
    padding-bottom: ${theme.spacing['4']};
    text-align: center;
    margin-bottom: 0;
`;

// const PriceItem = styled.span`
//     display: block;
// `;

const Table = styled.table`
    font-size: 1.4rem;
    line-height: 1.8rem;
`;

const PricesPanel = () => (
    <Container>
        <H2>PRICES</H2>
        <Table>
            <tbody>
                <tr><td>Babies</td><td>&pound;2.50</td></tr>
                <tr><td>Chidren</td><td>&pound;5</td></tr>
                <tr><td>Additional sibling</td><td>&pound;2.50</td></tr>
                <tr><td>Twins go as one</td><td></td></tr>
                <tr><td>Birthday Hire</td><td> please contact us</td></tr>
            </tbody>
        </Table>

        <p>During busy periods there will be a one out, one in policy.</p>
    </Container>
);

export default PricesPanel;
