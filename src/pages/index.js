import React from "react"
import {Link} from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container, Row, Col} from "react-bootstrap";

import Banner from "../components/landing/banner"
import BannerImgOne from "../components/landing/banner-img-one";
import BannerImgTwo from "../components/landing/banner-img-two";
import HomeAboutImg from "../components/landing/home-about"
import RecentWorks from "../components/recent-work";
import Marketing from "../components/marketing-cta";
import BuildingIcon from "../components/icons/building-icon";


const IndexPage = () => (

  <Layout>
    <SEO title="Full-Service Digital Marketing Agency in Frisco Texas" />

    <Container fluid={true} className="mb-5 mt-3" >
        <Row className="mb-3" >
            <Col lg={12}>
                <div className="txt-overlay">
                    <Banner/>
                    <div className="centered banner text-center">
                        <p className="txt-yellow m-0 lead">
                            strategy. creativity. technology. analytics.
                        </p>
                        <h1>
                            WE’RE A MULTI-FACETED FULL-SERVICE CREATIVE AGENCY.
                        </h1>

                        <p className="lead">
                            The way people communicate has changed. Your marketing strategy should too.
                        </p>

                        <Link to="/agency" className="btn btn-pink btn-lg">learn more</Link>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className="mb-3" >
            <Col sm={12} md={12} lg={4} className="text-center p-3 d-flex justify-content-center mb-md-5">
                <div className="my-auto col">
                    <BuildingIcon/>
                    <h2>We’re More Than an Agency.</h2>
                    <p className="lead">
                        Empuls3 is a Dallas based Web and App Development Digital Agency. Our goal is to create pain-free marketing solutions that will help to grow your business.
                    </p>
                    <Link to="/our-work" className="btn btn-yellow">Who we are</Link>
                </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <div className="txt-overlay">
                    <BannerImgOne/>
                    <div className="bottom-left p-3">
                        <h3 className="txt-yellow">
                            Ready to grow your business?
                        </h3>
                        <p className="txt-white">
                            We help you plan and execute a digital marketing strategy that produces measurable growth.
                        </p>

                        <Link to="/contact-us" className="btn btn-pink">lets get started</Link>
                    </div>
                </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <div className="txt-overlay">
                    <BannerImgTwo/>
                    <div className="bottom-left p-3">
                        <h3 className="txt-yellow">
                            Marketing Services
                        </h3>
                        <p className="txt-white">
                            Increase website traffic, strengthen brand loyalty and broaden your digital footprint.
                        </p>

                        <Link to="/search-engine-optimization" className="btn btn-pink">i want to know more</Link>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>

      <Container className="mb-5">
          <Row className="mb-4">
              <Col className="text-center">
                  <h2>How Can Empuls3 Help?</h2>
                  <p className="lead">
                      Nearly 50% of businesses use different acts of digital marketing without a strategy. <br></br>Only 13% of those businesses with a strategy execute it successfully.
                  </p>
              </Col>
          </Row>
      </Container>

     <div className="bg-yellow-half mb-5">
         <Container>
             <Row className="mb-5">
                 <Col sm={12} md={12} lg={4} className="bg-purple d-flex justify-content-center min-height">
                     <div className="my-auto col p-3 text-center">
                         <h3 className="txt-pink" >
                             Strategy + Research
                         </h3>
                         <p>
                             Engagement Strategy
                         </p>
                         <p>
                             Competitive Analysis
                         </p>
                         <p>
                             Business Discovery
                         </p>
                         <p>
                             Consumer Insights
                         </p>
                         <Link to="/brand-identity-and-strategy" className="btn btn-yellow">find out more</Link>
                     </div>
                 </Col>
                 <Col sm={12} md={12} lg={4} className="bg-purple d-flex justify-content-center min-height">
                     <div className="my-auto col p-3 text-center">
                         <h3 className="txt-pink" >
                             Design + Development
                         </h3>
                         <p>
                             UX + Responsive Design
                         </p>
                         <p>
                             Content Development
                         </p>
                         <p>
                             Web Application Development
                         </p>
                         <p>
                             Business Logic Development
                         </p>
                         <Link to="/web-development" className="btn btn-yellow">find out more</Link>
                     </div>
                 </Col>
                 <Col sm={12} md={12} lg={4} className="bg-purple d-flex justify-content-center min-height">
                     <div className="my-auto col p-3 text-center">
                         <h3 className="txt-pink" >
                             Analytics + Marketing
                         </h3>
                         <p>
                             Audience Segmentation
                         </p>
                         <p>
                             Analytics Activation
                         </p>
                         <p>
                             Paid Search &amp; SEO
                         </p>
                         <p>
                             Social Media Marketing
                         </p>
                         <Link to="/analytics-and-conversion-tracking" className="btn btn-yellow">find out more</Link>
                     </div>
                 </Col>
             </Row>
             <Row className="pb-5" >
                 <Col className="text-center">
                     <h2 className="txt-white">Need an Estimate?</h2>
                     <p className="txt-white lead">
                         Technology is growing fast and stay up to date is challenging!
                         Our team of professional designers, web developers, and Business Strategist can help you plan and execute your next design project
                     </p>

                     <Link to="/contact-us" className="btn btn-purple">lets talk</Link>
                 </Col>
             </Row>
         </Container>
     </div>

      <RecentWorks/>

      <Container fluid={true} className="p-0 mb-5">
          <div className="txt-overlay">
              <HomeAboutImg/>

              <div className="centered">
                  <h2 className="txt-white">
                      Get to know Our Company
                  </h2>
                  <h3 className="lead txt-yellow">
                      Thoughtful. Skilled. Results-Oriented
                  </h3>
                  <p className="lead txt-white">
                      Empuls3 is a full-service digital marketing agency located in the Dallas Texas. We specialize in Web/App Design/Development, SEO, PPC, and Marketing Automation.
                  </p>
                  <p className="lead txt-white">
                      Our team of talented innovators hold themselves accountable for every client’s bottom line results. We get to know every business we work with, so that we can create a custom marketing strategy that aligns with your goals. That’s why we’re different and that’s how we’ve found success.
                  </p>

                  <p className="lead txt-white">
                      Get in touch to find out why we are the best agency for your marketing plans.
                  </p>

                  <Link to="/agency" className="btn btn-pink btn-lg">get to know us more</Link>
              </div>
          </div>
      </Container>

      <Marketing/>

  </Layout>
);


export default IndexPage
