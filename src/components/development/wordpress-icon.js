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

const WordpressIcon = () => {
    const data = useStaticQuery(graphql`
        query {
            wordpressIcon: file(relativePath: { eq: "wordpress-logo-of-a-letter-in-a-circle.png" }) {
                childImageSharp {
                    fluid(maxWidth: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return <Img fluid={data.wordpressIcon.childImageSharp.fluid} alt="" className="img-fluid" />
}

export default WordpressIcon