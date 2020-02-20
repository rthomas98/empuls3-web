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

const RetweetIcon = () => {
    const data = useStaticQuery(graphql`
        query {
            retweetIcon: file(relativePath: { eq: "retweet-alt-duotone.png" }) {
                childImageSharp {
                    fluid(maxWidth: 640) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return <Img fluid={data.retweetIcon.childImageSharp.fluid} alt="" className="img-fluid mx-auto d-block mb-3 mt-3" style={{ width: 40 }} />
}

export default RetweetIcon