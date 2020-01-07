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

const BrandIcon = () => {
    const data = useStaticQuery(graphql`
        query {
            brandIcon: file(relativePath: { eq: "id-badge-duotone.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return <Img fluid={data.brandIcon.childImageSharp.fluid} alt="" className="img-fluid mx-auto d-block mb-4" style={{ width: 40 }} />
}

export default BrandIcon
