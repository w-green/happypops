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
                <tr><td>Birthday Hire</td><td> please contact us</td></tr>
            </tbody>
        </Table>
        {/* <PriceItem>Babies 0-1 &pound;2.50</PriceItem>
        <PriceItem>Chidren 1-6 &pound;5</PriceItem>
        <PriceItem>Additional sibling &pound;2.5</PriceItem>
        <PriceItem>Birthday Hire &pound;150 (2 Hours: 1 hour play and 1 hour lunch, cake etc. You are welcome to bring your own food and drink)</PriceItem> */}

        <p>During quiet times there is no time limit.</p>
        <p>During busy periods you will be limited to 1.5 hours of play.</p>
    </Container>
);

export default PricesPanel;
