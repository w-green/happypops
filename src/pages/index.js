import React from 'react'
import styled from 'styled-components';

import GlobalStyle from '../style.css';

import theme from '../theme';
import Layout from '../components/layout'
import TimesPanel from '../components/panels/times';
import PricesPanel from '../components/panels/prices';
import ContactUsPanel from '../components/panels/contactus';
import MapPanel from '../components/panels/map';
import AboutUsSection from '../components/sections/aboutUs';
import RulesSection from '../components/sections/rules';
import AcceptanceOfRiskSection from '../components/sections/acceptanceOfRisk';
import PartiesSection from '../components/sections/parties';
import FooterSection from '../components/sections/footer';

const PanelsContainer = styled.div`
    margin-top: 40px;
    display: block;

    @media only screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        margin: ${theme.spacing['5']};
    }
`;


const PanelsContainerMap = styled.div`
    margin-top: 40px;
    display: block;

    @media only screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        margin: ${theme.spacing['5']};
    }
`;

const IndexPage = () => (
  <Layout>
      <GlobalStyle />

      <AboutUsSection />

      <PanelsContainer>
        <TimesPanel />
        <PricesPanel />
      </PanelsContainer>

      <PartiesSection />

      <AcceptanceOfRiskSection />

      <RulesSection />

      <PanelsContainerMap>
        <MapPanel />
        <ContactUsPanel />
      </PanelsContainerMap>

      <FooterSection />

  </Layout>
)

export default IndexPage
