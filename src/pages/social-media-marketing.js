import React from "react"
import {Container, Row, Col } from "react-bootstrap"
import {Link} from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialMediaBannerImg from "../components/social/social-banner";
import SocialImgOne from "../components/social/social-img-one";
import SocialImgTwo from "../components/social/social-img-two";
import SocialImgThree from "../components/social/social-img-three";
import Marketing from "../components/marketing-cta";
import SocialImgFour from "../components/social/social-img-four";

const SocialMediaPage = () => (
  <Layout>
    <SEO title="Social Media Strategy is Quintessential for A Growing Brand" />

    <Container fluid={true} className="mb-5">
        <Row>
            <Col sm={12} md={12} lg={6} className="p-0">
                <SocialMediaBannerImg/>
            </Col>
            <Col sm={12} md={12} lg={6} className=" d-flex justify-content-center bg-purple p-5">
                <div className="my-auto col">
                    <p className="lead m-0 txt-pink">
                        strategy. creativity. technology. analytics.
                    </p>
                    <h1 className="txt-white mb-0">
                        SOCIAL MEDIA MARKETING
                    </h1>
                    <p className="txt-white mb-0 lead">
                        Empuls3 builds social media marketing programs that amplify your reach and convert prospects into buyers.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>

      <Container className="mb-5">
          <Row className="mb-4">
              <Col>
                  <h2>Our Social Media Advertising Services can Help You</h2>
                  <p className="lead">
                      We’ll Reach Your Exact Audience with Programmatic Advertising and Social Media Marketing
                  </p>
                  <p>
                      The key to getting social media results is focusing on the proper channels and activities. Targeting the appropriate communities and outlets to achieve your personal or professional goals is a calculated method and not one that you should manage alone.
                  </p>
                  <p>
                      When it comes to picking a social media management company to assist you in your brand’s growth, awareness, strategy, activities, Empuls3 is your best bet, hands down.
                  </p>
                  <p>
                      We can successfully handle the creation of your social media strategy so that your social media presence and online communication are in sync and flows with great eloquence. But it doesn’t stop there!
                  </p>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={12} md={12} lg={6} className="p-0">
                <SocialImgOne/>
              </Col>
              <Col sm={12} md={12} lg={6} className="bg-pink p-5 d-flex justify-content-center">
                <div className="my-auto col">
                    <h2>Content that speaks to your audience & followers.</h2>
                    <p>
                        We develop your content using a buyer persona, your brand guidelines, and our awesome graphic designers. Whether you’re your small business owner or a franchise with multiple locations we can handle your content creation & social channel management.
                    </p>
                </div>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={12} md={12} lg={6} className="bg-yellow p-5 d-flex justify-content-center">
                  <div className="my-auto col">
                      <h2>Digital PR &amp; Outreach</h2>
                      <p>
                          Advertising is what you pay for, but PR is what you pray for! Digital PR is often a major player for businesses, and your brand positioning will influence your voice online. Integrating PR content and digital media outreach is essential in developing brand awareness, applying offline and online advertising in tandem for a seamless user experience.
                      </p>
                      <p>
                          Brand reputation is key to building brand authority, and with a team of savvy marketers, we can add real value to your business.
                      </p>
                  </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="p-0">
                  <SocialImgTwo/>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={12} md={12} lg={6} className="p-0 mb-md-5">
                  <SocialImgThree/>
              </Col>
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                      <h3>Facebook Advertising Services</h3>
                      <p>
                          Use the most popular social media advertising platform to reach your desired audience and drive traffic to your website. Target B2C and B2B audiences.
                      </p>
                    <h3>
                        Instagram Advertising Services
                    </h3>
                      <p>
                          Use the most visually engaging platform to spark interest in your products and services. Capture eyeballs on Instagram’s news feed with effective social media advertisements.
                      </p>
                  </div>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={12} md={12} lg={6} className="p-0 mb-md-5">
                  <SocialImgFour/>
              </Col>
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                      <h3>Pinterest Advertising Services</h3>
                      <p>
                          Target people searching for pins related to your products and services. Use the best social media advertising platform to reach women and consumers of retail products.
                      </p>
                      <h3>
                          LinkedIn Advertising Services
                      </h3>
                      <p>
                          Use LinkedIn advertising to reach decision-makers and professionals. If you are a B2B company seeking to gain awareness, website traffic, and influence conversions, use LinkedIn advertising.
                      </p>
                  </div>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
          <Row className="mb-5">
              <Col lg={12} className="text-center">
                  <h2>Contact Us Today and Drive Your Business with Social Selling!</h2>
                  <p className="lead">
                      Social media advertising is a great way to increase brand awareness and conversions through social media.
                  </p>
                  <Link to="contact-us" className="btn btn-yellow btn-lg">get a free quote</Link>
              </Col>
          </Row>
      </Container>

      <Marketing/>

  </Layout>
)

export default SocialMediaPage