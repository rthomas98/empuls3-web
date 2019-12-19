import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Development from "../components/development-cta";
import WordpressBanner from "../components/wordpress/wordpress-banner";
import WordpressImgOne from "../components/wordpress/wordpress-img-1";
import WordpressImgTwo from "../components/wordpress/wordpress-img-2";
import WordpressImgThree from "../components/wordpress/wordpress-img-3";
import {Link} from "gatsby";
import WordpressImgFour from "../components/wordpress/wordpress-img-4";
import WordpressImgFive from "../components/wordpress/wordpress-img-5";
import WordpressImgSix from "../components/wordpress/wordpress-img-6";

const WordPressPage = () => (
  <Layout>
    <SEO title="WordPress" />

    <Container fluid={true} className="mb-5">
        <Row>
            <Col lg={12}>
                <div className="txt-overlay">
                    <WordpressBanner/>
                    <div className="centered text-center">
                        <p className="lead m-0 txt-yellow">
                            strategy. creativity. technology. analytics.
                        </p>
                        <h1 className="txt-white">
                            WORDPRESS DEVELOPMENT
                        </h1>

                    </div>
                </div>
            </Col>
        </Row>
    </Container>

      <Container className="mb-5">
          <Row className="mb-5">
              <Col lg={12} className="text-center">
                  <h2>Full Stack WordPress Development Company</h2>
                  <p className="lead">
                      Empuls3 is with you from market research and analytics to user analysis and conversion rate optimization, we provide a full range of digital strategy services designed to enhance your website marketing efforts.
                  </p>
              </Col>
          </Row>
          <Row className="mb-3">
              <Col sm={12} md={12} lg={6} className="text-center p-0">
                <WordpressImgOne/>
              </Col>
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                    <div className="my-auto col">
                        <h3>We Build WordPress Projects That Scale</h3>
                        <p className="lead">
                            We’re digital solutions partners, with experience building technically complex WordPress instances at scale.
                        </p>
                        <p>
                            Looking for a powerful WordPress development company to launch your dream project? Then you are in the right place. No matter whether you need a simple website or a heavily customized one, our team of experts who have collaborated with startups, midsize enterprises to multi-million businesses, willfully optimize WordPress for your business.
                        </p>
                    </div>
              </Col>
          </Row>
          <Row className="mb-3">
              <Col sm={12} md={12} lg={6} className="text-center p-0">
                  <WordpressImgTwo/>
              </Col>
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                      <p>
                          WordPress has emerged as a powerful web publishing platform as it has changed the way the web industry works. Staying in tune with the market trends, we create bespoke WordPress websites based on client requirements.
                      </p>
                      <p>
                          Keeping your company’s best interests in mind, the team of professionals in our company will follow all the latest standards of WordPress website development to cater to the best services for your business.
                      </p>
                  </div>
              </Col>
          </Row>
      </Container>

      <Container fluid={true} className="mb-5">
          <Row className="mb-3">
              <Col sm={12} md={12} lg={6} className="text-center p-0">
                  <WordpressImgThree/>
              </Col>
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                      <h3>
                          Discover the best Custom WordPress services for you
                      </h3>
                      <p className="lead">
                          We deliver advanced solutions with WordPress!
                      </p>
                      <p>
                          If you are lacking in direction or just need some advice on a difficult problem, someone at Empuls3 will be able to help. We have broad-ranging WordPress expertise and can help you with issues that include infrastructure, architecture, development workflow, best practices, accessibility, performance and security, and the WordPress REST API.
                      </p>
                      <Link to="contact-us" className="btn btn-pink btn-lg">get a free quote</Link>
                  </div>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
          <Row className="mb-3">
              <Col sm={12} md={12} lg={6}>
                  <WordpressImgFour/>
                  <h4>Design & Development</h4>
                  <p>
                      We have professionals working in all areas of WordPress design and development. This allows us to develop beautiful and fast web solutions for our clients.
                  </p>
                  <p>
                      You can update the content easily with our custom backend interfaces.
                  </p>
              </Col>
              <Col sm={12} md={12} lg={6}>
                  <WordpressImgFive/>
                  <h4>Theme Customization</h4>
                  <p>
                      This service is for clients who just started to work with WordPress as well as to those who already have WordPress websites.
                  </p>
                  <p>
                      Our developers will help you to select a theme and customize it to improve the present functionality of clients’ websites.
                  </p>
              </Col>
          </Row>
          <Row className="mb-5">
              <Col sm={12} md={12} lg={6}>
                  <WordpressImgSix/>
                  <h4>Design & Development</h4>
                  <p>
                      We have professionals working in all areas of WordPress design and development. This allows us to develop beautiful and fast web solutions for our clients.
                  </p>
                  <p>
                      You can update the content easily with our custom backend interfaces.
                  </p>
              </Col>
              <Col sm={12} md={12} lg={6}>
                  <WordpressImgFive/>
                  <h4>Ongoing Support</h4>
                  <p>
                      We build long-lasting relationships with our clients that continue long after an initial project is finished. That’s why we provide support packages according to our clients’ requirements.
                  </p>
                  <p>
                      Your website will be hosted on blazing fast servers with SSL, Daily backups, Daily security checks, and premium caching security plugins, and weekly reports.
                  </p>
              </Col>
          </Row>
          <Row className="mb-5">
              <Col lg={12} className="text-center">
                  <h2>Why Go the Custom WordPress Theme Route?</h2>
                  <p className="lead">
                      You can find many pre-built themes on the market. These may appear to make site development and customization faster; however, you will usually find that’s not really the case.
                  </p>
                  <Link to="contact-us" className="btn btn-yellow btn-lg">get a free quote</Link>
              </Col>
          </Row>
      </Container>

      <Development/>

  </Layout>
)

export default WordPressPage