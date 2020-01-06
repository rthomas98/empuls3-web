import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Marketing from "../components/marketing-cta";
import AnalyticsBannerImgOne from "../components/analytics/analytics-banner-1";
import AnalyticsBannerImgTwo from "../components/analytics/analytics.banner-2";
import AnalyticsImgOne from "../components/analytics/analytics-img-1";
import AnalyticsImgTwo from "../components/analytics/analytics-img-2";
import AnalyticsImgThree from "../components/analytics/analytics-img-3";

const AnalyticsPage = () => (
  <Layout>
    <SEO title="Analytics And Conversations" />

    <Container fluid={true} className="mb-5">
        <Row>
            <Col sm={12} md={12} lg={6}>
               <div className="txt-overlay">
                   <AnalyticsBannerImgOne/>
                   <div className="bottom-left p-4">
                       <p className="txt-yellow mb-0">
                           strategy. creativity. technology. analytics.
                       </p>
                       <h1 className="txt-white mb-0">
                           MARKETING BY THE NUMBERS
                       </h1>
                       <p className="txt-white mb-0">
                           We’re your partner, and that means we only succeed when you succeed.
                       </p>
                   </div>
               </div>
            </Col>
            <Col sm={12} md={12} lg={6}>
                <AnalyticsBannerImgTwo/>
            </Col>
        </Row>
    </Container>

      <Container className="mb-5">
          <Row className="mb-5">
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                      <h2>
                          Analytics and Research
                      </h2>
                      <p className="lead">
                          Growing online requires a fully-connected mindset, strategy, and ecosystem.
                      </p>
                      <p>
                          Who are your website visitors, and where are they coming from? What information are they seeking, and what makes them take action on your site? These are the types of questions that we explore with web analytics- the analysis of the data surrounding your website traffic. The answers we uncover inform a host of marketing decisions, from which marketing channels to focus on to what kind of content to produce. Delivered to you in regular reports, they can also help you make data-driven business decisions concerning the markets you serve, the products you offer, the segments you focus your energy on and more. At the end of the day, this all leads to a healthier bottom line for your business.
                      </p>

                      <h3>CRO</h3>

                      <p>
                          Conversion Rate Optimization (CRO) services allow you to tweak on-site elements to encourage more purchases, form submissions, and other website objectives. Our professional strategies are easy-to-implement and can quickly improve your website’s conversion rate.
                      </p>

                      <p>
                          Get started with our team today and become the next digital marketing success story. Our agency has provided conversion rate optimization services to businesses in the Baltimore-Washington corridor and beyond.
                      </p>

                  </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="p-0">
                  <AnalyticsImgOne/>
              </Col>
          </Row>
      </Container>

      <div className="bg-gray p-5 h-auto">
          <Container>
              <Row className="mb-5">
                  <Col sm={12} md={12} lg={7} className="d-flex justify-content-center">
                      <div className="my-auto col">
                          <h2>
                              A Platform for Efficiency and Growth
                          </h2>

                          <h3 className="txt-pink">Web Page Analysis</h3>
                          <p>
                              The CRO experts at The Commerce Shop begin the CRO process by auditing your eCommerce store identifying your target audience, determining your customer engagement metrics and defining your leading pages. Based on the results, our experts will develop a comprehensive Conversion Rate Optimization plan.
                          </p>

                          <h3 className="txt-pink">Landing Page Optimization</h3>
                          <p>
                              The CRO experts at The Commerce Shop begin the CRO process by auditing your eCommerce store identifying your target audience, determining your customer engagement metrics and defining your leading pages. Based on the results, our experts will develop a comprehensive Conversion Rate Optimization plan.
                          </p>
                      </div>
                  </Col>
                  <Col sm={12} md={12} lg={5} className="p-0">
                      <AnalyticsImgTwo/>
                  </Col>
              </Row>
          </Container>
      </div>
      <Container fluid={true} className="mb-5">
          <Row>
              <Col sm={12} md={12} lg={6} className="p-0">
                  <AnalyticsImgThree/>
              </Col>
              <Col sm={12} md={12} lg={6} className="bg-pink p-5 d-flex justify-content-center">
                  <div className="my-auto col">
                      <h2>Heat Mapping and Click Analysis</h2>
                      <p className="txt-white">
                          Our Conversion Rate Optimization team analyzes the navigation patterns of your site using Heat Mapping and Click Analysis methods. Based on the results, we develop strategies closing any loopholes and ensuring that your website generates more quality leads.
                      </p>
                      <h3>A/B Multivariate Testing</h3>
                      <p className="txt-white">
                          We conduct A/B testing, Multivariate testing, and PPC campaign testing on your online shopping website to identify the variations that can enhance conversion and reduce shopping cart abandonment. Using this data, we’ll create foolproof strategies that meet your business objectives.
                      </p>
                  </div>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
          <Row className="mb-5">
              <Col lg={12} className="text-center">
                  <h2>Learn More About Empuls3’s Conversion Rate<br/>
                      Optimization (CRO) and Analytics Services</h2>
                  <p className="lead">
                      If you are tired of shopping cart abandonment, low conversion rates and flat sales of your eCommerce <br/>store, it is time for you to hire our Conversion Rate Optimization experts.
                  </p>
                  <Link to="contact-us" className="btn btn-yellow btn-lg">get a free quote</Link>
              </Col>
          </Row>
      </Container>

    <Marketing/>
  </Layout>
)

export default AnalyticsPage