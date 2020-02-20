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

const NetIcon = () => {
    const data = useStaticQuery(graphql`
        query {
            netIcon: file(relativePath: { eq: "microsoft-net-framework-seeklogo.com.png" }) {
                childImageSharp {
                    fluid(maxWidth: 87) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return <Img fluid={data.netIcon.childImageSharp.fluid} alt="Dot.Net Icon" className="img-fluid mb-3 mx-auto d-block" style={{ width: 40 }}  />
}

export default NetIcon