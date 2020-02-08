import React from "react"
import { Row, Col, Container } from "react-bootstrap";

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EmailBannerThree from "../components/email/email-banner-3";
import EmailBannerOne from "../components/email/email-banner-1";
import EmailBannerTwo from "../components/email/email-banner-2";
import EmailImgOne from "../components/email/email-img-1";
import EmailImgTwo from "../components/email/email-img-2";
import EmailImgThree from "../components/email/email-img-3";
import EmailImgFour from "../components/email/email-img-4";
import ConstantContact from "../components/email/constant-contacts";
import CovertKit from "../components/email/covertkit";
import Drip from "../components/email/drip";
import MailChimp from "../components/email/mailchimp";
import SendinBlue from "../components/email/sendinblue";
import HubSpot from "../components/email/hubspot";
import SalesForce from "../components/email/salesforce";
import Marketo from "../components/email/marketo";
import Marketing from "../components/marketing-cta";

const EmailPage = () => (
  <Layout>
    <SEO title="Email" />
    <Container fluid={true} className="mb-5" >
        <Row>
            <Col sm={12} md={12} lg={6} className="mb-md-5">
                <Row>
                    <Col lg={12} className="mb-4">
                        <div className="txt-overlay">
                            <EmailBannerOne/>
                            <div className="bottom-left p-4">
                                <p className="txt-yellow mb-0">
                                    strategy. creativity. technology. analytics.
                                </p>
                                <h1 className="txt-white mb-0">
                                    EMAIL MARKETING
                                </h1>
                                <p className="txt-white mb-0">
                                    Become a valuable resource with email marketing campaigns.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <EmailBannerTwo/>
                    </Col>
                </Row>
            </Col>
            <Col sm={12} md={12} lg={6} >
                <EmailBannerThree/>
            </Col>
        </Row>
    </Container>

      <Container className="mb-5">
          <Row>
              <Col lg={12}>
                  <h2>Email Marketing that Works</h2>
                  <p className="lead">
                      Wake Up to Better Open Rate, Click Through, and App Rates.
                  </p>
                  <p>
                      Email marketing is a powerful method of connecting with valuable customers, clients, prospects, and others interested in your business. When creating your email marketing strategy, we consider the audiences being reached, the content that each audience needs and when they need it. We think about whether the content should be packaged into a multi-email campaign, whether any emails should be automated and how your emails fit into your marketing strategy as a whole. The result is an email plan that works with your other marketing initiatives to build a valuable relationship with your audience.
                  </p>
                  <h3>
                      Our Email Marketing Programs Include:
                  </h3>
              </Col>
          </Row>
      </Container>

      <Container fluid={true} className="mb-5">
          <Row>
              <Col sm={12} md={12} lg={6} className="bg-pink p-5 d-flex justify-content-center">
                  <div className="my-auto col">
                      <h4>Strategy Development</h4>
                      <p className="txt-white">
                          Our data-driven approach extends to segmentation and content strategy, messaging frequency, and email cadence. We work with our clients to align their email campaigns to customer personas and business goals and develop a roadmap of activities designed to drive results. By leveraging customer data, we help brands create the most robust customer profiles possible and enable them to constantly get smarter about consumer behaviors to improve their campaigns.
                      </p>
                      <p className="txt-white">
                          Additionally, our team develops nurture campaigns that focus on customers’ individual experiences, rather than simply where they fall in the sales funnel. We can then use this information across other marketing channels to maximize return on paid media investments and create a seamless experience throughout a customer’s entire journey.
                      </p>
                  </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="p-0">
                  <EmailImgOne/>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
          <Row className="mb-5">
              <Col sm={12} md={12} lg={6}>
                <EmailImgTwo/>
                    <h4>
                        Creative Strategy
                    </h4>
                    <p>
                        We develop content and creative that will best resonate with a brand’s specific audience and drive results – whether the goal is transactions, engagement, or other KPIs.
                    </p>
                  <p>
                      We are able to optimize the product, message, and content recommendations. This may include using purchase history and browsing trends to suggest additional products or showing articles and web pages based on customer interests.
                  </p>
              </Col>
              <Col sm={12} md={12} lg={6}>
                <EmailImgThree/>
                <h4>
                    Email Platform Selection and Implementation
                </h4>
                  <p>
                      Using a quantified framework, we are able to perform a platform-agnostic assessment and provide platform recommendations based on our clients’ business goals and email program maturity. Once we’ve identified the best platform for a client’s specific needs, we design a solution for platform implementation. Our process provides for seamless integration with existing technology (such as customer relationship management platforms, web analytics tools, and more) to assess relevant content and define events that would trigger emails optimized to the right customers.
                  </p>
              </Col>
          </Row>
          <Row className="mb-5">
              <Col sm={12} md={12} lg={12}>
                  <EmailImgFour/>
                  <h4>Campaign Execution, Measurement, and Optimization</h4>
                  <p>
                      Our team of email experts is fluent in a variety of email services platforms and can build and execute campaigns against a strategic roadmap. When taking on program execution, we first do a full audit of a brand’s existing email program. These findings influence process optimizations for building emails, determining audience segments and content, and reporting campaign and segment performance to ensure our client is set up for success from a strategic and tactical standpoint.
                  </p>
                  <p>
                      Following a program’s launch, we leverage a solid framework across the entire customer journey to measure its performance. This feedback loop enables us to continually adjust and optimize content and strategy to increase conversions and meet our client’s goals.
                  </p>
              </Col>
          </Row>
      </Container>

      <div className="p-5 bg-purple mb-5">
          <Container>
              <Row className="mb-4">
                  <Col sm={6} md={6} lg={3} className="d-flex justify-content-center mb-md-5">
                      <div className="my-auto col text-center">
                          <a href="https://www.constantcontact.com/index.jsp" target="_blank" rel="noopener noreferrer">
                              <ConstantContact/>
                          </a>
                      </div>
                  </Col>
                  <Col sm={6} md={6} lg={3} className="d-flex justify-content-center mb-md-5">
                      <div className="my-auto col text-center">
                          <a href="https://convertkit.com/" target="_blank" rel="noopener noreferrer">
                              <CovertKit/>
                          </a>
                      </div>
                  </Col>
                  <Col sm={6} md={6} lg={3} className="d-flex justify-content-center mb-md-5">
                     <div className="my-auto col text-center">
                         <a href="https://www.drip.com/" target="_blank" rel="noopener noreferrer">
                             <Drip/>
                         </a>
                     </div>
                  </Col>
                  <Col sm={6} md={6} lg={3} className="d-flex justify-content-center mb-md-5">
                      <div className="my-auto col">
                          <a href="https://mailchimp.com/" target="_blank" rel="noopener noreferrer">
                              <MailChimp/>
                          </a>
                      </div>
                  </Col>
              </Row>
              <Row className="mb-4">
                  <Col sm={6} md={6} lg={3} className="d-flex justify-content-center mb-md-5">
                      <div className="my-auto col">
                          <a href="https://www.sendinblue.com/" target="_blank" rel="noopener noreferrer">
                              <SendinBlue/>
                          </a>
                      </div>
                  </Col>
                  <Col sm={6} md={6} lg={3} className="d-flex justify-content-center mb-md-5">
                      <div className="my-auto col">
                          <a href="https://www.hubspot.com/" target="_blank" rel="noopener noreferrer">
                              <HubSpot/>
                          </a>
                      </div>
                  </Col>
                  <Col sm={6} md={6} lg={3} className="d-flex justify-content-center mb-md-5">
                      <div className="my-auto col">
                          <a href="https://www.salesforce.com/" target="_blank" rel="noopener noreferrer">
                              <SalesForce/>
                          </a>
                      </div>
                  </Col>
                  <Col sm={6} md={6} lg={3} className="d-flex justify-content-center">
                      <div className="my-auto col">
                          <a href="https://www.marketo.com/" target="_blank" rel="noopener noreferrer">
                              <Marketo/>
                          </a>
                      </div>
                  </Col>
              </Row>
          </Container>
      </div>

      <Container className="mb-5">
          <Row className="mb-5">
              <Col lg={12} className="text-center">
                  <h2>Learn More About Empuls3’s
                      Email Marketing Services</h2>
                  <p className="lead">
                      If you’d like to speak to someone at empuls3 and learn more <br/>about our Email Marketing services, please click the button below.

                  </p>
                  <Link to="contact-us" className="btn btn-yellow btn-lg">get a free quote</Link>
              </Col>
          </Row>
      </Container>

      <Marketing/>

  </Layout>
)

export default EmailPage