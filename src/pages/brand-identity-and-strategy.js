import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import  { Container, Row, Col } from "react-bootstrap"
import BrandBannerImg from "../components/brand/brand-banner";
import BrandImgTwo from "../components/brand/brand-img-2";
import BrandImgThree from "../components/brand/brand-img-3";
import BrandImgFour from "../components/brand/brand-img-4";
import Design from "../components/design-cta";

const BrandPage = () => (
  <Layout>
    <SEO title="Branding Agency in Frisco" />

    <Container fluid={true} className="mb-5 mt-3">
        <Row classname="">
            <Col sm={6} md={12} lg={6} className="p-0">
                <BrandBannerImg/>
            </Col>
            <Col sm={6} md={12} lg={6} className="bg-yellow d-flex justify-content-center p-5">
                <div className="my-auto col">
                    <p className="lead txt-pink m-0">
                        strategy. creativity. technology. analytics.
                    </p>
                    <h1 className="m-0">
                        Brand Identity and Strategy
                    </h1>
                    <p>
                        Whether you’re just starting out or evolving your brand, Empuls3 will help you grow.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>

      <Container className="mb-5">
          <Row className="mb-4">
              <Col sm={6} md={12} lg={6}>
                  <BrandImgTwo/>
              </Col>
              <Col sm={6} md={12} lg={6} className="d-flex justify-content-center">
                    <div className="my-auto col">
                        <h2>We build brands <br/>that cannot be ignored.</h2>
                        <p className="lead">
                            Our core strategic engagements <br/>are designed to deliver results
                        </p>
                        <p>
                            Empuls3 helps to breathe life into your company story, developing branding that advances your message and forms a distinct image. While each phase moves your brand somewhere new and exciting, we continuously infuse direction from what we’ve learned about where the brand has come from, where you’d like the brand to go, and how the new brand image will impact consumer behavior. At Empuls3, we’ll help you take the first step or conquer the latest hurdle.
                        </p>
                        <Link to="contact-us" className="btn btn-purple">let us help</Link>
                    </div>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={6} md={12} lg={6} className="d-flex justify-content-center bg-pink p-5">
                  <div className="my-auto col">
                      <h2>Brand Strategy</h2>
                     <p>
                         Every business is a brand, especially a fast-growing, one-of-a-kind company. Your success is rooted in a strong brand that resonates with your clients, customers, and audiences. Simply put, building your brand builds your business.
                     </p>
                      <p>
                          You need a brand strategy that does that. And we’re experts at creating one for you.
                      </p>
                      <p>
                          We’ll consider all the information we learned in our Discovery Session and Brand Audit to develop a strong foundation for your brand—one that grows market performance while building long-term equity.
                      </p>
                      <p>
                          Your value proposition is our first stop. Does it offer value to your customers? Positioning is the heart of your business strategy. It makes you unique in the marketplace.
                      </p>
                  </div>
              </Col>
              <Col sm={6} md={12} lg={6} className="p-0">
                  <BrandImgThree/>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
        <Row className="mb-4">
            <Col lg={12} >
                <h2>The power of brand experience.</h2>
                <p>
                    A strategy is hard to package in a neat little box, but we believe it’s one of the most essential components of great branding. It tells us what brands value, how they behave, how audiences view them, and much more.
                </p>
                <p>
                    Our strategy team helps to polish the foundation of both novice and established brands, creating opportunities for great storytelling and communications for our clients.
                </p>
            </Col>
        </Row>
          <Row className="mb-5">
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                    <div className="my-auto col">
                        <h2>Our Process</h2>
                        <p>
                            Here at Empuls3, we believe that every logo, color, font, and visual element should tell a story and represent who you are. We deliver a brand experience that far exceeds any dream or aspiration you have by blending our passion for art and science behind pixel storytelling. We utilize a proprietary development process that systematically walks our clients through every step of the way to deliver brands, websites, and marketing content that far exceed expectations. Empuls3 is known for having some of the most talented artists in Dallas on our team. In an ever-changing industry, our team is adept at remaining engaged in development trends and tactics. Above all else, we believe in embodying unconstrained creativity!
                        </p>
                    </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                      <Row className="mb-3">
                          <Col sm={12} md={6} lg={6}>
                              <div className="rounded-pill bg-yellow p-3 text-center mb-3 mb-lg-0">
                                    discovery
                              </div>
                          </Col>
                          <Col sm={12} md={6} lg={6}>
                              <div className="rounded-pill bg-pink p-3 text-center mb-3 mb-lg-0">
                                  strategy
                              </div>
                          </Col>
                      </Row>
                      <Row className="mb-3">
                          <Col sm={12} md={6} lg={6}>
                              <div className="rounded-pill bg-purple p-3 text-center mb-3 mb-lg-0">
                                  design
                              </div>
                          </Col>
                          <Col sm={12} md={6} lg={6}>
                              <div className="rounded-pill bg-yellow p-3 text-center mb-3 mb-lg-0">
                                  development
                              </div>
                          </Col>
                      </Row>
                      <Row className="mb-3">
                          <Col sm={12} md={6} lg={6}>
                              <div className="rounded-pill bg-pink p-3 text-center mb-3 mb-lg-0">
                                  execution
                              </div>
                          </Col>
                          <Col sm={12} md={6} lg={6}>
                              <div className="rounded-pill bg-purple p-3 text-center mb-3 mb-lg-0">
                                  management
                              </div>
                          </Col>
                      </Row>
                  </div>
              </Col>
          </Row>

          <Row className="mb-5">
              <Col lg={12} className="text-center">
                  <h2>Interested in learning more?</h2>
                  <p className="lead">
                      Tell your story and reach your customers with high quality content.<br/>
                      What flavor is your brand? Branding extends beyond logo design.
                  </p>
                  <Link to="contact-us" className="btn btn-yellow btn-lg">get a free quote</Link>
              </Col>
          </Row>
      </Container>

      <Design/>

  </Layout>
)

export default BrandPage