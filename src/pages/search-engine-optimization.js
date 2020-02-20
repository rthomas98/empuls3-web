import React from "react"
import { Container, Row, Col, Media } from "react-bootstrap";

import Layout from "../components/layout"
import SEO from "../components/seo"
import SeoBannerImg from "../components/seo/se-banner";
import SeoImgOne from "../components/seo/seo-img-one";
import SeoImgTwo from "../components/seo/seo-img-two";
import LeftPlane from "../components/icons/left-icon";
import AltBrowserIcon from "../components/icons/alt-browser-icon";
import DashIcon from "../components/icons/dash-icon";
import LinkIcon from "../components/icons/link-icon";
import SeoImgThree from "../components/seo/seo-img-three";
import ChartIcon from "../components/icons/chart-icon";
import PieIcon from "../components/icons/pie-icon";
import FriendsIcon from "../components/icons/friends-icon";
import AltUserIcon from "../components/icons/alt-users-icon";
import {Link} from "gatsby";
import Marketing from "../components/marketing-cta";

const SearchEnginePage = () => (
  <Layout>
    <SEO title="Search Engine Optimization Solutions in Frisco" />
    <Container fluid={true} className="p-0 mb-5">
        <div className="txt-overlay">
            <SeoBannerImg/>
            <div className="centered text-center">
                <p className="lead m-0 txt-pink">
                    strategy. creativity. technology. analytics.
                </p>
                <h1 className="txt-white mb-0">
                    SEARCH ENGINE OPTIMIZATION
                </h1>
                <p className="txt-white mb-0 lead">
                    We take control of your local citations & watch as your local SEO rankings soar
                </p>
            </div>
        </div>
    </Container>

      <Container className="mb-5">
          <Row className="mb-4">
              <Col sm={12} md={12} lg={12}>
                  <h2>Reach Google’s Page 1</h2>
                  <p className="lead">
                      How much SEO will it take to get your business to page 1 of Google?
                  </p>
                  <p>
                      Good Search Engine Optimization (SEO) is invaluable. It helps ensure that your target audience finds your website and get relevant content once they arrive. In practical terms, that means they are more likely to be engaged by your business or product, which means increased conversion.
                  </p>
                  <p>
                      Empuls3 is one of the best SEO companies in the US, as we are experts in achieving SEO goals. Our team of highly skilled SEO consultants & experts can help your website’s SEO through keyword analysis, content creation, and a well-structured user journey.
                  </p>
                  <p>
                      Besides optimizing your primary website, we can help make your brand more visible through social bookmarking, social networking and business profile creation.
                  </p>
                  <h3>
                      Why is SEO (Search Engine Optimization) service is important for you?
                  </h3>
                  <p>
                      Good Search Engine Optimization service is all about content, and as the best search engine optimization company we know this very well. If your audience finds content that is relevant to them, they are more likely to engage with your website, resulting in higher conversion rates for your business.
                  </p>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={12} md={12} lg={6} className="p-0 mb-md-5">
                <SeoImgOne/>
              </Col>
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                    <p>
                        <strong>Simple design</strong> – visitors to your website need to be able to find the information they are looking for quickly. Simple, uncluttered visuals help them to do this.
                    </p>

                      <p>
                          <strong>Keywords</strong> – relevant keywords in metadata, description fields, and body content and headers can help a site be indexed by search engines.
                      </p>

                      <p>
                          <strong>Clear user journey</strong> – a well-structured site that breaks down the information and uses headers is more visible to search engines.
                      </p>

                      <p>
                          <strong>Linking</strong> – linking within your website helps consolidate the site’s message and identify key information areas.
                      </p>

                      <p>
                          <strong>Calls to Action</strong> – clear CTAs are hard to resist and will encourage your visitors to convert. They should be clearly visible (ideally above the fold) and a mix of graphics and text.
                      </p>
                  </div>
              </Col>
          </Row>
      </Container>

      <Container fluid={true} className="mb-5">
          <Row>
              <Col sm={12} md={12} lg={6} className="bg-pink p-4 d-flex justify-content-center p-md-5">
                  <div className="my-auto col">
                      <h3>What Our Search Engine Optimisation (SEO) Will Offer You?
                      </h3>

                      <p>
                          Our professional SEO team at Empuls3 can improve your Search Engine Optimization at every stage – from creating and implementing a strategy for a new website to monitoring existing content to identify improvements at the most affordable price.
                      </p>

                      <p>
                          On-page optimization – we help your website through clear, relevant content, good site structure, use of anchor and image text and internal link strategies.
                      </p>

                      <p>
                          Landing page optimization and analysis – we examine the performance of landing pages according to the rules of good search engine optimization, to ensure CTAs are visible and maximum conversion is achieved.
                      </p>

                      <p>
                          Site speed optimization – visitors are more likely to convert if they can find what they’re looking for quickly. We help speed up your website, so they are not left hanging.
                      </p>

                      <p>
                          Off-page optimization – we create best SEO strategies to increase targeted traffic to your website through white hat SEO link building with relevant websites and advocates.
                      </p>

                      <p>
                          Business profile creation – we create the best profiles using a variety of social platforms to spread the word about your business.
                      </p>
                  </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="p-0">
                  <SeoImgTwo/>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
          <Row className="mb-4">
              <Col className="text-center">
                  <h2>What is an SEO campaign?</h2>
                  <p className="lead">
                      How much SEO will it take to get your business to page 1 of Google?
                  </p>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={12} md={12} lg={6}>
                  <Media>
                      <LeftPlane/>
                      <Media.Body>
                          <h5>Contents</h5>
                          <p>
                              The most important aspect to position a web page is quality content. We make sure that your website offers the solutions that people are looking for, to obtain greater relevance and recognition, both from search engines and from users.
                          </p>
                      </Media.Body>
                  </Media>
              </Col>
              <Col sm={12} md={12} lg={6}>
                  <Media>
                      <AltBrowserIcon/>
                      <Media.Body>
                          <h5>Platform</h5>
                          <p>
                              Does Google access your site? Interpret it, index it and position it as it should? The positioning of a web page depends on hundreds of factors that will determine the treatment that the search engines will give to your site. To position your website in search engines, you must send the correct signals.
                          </p>
                      </Media.Body>
                  </Media>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={12} md={12} lg={6}>
                  <Media>
                      <DashIcon/>
                      <Media.Body>
                          <h5>Performance</h5>
                          <p>
                              How long does your site take to load? The users, and therefore the search engines, demand faster and faster pages, abandoning those that are slow to load. We optimize the loading of your site to provide an experience that encourages sales.
                          </p>
                      </Media.Body>
                  </Media>
              </Col>
              <Col sm={12} md={12} lg={6}>
                  <Media>
                      <LinkIcon/>
                      <Media.Body>
                          <h5>Performance</h5>
                          <p>
                              How long does your site take to load? The users, and therefore the search engines, demand faster and faster pages, abandoning those that are slow to load. We optimize the loading of your site to provide an experience that encourages sales.
                          </p>
                      </Media.Body>
                  </Media>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col>
                  <SeoImgThree/>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={12} md={12} lg={6}>
                  <Media>
                      <FriendsIcon/>
                      <Media.Body>
                          <h5>Usability</h5>
                          <p>
                              In order for your business to grow, you need the traffic you receive to convert. Do you sell a product? Do you have a blog? Regardless of your conversion, we help you make your site much more usable by increasing the conversion rates.
                          </p>
                      </Media.Body>
                  </Media>
              </Col>
              <Col sm={12} md={12} lg={6}>
                  <Media>
                     <ChartIcon/>
                      <Media.Body>
                          <h5>Analytics</h5>
                          <p>
                              We are an SEO agency focused on performance: we are interested in obtaining results, as well as that you can learn to interpret the different metrics offered by each measurement tool, such as Google Analytics. You will learn to measure and enhance your success.
                          </p>
                      </Media.Body>
                  </Media>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={12} md={12} lg={6}>
                  <Media>
                      <AltUserIcon/>
                      <Media.Body>
                          <h5>Consultancy</h5>
                          <p>
                              Digital marketing is vertiginous, and a decision can mean the success or the disappearance of your brand. We offer a comprehensive web positioning consultancy in which you only need to worry about the quality of your product, we will advise you.
                          </p>
                      </Media.Body>
                  </Media>
              </Col>
              <Col sm={12} md={12} lg={6}>
                  <Media>
                      <PieIcon/>
                      <Media.Body>
                          <h5>Reporting</h5>
                          <p>
                              We generate monthly reports based on the results of web positioning and organic traffic obtained. In addition, we generate custom reports in Google Analytics so you can follow the evolution of the SEO campaign in real-time.
                          </p>
                      </Media.Body>
                  </Media>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
          <Row className="mb-5">
              <Col lg={12} className="text-center">
                  <h2>SEO Services that Grow Traffic and Increase Revenue</h2>
                  <p className="lead">
                      If you’re looking to reap the benefits of an SEO campaign, you need a company that can provide
                      SEO management services that earn you the highest possible return on investment (ROI).
                  </p>
                  <Link to="contact-us" className="btn btn-yellow btn-lg">get a free quote</Link>
              </Col>
          </Row>
      </Container>

      <Marketing/>

  </Layout>
)

export default SearchEnginePage