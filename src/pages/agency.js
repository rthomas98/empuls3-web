import React from "react"

import {Link} from "gatsby";
import {Row, Col, Container} from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

import AgencyBannerImgOne from "../components/agency/agency-banner-img-1";
import AgencyBannerImgTwo from "../components/agency/agency-banner-img-2";
import AgencyBannerImgThree from "../components/agency/agency-banner-img-3";
import AgencyImgFour from "../components/agency/agency-img-4";
import AgencyImgFive from "../components/agency/agency-img-5";
import AgencyImgSix from "../components/agency/agency-img-6";
import AgencyImgSeven from "../components/agency/agency-img-7";
import AgencyImgEight from "../components/agency/agency-img-8";
import AgencyImgNine from "../components/agency/agency-img-9";
import AgencyImgTen from "../components/agency/agency-img-10";


const AgencyPage = () => (
  <Layout>
    <SEO title="Agency" />

    <Container fluid={true} className="mt-3 mb-5">
        <Row>
            <Col sm={12} md={12} lg={6}>
                <Row >
                    <Col lg={12} className="mb-4">
                        <div className="txt-overlay">
                            <AgencyBannerImgOne/>
                            <div className="bottom-left p-3">
                                <p className="lead txt-yellow m-0">
                                    strategy. creativity. technology. analytics.
                                </p>
                                <h1 className="txt-white m-0">
                                    OUR AGENCY
                                </h1>
                                <p className="txt-white m-0">
                                    It’s Not About the Individuals, It’s About the Culture.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <AgencyBannerImgTwo/>
                    </Col>
                </Row>
            </Col>
            <Col sm={12} md={12} lg={6}>
                <AgencyBannerImgThree/>
            </Col>
        </Row>
    </Container>

      <Container className="mb-5">
          <Row>
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                      <h2>So, who is Empuls3?</h2>
                      <p className="lead">
                          The best team, the best technology
                      </p>
                      <p>
                          Empuls3 is composed of a professional team that develops effective digital marketing strategies for forward-thinking businesses. Empuls3 provides superior service and quality workmanship on all projects for our clients.
                      </p>
                      <p>
                          Our company was founded on the notion that we can help all businesses, whether large or small, to build and maintain a strong client base and to sustain and enhance those relationships.
                      </p>

                      <h3>
                          We know the value of your time and budget.
                      </h3>

                      <p>
                          That’s why we don’t commoditize our digital marketing solutions. Instead, we present a plan based on research and experience, but remain agile, making recommendations and updates based on data.
                      </p>

                      <p>
                          This approach allows us to work with you to achieve your goals, whether that’s a reduced cost of customer acquisition, a shortened sales cycle, better-qualified leads or increased brand awareness.
                      </p>

                      <Link to="/contact-us" className="btn btn-yellow btn-lg">lets connect</Link>
                  </div>
              </Col>
              <Col sm={12} md={12} lg={6}>
                  <AgencyImgFour/>
              </Col>
          </Row>
      </Container>

      <Container fluid={true} className="mb-5 p-0">
          <Row className="m-0">
              <Col sm={12} md={12} lg={6} className="p-0 m-0">
                  <AgencyImgFive/>
              </Col>
              <Col sm={12} md={12} lg={6} className="bg-pink p-3 m-0 d-flex justify-content-center">
                  <div className="my-auto col">
                      <h2 className="txt-yellow">
                          Why Us?
                      </h2>
                      <p className="lead txt-white">
                          We make digital bright and the human experience brighter.
                      </p>
                      <p>
                          Our mission is to provide innovative and effective integrated brand marketing solutions that help our partners realize their business goals. Our goal is to foster their growth by delivering results-oriented brand marketing strategies that improve our clients’ awareness and increases their bottom line.
                      </p>
                      <p>
                          We like to have fun, but we are serious about results. That’s why we recommend tactics that make sense, even if it means less money in our pocket. We have strong opinions, but no attitude. We know our craft, and never lose sight of what matters most: OUR relationship. Because WE only succeed when YOU succeed.
                      </p>
                      <Link to="/our-work" className="btn btn-purple btn-lg">our work</Link>
                  </div>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
          <Row>
              <Col className="text-center mb-4">
                  <h2>How We Work</h2>
                  <p className="lead">
                      A collection of creatives on a passion and results-driven mission to design, write and code custom digital marketing solutions not just for our clients, but for their clients. We’re where the right brain meets the left brain and our strategy-based services are built on real relationships, not egos.
                  </p>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={12} md={6} lg={6}>
                  <AgencyImgSix/>
                  <h3>Discover</h3>
                  <p>Our strategy team answers this question through consumer insights, ecosystem planning, and reframing problems to enable businesses to think, act and communicate more effectively.</p>
              </Col>
              <Col sm={12} md={6} lg={6}>
                  <AgencyImgSeven/>
                  <h3>Strategize</h3>
                  <p>
                      Every client is different, so we like to dig in and develop a custom digital marketing strategy that can help you overcome the unique challenges identified in the discovery phase.
                  </p>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={12} md={6} lg={6}>
                  <AgencyImgEight/>
                  <h3>
                      Create
                  </h3>
                  <p>
                      After a direction is determined in the strategy phase, we really get to work researching your competition, reviewing analytics, brainstorming features and drafting designs and copy.
                  </p>
              </Col>
              <Col sm={12} md={6} lg={6}>
                  <AgencyImgNine/>
                  <h3>Build</h3>
                  <p>
                      Our strategy team answers this question through consumer insights, ecosystem planning, and reframing problems to enable businesses to think, act and communicate more effectively.
                  </p>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col lg={12}>
                  <AgencyImgTen/>
                  <h3>
                      Measure
                  </h3>
                  <p>
                      Metrics are key to determining what’s working. And what’s not. We provide detailed weekly / monthly reports to showcase ROI. We’ll even walk you through the data so you can tell your boss how awesome you are.
                  </p>
              </Col>
          </Row>
      </Container>

  </Layout>
)

export default AgencyPage