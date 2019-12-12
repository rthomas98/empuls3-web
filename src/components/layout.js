/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql, Link} from "gatsby"

import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"
import { Container, Row, Col, Nav } from "react-bootstrap";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      
        <main>{children}</main>
        <footer className="footer pt-5 pb-5">
          <Container>
            <Row className="mb-4">
                <Col xs="12" md="12" lg="4">
                  <h4>Design</h4>
                  <p>
                    By utilizing graphic design and visual branding, companies accomplish organic engagement and build relationship with clients.
                  </p>
                  <p>
                    <Link to="/ui-ux-design" className="learn-more">Learn more</Link>
                  </p>
                </Col>
              <Col xs="12" md="12" lg="4">
                <h4>Development</h4>
                <p>
                    We design engaging, interactive, great looking websites and mobile apps, that truly represent your business and build better conversion rates.
                </p>
                <p>
                  <Link to="/web-development" className="learn-more">Learn more</Link>
                </p>
              </Col>
              <Col xs="12" md="12" lg="4">
                <h4>Marketing</h4>
                <p>
                  We get our clients in front of the right audience on the right platform for the right reason to ensure every ad dollar is spent as effectively.
                </p>
                <p>
                  <Link to="/marketing-overview" className="learn-more">Learn more</Link>
                </p>
              </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                  <h4 className="text-center">Our Newsletter</h4>
                  <p className="lead text-center">Stay ahead of the curve with insight in our monthly newsletter</p>
                </Col>
            </Row>
            <Row className="">
              <Col className="text-center">
                <Nav className="justify-content-center">
                  <Nav.Item>
                    <Nav.Link href="https://www.facebook.com/empuls3/" target="_blank">facebook</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="https://twitter.com/empuls3" target="_blank" eventKey="link-1">twitter</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="https://www.linkedin.com/company/28631371/admin/" target="_blank" eventKey="link-2">linkedin</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="https://www.instagram.com/empuls3/?hl=en" target="_blank" eventKey="link-2">instagram</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="https://dribbble.com/empuls3" target="_blank" eventKey="link-2">Dribbble</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col className="text-center copyright">
                <p>
                  &copy; {new Date().getFullYear()} Empuls3 Media <Link to="">Terms</Link>
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
