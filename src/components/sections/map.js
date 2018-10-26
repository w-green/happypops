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
    font-size: 1.2rem;
    line-height: 2rem;
    justify-content: center;
`;

const MapWrapper = styled.div`
    display: flex;
    flex: 1 0 100%;
    justify-content: center;
`;

const H2 = styled.h2`
    text-align: center;
    color: white;
`;

const Map = () => (
    <FullWidthContainer>
        <SectionContainer>
            <H2>Location</H2>

            <MapWrapper>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.846517752178!2d-0.2775318842546701!3d50.83400677953013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48759a1d58fd6be3%3A0xd5940b7110eeebb!2sThe+Shoreham+Centre!5e0!3m2!1sen!2suk!4v1540150917716"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border:0 }}
                    title="google map of the shoreham centre"
                    allowFullScreen
                ></iframe>
            </MapWrapper>
        </SectionContainer>
    </FullWidthContainer>
);

export default Map;