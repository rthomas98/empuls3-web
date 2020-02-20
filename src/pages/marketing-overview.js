import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MarketingBanner from "../components/marketing/marketing-banner";
import MarketingImgOne from "../components/marketing/marketing-img-1";
import {Link} from "gatsby";
import MarketingImgTwo from "../components/marketing/marketing-img-2";
import MarketingImgThree from "../components/marketing/marketing-img-3";
import MarketingImgFour from "../components/marketing/marketing-img-4";
import Marketing from "../components/marketing-cta";

const MarketingPage = () => (
  <Layout>
    <SEO title="Full-Services Brand Marketing in Frisco" />

    <div className="bg-pink-half pt-5 mb-5">
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="txt-overlay">
                        <MarketingBanner/>
                        <div className="centered text-center">
                                <p className="lead m-0 txt-yellow">
                                    strategy. creativity. technology. analytics.
                                </p>
                            <h1 className="txt-white mb-0">
                                WE DON’T JUST MAKE PRETTY PICTURES, WE BUILD BRANDS.
                            </h1>
                            <p className="txt-white mb-0">
                                We develop online marketing strategies that deliver business results.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>

      <Container className="mb-5">
          <Row>
              <Col sm={12} md={12} lg={6} className="mb-md-5">
                <MarketingImgOne/>
              </Col>
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                      <h2>Bringing new customers to your brand experience</h2>
                      <p>
                          The best websites, mobile apps, and campaigns are often designed to delight customers, but your business needs to attract users in the first place. Empuls3 combines strategic thinking and performance marketing to generate an integrated experience that exceeds your users’ expectations and your business goals.
                      </p>
                      <p>
                          We do this by combining data and insight into your business needs while understanding and advocating for the best customer experience possible, whether on-site or off. We meet with clients each quarter to review performance and present new ideas. We consistently test experiences to maximize performance—from the channel, messaging, and creative to behavior, timing, and cadences.
                      </p>
                  </div>
              </Col>
          </Row>
      </Container>

      <Container fluid={true} className="mb-5">
          <Row>
              <Col sm={12} md={12} lg={6} className="bg-purple p-5 d-flex justify-content-center">
                  <div className="my-auto col">
                      <h2>Social Ads</h2>
                      <p className="lead txt-white">
                          Investing in social platforms to reach a highly targeted audience with your content to advance your business goals.
                      </p>
                      <p className="txt-white">
                          More businesses are using social ads to reach potential customers, making the platforms more competitive. In an environment that is increasingly pay-to-play, you need expert setup. We create strategies that ensure you are targeting the right audience, increasing your brand awareness, re-engaging your potential customers, and driving sales.
                      </p>
                      <Link to="contact-us" className="btn btn-pink">find out more</Link>

                  </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="p-0">
                    <MarketingImgTwo/>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
          <Row className="mb-4">
              <Col lg={12} className="text-center">
                  <h2>Test, Improve and Optimize</h2>
                  <p className="lead">
                      Our integrated teams go beyond status updates and regular check-ins. <br/>They work together to align efforts and achieve your goals.
                  </p>
              </Col>
          </Row>
          <Row className="mb-5">
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                      <p>
                          Lead-focused content marketing is a journey, not a destination. We work throughout the course of the program to get the most out of your efforts through constant improvements. We A/B test subject lines, ad copy, and form design. We use analytics and reporting to identify the channels on which to focus our efforts, and we integrate with CRM software to track performance from the first form completions all the way to closed business to provide you end-to-end visibility into the sales funnel.
                      </p>
                      <p>
                          With full analytics integration, you can see how prospects become leads and which specific efforts are helping them along their buyer journeys. Our analysts regularly report to your stakeholders to discuss results, demonstrate ROI, make suggestions for performance improvement, and confirm the upcoming content distribution strategy.
                      </p>
                  </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="p-0">
                  <MarketingImgThree/>
              </Col>
          </Row>
          <Row>
              <Col lg={12} className="p-md-0">
                  <div className="txt-overlay">
                      <MarketingImgFour/>
                      <div className="centered text-center p-5 col">
                          <h2 className="txt-yellow">
                              Let’s Start Growing Your Inbound Leads
                          </h2>
                          <p className="txt-white">
                              From goal definition to content development through a continually improving distribution strategy, Empuls3 builds and optimizes a custom digital lead generation program that grows your business. Get in touch with our team today and tell us what business goals you’d like to achieve.
                          </p>
                          <Link to="contact-us" className="btn btn-purple btn-lg">talk to a digital marketing expert</Link>
                      </div>
                  </div>
              </Col>
          </Row>
      </Container>

      <Marketing/>

  </Layout>
)

export default MarketingPage