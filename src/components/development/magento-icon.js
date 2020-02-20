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

const MagentoIcon = () => {
    const data = useStaticQuery(graphql`
        query {
            megentoIcon: file(relativePath: { eq: "magento.png" }) {
                childImageSharp {
                    fluid(maxWidth: 98) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return <Img fluid={data.megentoIcon.childImageSharp.fluid} alt="Megento Icon" className="img-fluid mb-3 mx-auto d-block" style={{ width: 40 }} />
}

export default MagentoIcon