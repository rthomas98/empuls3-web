import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResponsiveImgThree from "../components/responsive/responsive-img-3";
import ResponsiveBannerImgTwo from "../components/responsive/responsive-banner-2";
import ResponsiveBannerImg from "../components/responsive/responsive-banner";
import ResponsiveBannerImgFour from "../components/responsive/responsive-img-4";
import ResponsiveImgFive from "../components/responsive/responsive-img-5";
import {Link} from "gatsby";
import Design from "../components/design-cta";

const ResponsivePage = () => (
  <Layout>
    <SEO title="Responsive" />

    <Container fluid={true} className="mt-3 mb-5">
        <Row>
            <Col sm={12} md={12} lg={6}>
               <div className="txt-overlay">
                   <ResponsiveBannerImg/>
                   <div className="bottom-left p-3">
                       <p className="lead txt-yellow m-0">
                           strategy. creativity. technology. analytics.
                       </p>
                       <h1 className="m-0 txt-white">
                           Brand Identity and Strategy
                       </h1>
                       <p className="txt-white">
                           Whether you’re just starting out or evolving your brand, Empuls3 will help you grow.
                       </p>
                   </div>
               </div>
            </Col>
            <Col sm={12} md={12} lg={6}>
                <ResponsiveBannerImgTwo/>
            </Col>
        </Row>
    </Container>

      <Container className="mb-5">
          <Row className="mb-5">
              <Col sm={12} md={12} lg={6}>
                    <ResponsiveImgThree/>
              </Col>
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                        <h2>
                            Responsive Web Design <br/>as a Necessity
                        </h2>
                      <p>
                          As mobile continues to increase, a B2B company cannot ignore their mobile visitors. Responsive design ensures that your firm is projecting its best image on all devices. Whether a prospective client is using a desktop, laptop, tablet or smartphone, it’s important that a B2B website design responds to that specific device.
                      </p>
                      <h3>What is responsive web design?</h3>
                      <p>
                          When a website is designed and developed, the display qualities are rendered to a full-screen monitor of a PC, which when viewed on a screen of a different size or resolution needs readjustment by the user. To reduce the consequences of losing visitors or prospective clients, web designers and developers have devised a method by using the CSS that will automatically adjust webpage layouts for optimal content display for any screen size or resolution.
                      </p>

                  </div>
              </Col>
          </Row>
          <Row className="mb-5">
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                      <h2>
                          Responsive design for better<br/>
                          business performance
                      </h2>
                      <p>
                          Experts predict mobile browsing will overtake desktop browsing over the next few years. Online businesses are now looking forward to adapting new strategies to render users a feature-rich experience using a responsive design. And since responsive design makes a website compatible with devices of almost all sizes, enterprises can attract customers without any technical hindrances.
                      </p>

                      <Link to="/mobile-development" className="btn btn-pink btn-lg">view our mobile services</Link>

                  </div>
              </Col>
              <Col sm={12} md={12} lg={6}>
                  <ResponsiveBannerImgFour/>
              </Col>
          </Row>
          <Row className="mb-5">
              <Col sm={12} md={12} lg={6}>
                <ResponsiveImgFive/>
              </Col>
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                      <h2>
                          Responsive design for SEO
                      </h2>
                      <p>
                          One single site to maintain means that SEO analysts have to build a single set of links, avoiding extra server load, site speed and maintenance issues. Since search engines do not optimize for search based on devices, the onus is on the SEO to redirect customers to the site to meet their device needs.
                      </p>

                      <Link to="/search-engine-optimization" className="btn btn-pink btn-lg">view our seo services</Link>

                  </div>
              </Col>
          </Row>
          <Row className="mb-5">
              <Col lg={12} className="d-flex justify-content-center">
                  <div className="my-auto col">
                      <h2>
                          Create a Seamless User Experience with empuls3
                      </h2>
                      <p>
                          Responsive web design is a vital expense you can’t skimp on. It’s a single build that can last your website’s lifetime if implemented properly. Empuls3’s responsive web design services aren’t just about changing how the website appears across devices, but also making the website mobile-friendly in all aspects so that it will load and run perfectly on mobile.
                      </p>

                      <p>
                          One of the most important changes is on the website’s CMS. Responsive design projects aren’t the same for every website and the extent of the necessary changes affects the cost. The cost may go up or down depending on the website’s structure, the extent of the necessary design changes, and the website’s graphical elements.
                      </p>

                  </div>
              </Col>
          </Row>

          <Row className="mb-5">
              <Col lg={12} className="text-center">
                  <h2>We offer consultancy</h2>
                  <p className="lead">
                      We don’t offer just technical solutions; we also offer consultancy from concept to final product. Our web solutions are specially developed to attract visitors and guarantee the success of your online business.
                  </p>
                  <Link to="contact-us" className="btn btn-yellow btn-lg">get a free quote</Link>
              </Col>
          </Row>
      </Container>

      <Design/>

  </Layout>
)

export default ResponsivePage