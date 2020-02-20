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

const BrandImgFour = () => {
    const data = useStaticQuery(graphql`
        query {
            brandImageFour: file(relativePath: { eq: "brand-img-4.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1170) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return <Img fluid={data.brandImageFour.childImageSharp.fluid} alt="Creating an optimal user experience is fundamentally rooted in the efficient exchange of information." className="img-fluid" />
}

export default BrandImgFour