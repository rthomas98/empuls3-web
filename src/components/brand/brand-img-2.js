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

const BrandImgTwo = () => {
    const data = useStaticQuery(graphql`
        query {
            brandImageTwo: file(relativePath: { eq: "brand-img-2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1170) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return <Img fluid={data.brandImageTwo.childImageSharp.fluid} alt="Empuls3 helps to breathe life into your company story, developing branding that advances your message and forms a distinct image." className="img-fluid mb-3" />
}

export default BrandImgTwo