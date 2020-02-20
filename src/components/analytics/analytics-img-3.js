import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const AnalyticsImgThree = () => {
    const data = useStaticQuery(graphql`
        query {
            analyticsImageThree: file(relativePath: { eq: "analytics-img-3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1170) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return <Img fluid={data.analyticsImageThree.childImageSharp.fluid} alt="Our Conversion Rate Optimization team analyzes the navigation patterns of your site using Heat Mapping and Click Analysis methods." className="img-fluid" />
}

export default AnalyticsImgThree