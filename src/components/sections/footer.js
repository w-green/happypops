import React from 'react';
import styled from 'styled-components';

import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

import theme from '../../theme';

const FullWidthContainer = styled.div`
    background-color: ${theme.colors.green};
`;

const FooterImgWrapper = styled.div`
    margin: 0 auto;
    text-align: center;
`;

const SocialIcons = styled.div`
    margin: 0 auto;
    text-align: center;

    > svg {
        margin-right: 15px;
    }
`;

const SectionContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: ${theme.spacing['5']};
    color: white;
    font-size: 1.2rem;
    line-height: 2rem;
`;

const A = styled.a`
    color: white;
    margin-right: ${theme.spacing['2']};
`;

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            title
          }
        }
        imageOne: file(relativePath: {eq: "footer-logo-300x131.png"}) {
            childImageSharp {
              fixed(width: 300, height: 131) {
                ...GatsbyImageSharpFixed,
              }
            }
          }
      }
    `}
    render={data => (
        <FullWidthContainer>
            <SectionContainer>
                <FooterImgWrapper>
                    <Img fixed={data.imageOne.childImageSharp.fixed} />
                </FooterImgWrapper>

                <SocialIcons>
                    <A href="https://en-gb.facebook.com/happypopsplay/" target="_blank"><FaFacebookF /></A>
                    <A href="https://www.instagram.com/happypopsplay/" target="_blank"><FaInstagram /></A>
                </SocialIcons>
            </SectionContainer>
        </FullWidthContainer>
    )}
  />
)
