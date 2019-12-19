import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Row, Col } from "react-bootstrap"
import WebBanner from "../components/development/web-banner";
import WebImgOne from "../components/development/web-img-1";
import WebImgTwo from "../components/development/web-img-2";
import {Link} from "gatsby";
import Development from "../components/development-cta";

const DevelopmentPage = () => (
  <Layout>
    <SEO title="Search Engine" />

    <div className="bg-purple-half mt-3 pt-5">
        <Container className="mb-5">
            <Row>
                <Col lg={12}>
                   <div className="txt-overlay text-center">
                       <WebBanner/>
                       <div className="centered">
                            <p className="lead txt-pink">
                                strategy. creativity. technology. analytics.
                            </p>
                           <h1>WEB DEVELOPMENT</h1>
                           <p className="lead">
                               Empuls3 is amongst the top web development agencies focused on bringing
                               value to your business by creating intuitive user-friendly websites.
                           </p>
                       </div>
                   </div>
                </Col>
            </Row>
        </Container>
    </div>

      <Container className="mb-5">
          <Row className="mb-3">
              <Col lg={12} className="text-center">
                  <h2>Web Expertise to Rely On</h2>
                  <p className="lead">
                      With long-standing experience across the full software development lifecycle, Empuls3 serves as a full stack vendor undertaking end-to-end custom web application development projects for entrenched market leaders and emerging businesses with technology at their core.
                  </p>
              </Col>
          </Row>
          <Row className="mb-5">
              <Col sm={12} md={12} lg={6}>
                  <WebImgOne/>
              </Col>
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center mb-5">
                 <div className="my-auto col">
                     <p>
                         Build for the mobile-centric web or transform your business to fit in with the modern cross-platform reality with Empuls3. Drawing upon extensive UI/UX and front-end expertise, our web app developers deliver rich user experiences:
                     </p>
                     <p>
                         Functional, convenient and visually compelling HTML5/JavaScript applications that work natively great on mobile and tablet devices.
                     </p>

                     <p>
                         Modernization and mobilization of existing web interfaces, integration layers for mobilization of legacy web systems.
                     </p>
                 </div>
              </Col>
          </Row>
          <Row className="mb-3">
              <Col lg={12} className="text-center">
                  <h2>Build the right Solutions with the Right technology</h2>
                  <p>
                      Leveraging new approaches to web development including progressive web apps, we bring front-end, back-end, and architecture ability together to deliver on your business needs and maximize delivery speed.
                  </p>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={12} md={12} lg={6} className="mb-3 mb-md-3 mb-lg-0">
                  <div className="bg-gray p-4 rounded d-flex justify-content-center">
                      <div className="my-auto col text-center">
                          <h3 className="txt-pink">Agile methodologies</h3>
                          <p>
                              The Empuls3 manifesto empowers our software development process to be iterative, collaborative, and responsive, so our team can reduce inefficiencies and build products as fast as possible.
                          </p>
                      </div>
                  </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="mb-3 mb-md-3 mb-lg-0">
                  <div className="bg-gray p-4 rounded d-flex justify-content-center">
                      <div className="my-auto col text-center">
                          <h3 className="txt-pink">Commitment to compliance</h3>
                          <p>
                              Our team strictly adheres to domestic and international legal regulations and ensures that only secure code is used in your software applications.
                          </p>
                      </div>
                  </div>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={12} md={12} lg={6} className="mb-3 mb-md-3 mb-lg-0">
                  <div className="bg-gray p-4 rounded d-flex justify-content-center">
                      <div className="my-auto col text-center">
                          <h3 className="txt-pink">Code quality</h3>
                          <p>
                              The Empuls3 team performs a code analysis and continuous code quality inspection to reduce the technical debt and mitigate any possible risks.
                          </p>
                      </div>
                  </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="mb-3 mb-md-3 mb-lg-0">
                  <div className="bg-gray p-4 rounded d-flex justify-content-center">
                      <div className="my-auto col text-center">
                          <h3 className="txt-pink">Dedicated teams</h3>
                          <p>
                              Our teams possess a do-or-die mentality and a forward-looking approach to build a solution that will help you thrive in the future.
                          </p>
                      </div>
                  </div>
              </Col>
          </Row>
      </Container>

      <Container fluid={true} className="p-0">
          <Row className="mb-4">
              <Col sm={12} md={12} lg={6} className="mb-3 mb-md-3 mb-lg-0 p-0">
                    <WebImgTwo/>
              </Col>
              <Col sm={12} md={12} lg={6} className="mb-3 mb-md-3 mb-lg-0 bg-pink d-flex justify-content-center">
                      <div className="my-auto col">
                          <h2>We build websites of different kinds</h2>
                          <p>
                              Business management. CRM systems, project management, and time tracking software, human resources management systems, business analytic apps, and paper flow automation tools.
                          </p>
                          <p>
                              Real estate. Tools for homeowners, buyers, and tenants, as well as systems for agents and brokers. MLS data integration, “For Sale” printed ads, marketing tools.
                          </p>
                          <p>
                              Education. Learning and testing process automation, personal assessment, student database, interactive textbooks.
                          </p>
                          <p>
                              Healthcare. HIPAA-compliant systems for an ambulance, home care, skilled nursing facilities, assisted living facilities and plastic surgery clinics.
                          </p>
                          <p>
                              E-commerce. An online marketplace, auctions, and group buying websites. Payment gateway integration, billing systems, multi-currency transactions, recurring payments, accounting and reporting tools.
                          </p>
                          <p>
                              Marketing and advertising. Marketing automation tools, classified ads, affiliate and referral systems.
                          </p>
                          <p>
                              And many other areas, like thematic travel agency, fashion studio or weather forecast service, etc.
                          </p>
                      </div>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
          <Row className="mb-3">
              <Col lg={12} className="text-center">
                  <h2>Frameworks And Platforms</h2>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={6} md={6} lg={3} className="mb-3 mb-md-3 mb-lg-0">
                  <div className="bg-gray p-4 rounded d-flex justify-content-center">
                      <div className="my-auto col text-center">
                          <h5 className="txt-pink">ASP.Net</h5>
                          <p>
                              Build scalable, secure & robust applications using the rich toolbox in Visual Studio.
                          </p>
                      </div>
                  </div>
              </Col>
              <Col sm={6} md={6} lg={3} className="mb-3 mb-md-3 mb-lg-0">
                  <div className="bg-gray p-4 rounded d-flex justify-content-center">
                      <div className="my-auto col text-center">
                          <h5 className="txt-pink">PHP</h5>
                          <p>
                              We create custom web solutions using PHP, support standard & custom CMS.
                          </p>
                      </div>
                  </div>
              </Col>
              <Col sm={6} md={6} lg={3} className="mb-3 mb-md-3 mb-lg-0">
                  <div className="bg-gray p-4 rounded d-flex justify-content-center">
                      <div className="my-auto col text-center">
                          <h5 className="txt-pink">Rails</h5>
                          <p>
                              We create custom web solutions using PHP, support standard & custom CMS.
                          </p>
                      </div>
                  </div>
              </Col>
              <Col sm={6} md={6} lg={3} className="mb-3 mb-md-3 mb-lg-0">
                  <div className="bg-gray p-4 rounded d-flex justify-content-center">
                      <div className="my-auto col text-center">
                          <h5 className="txt-pink">HTML5</h5>
                          <p>
                              Make your website fully compatible with the next generation web standards.
                          </p>
                      </div>
                  </div>
              </Col>
          </Row>
          <Row className="mb-5">
              <Col sm={6} md={6} lg={3} className="mb-3 mb-md-3 mb-lg-0">
                  <div className="bg-gray p-4 rounded d-flex justify-content-center">
                      <div className="my-auto col text-center">
                          <h5 className="txt-pink">Shopify</h5>
                          <p>
                              Easy and quick to get started. Create an online store or add eCommerce to an existing site.
                          </p>
                      </div>
                  </div>
              </Col>
              <Col sm={6} md={6} lg={3} className="mb-3 mb-md-3 mb-lg-0">
                  <div className="bg-gray p-4 rounded d-flex justify-content-center">
                      <div className="my-auto col text-center">
                          <h5 className="txt-pink">Magento</h5>
                          <p>
                              Offers flexible solutions that address a wide range of business needs and budgets.
                          </p>
                      </div>
                  </div>
              </Col>
              <Col sm={6} md={6} lg={3} className="mb-3 mb-md-3 mb-lg-0">
                  <div className="bg-gray p-4 rounded d-flex justify-content-center">
                      <div className="my-auto col text-center">
                          <h5 className="txt-pink">WordPress</h5>
                          <p>
                              You can manage blogs & products. One of the top open-source PHP CMS options.
                          </p>
                      </div>
                  </div>
              </Col>
              <Col sm={6} md={6} lg={3} className="mb-3 mb-md-3 mb-lg-0">
                  <div className="bg-gray p-4 rounded d-flex justify-content-center">
                      <div className="my-auto col text-center">
                          <h5 className="txt-pink">Node.js</h5>
                          <p>
                              Google JavaScript engine. Translation: fast and scalable web apps in a result.
                          </p>
                      </div>
                  </div>
              </Col>
          </Row>
          <Row className="mb-5">
              <Col lg={12} className="text-center">
                  <h2>Tell Us Your Vision</h2>
                  <p className="lead">
                      Driven by passion, our dedicated team is all about helping you change the game in your industry.
                  </p>
                  <Link to="contact-us" className="btn btn-yellow btn-lg">get a free quote</Link>
              </Col>
          </Row>
      </Container>

      <Development/>

  </Layout>
)

export default DevelopmentPage