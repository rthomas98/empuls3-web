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

const SendinBlue = () => {
    const data = useStaticQuery(graphql`
        query {
            mailChimp: file(relativePath: { eq: "SendinBlue_logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 321) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return <Img fluid={data.mailChimp.childImageSharp.fluid} alt="SendBlue Icon" className="img-fluid" style={{ width: 150 }} />
}

export default SendinBlue
