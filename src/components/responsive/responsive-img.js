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

const ResponsiveBannerImgFive = () => {
    const data = useStaticQuery(graphql`
        query {
            responsiveBannerImgFive: file(relativePath: { eq: "res-banner-5.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1170) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return <Img fluid={data.responsiveBannerImgFive.childImageSharp.fluid} alt="designer talking in a meeting" className="img-fluid" />
}

export default ResponsiveBannerImgFive
