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

const BullsEyeIcon = () => {
    const data = useStaticQuery(graphql`
        query {
            bullsEyeIcon: file(relativePath: { eq: "bullseye-arrow-duotone.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return <Img fluid={data.bullsEyeIcon.childImageSharp.fluid} alt="" className="img-fluid mx-auto d-block mb-3 mt-3" style={{ width: 60 }} />
}

export default BullsEyeIcon
