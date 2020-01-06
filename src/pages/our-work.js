import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialMediaBannerImg from "../components/social/social-banner";
import Development from "../components/development-cta";

const WorkPage = () => (
  <Layout>
    <SEO title="Work" />

      <Container fluid={true} className="mb-5">
          <Row>
              <Col sm={12} md={12} lg={6} className="p-0">
                  <SocialMediaBannerImg/>
              </Col>
              <Col sm={12} md={12} lg={6} className=" d-flex justify-content-center bg-pink p-5">
                  <div className="my-auto col">
                      <p className="lead m-0 txt-yellow">
                          strategy. creativity. technology. analytics.
                      </p>
                      <h1 className="txt-white mb-0">
                          The fruits of our labor.
                      </h1>
                      <p className="txt-white mb-0 lead">
                          Complete brand overhauls. Tactical marketing strikes. Traditional, digital, UX, social and experiential, it’s all here. And it all worked. Have a look.
                      </p>
                  </div>
              </Col>
          </Row>
      </Container>

      <Development/>
  </Layout>
)

export default WorkPage