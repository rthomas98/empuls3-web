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

const BrandBannerImg = () => {
    const data = useStaticQuery(graphql`
        query {
            brandBannerImage: file(relativePath: { eq: "brand-banner-img.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1170) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return <Img fluid={data.brandBannerImage.childImageSharp.fluid} alt="Whether you’re just starting out or evolving your brand, Empuls3 will help you grow." className="img-fluid" />
}

export default BrandBannerImg