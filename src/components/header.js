import React from "react"
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
        imageOne: file(relativePath: {eq: "happyPopsLarge.png"}) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
              }
            }
          }
      }
    `}
    render={data => (
      <header>
        <Img fluid={data.imageOne.childImageSharp.fluid}  />
      </header>
    )}
  />
)