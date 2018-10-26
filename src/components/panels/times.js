import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const Container = styled.div`
    padding: ${theme.spacing['5']};
    background-color: ${theme.colors.green};
    color: white;
    flex: 45%;

    @media only screen and (min-width: 768px) {
        border-radius: 8px;
        margin-right: ${theme.spacing['5']};
        margin-bottom: ${theme.spacing['5']};
    }
`;

const H2 = styled.h2`
    padding-bottom: ${theme.spacing['4']};
    text-align: center;
    margin-bottom: 0;
`;

const Table = styled.table`
    font-size: 1.4rem;
    line-height: 1.8rem;
`;

const TimesPanel = () => (
    <Container>
        <H2>TIMES</H2>
        <Table>
            <tbody>
                <tr><th>Day</th><th>Time</th></tr>

                <tr><td>Tuesday</td><td>1.30 - 5.30pm</td></tr>
                <tr><td>Wednesday</td><td>1.30 - 5.30pm</td></tr>
                <tr><td>Thursday</td><td>2 - 5.30pm</td></tr>
            </tbody>
        </Table>
    </Container>
);

export default TimesPanel;
