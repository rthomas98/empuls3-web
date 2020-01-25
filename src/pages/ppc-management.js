import React from "react"

import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PpcBannerImg from "../components/ppc/ppc-banner";
import PpcImgOne from "../components/ppc/pps-img-one";
import {Link} from "gatsby";
import PpcImgThree from "../components/ppc/ppc-img-three";
import PpcImgFour from "../components/ppc/ppc-img-four";
import PpcImgTwo from "../components/ppc/ppc-img-two";
import BullsEyeIcon from "../components/icons/bullseye-icon";
import ListIcon from "../components/icons/list-icon";
import CommentIcon from "../components/icons/comment-icon";
import Marketing from "../components/marketing-cta";

const PPCPage = () => (
  <Layout>
    <SEO title="PPC Management" />
    <div className="pt-5 mb-5 bg-purple-half">
        <Container>
            <Row>
                <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                    <div className="my-auto col">
                        <p className="lead m-0 txt-yellow">
                            strategy. creativity. technology. analytics.
                        </p>
                        <h1 className="txt-white mb-0">
                            PPC MANAGEMENT
                        </h1>
                        <p className="txt-white mb-0">
                            Google provides more ROI than any other digital platform.
                        </p>
                    </div>
                </Col>
                <Col sm={12} md={12} lg={6} className="p-0">
                    <PpcBannerImg/>
                </Col>
            </Row>
        </Container>
    </div>
      <Container className="mb-5">
          <Row>
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                      <h2>Pay-Per-Click Management<br/> That Works</h2>
                      <p>
                          Pay-Per-Click is a thriving and powerful platform to quickly generate increased web traffic that drives targeted visitors to your site. PPC experts at empuls3 leverage our proprietary methods to provide exclusive pay-per-click strategies. We incorporate a variety of proven techniques to your campaigns, designed to make your PPC have the highest return on investment.
                      </p>
                  </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="p-0">
                  <PpcImgOne/>
              </Col>
          </Row>
      </Container>

      <Container fluid={true} className="mb-5">
          <Row>
              <Col sm={12} md={12} lg={6} className="p-0">
                <PpcImgTwo/>
              </Col>
              <Col sm={12} md={12} lg={6} className="bg-yellow p-5 d-flex justify-content-center">
                  <div className="my-auto col">
                      <h2>Our PPC specialists will provide:</h2>
                      <ul>
                          <li>
                              Custom market analyses
                          </li>
                          <li>
                              Custom ad copy
                          </li>
                          <li>
                              Re-marketing, Affinity, & In-market targeting
                          </li>
                          <li>
                              Ongoing Keyword Research
                          </li>
                          <li>
                              Access to the entire AdWords and Bing advertising suites
                          </li>
                      </ul>
                      <p>
                          Our team will infuse a custom ad copy that is designed to be relevant to your landing pages, keywords, and desired lead (or conversion) type(s).
                      </p>
                      <Link to="contact-us" className="btn btn-pink">find out more</Link>

                  </div>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
          <Row className="mb-4">
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                      <h3>Why We Love PPC</h3>
                      <p>
                          At Disruptive, we’re on a mission to change the world—one click-at-a-time.
                      </p>
                      <p>
                          There’s nothing more satisfying to us than seeing our clients’ businesses grow. It’s painful for us to watch ineffective PPC management waste a company’s potential.
                      </p>
                      <p>
                          To get the most out of your campaigns, we create a consistent and compelling message that combines the right keywords, ad messaging and site experience to produce sales.
                      </p>
                      <p>
                          We don’t stop there, though. We also test and analyze every aspect of your campaign and rigorously optimize it from click-to-close.
                      </p>
                      <p>
                          The consistent combination of PPC management, optimization and analytics are how we grow businesses…one click-at-a-time.
                      </p>
                  </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="p-0">
                  <PpcImgThree/>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                      <h3>Our Clients</h3>
                      <p>
                          We’ve produced killer results for hundreds of clients and millions of dollars of ad spend. Odds are, you’ve already seen our work in action!
                      </p>
                      <p>
                          To be honest, while we’ve helped clients with small budgets accomplish great things, we typically find that PPC advertising works best for companies with a PPC budget of at least $5,000/month. Below that threshold, it’s often hard to win in today’s competitive PPC market.
                      </p>
                      <h3>
                          Transparency
                      </h3>
                      <p>
                          At Empuls3, we believe that you have a right to know what is happening in your PPC campaigns. It’s your money and your campaigns, after all.
                          And, since we do great work, we’ve got nothing to hide.
                      </p>
                      <p>
                          Not only do our clients’ PPC accounts get weekly attention, but we also send weekly reports on how the campaigns are progressing and what we’ve done to improve things. That keeps you in the loop and us accountable.
                      </p>
                      <p>
                          With Empuls3, you’ll never have to wonder about your PPC campaigns again.
                      </p>
                  </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="p-0">
                  <PpcImgFour/>
              </Col>
          </Row>
      </Container>
      <Container className="mb-5">
          <Row>
              <Col sm={12} md={12} lg={4}>
                  <div className="bg-pink p-4 d-flex justify-content-center ppc-box">
                        <div className="my-auto col text-center">
                            <small className="m-0">Attract ready-to-buy prospects with</small>
                            <h4 className="txt-white">Keyword Targeting</h4>
                            <BullsEyeIcon/>
                            <p className="txt-white">
                                This isn’t newspaper advertising. Our paid search marketing agency precisely targets high-quality prospects by only showing up for keywords that are searched by a carefully defined audience.
                            </p>
                        </div>
                  </div>
              </Col>
              <Col sm={12} md={12} lg={4}>
                  <div className="bg-pink p-4 d-flex justify-content-center ppc-box">
                      <div className="my-auto col text-center">
                          <small className="m-0">Show up across the web with</small>
                          <h4 className="txt-white">Display Advertising</h4>
                          <ListIcon/>
                          <p className="txt-white">
                              Go beyond search engine marketing and the results page. Run your online advertising campaign across relevant websites and start capturing more leads with attention-grabbing imagery.
                          </p>
                      </div>
                  </div>
              </Col>
              <Col sm={12} md={12} lg={4}>
                  <div className="bg-pink p-4 d-flex justify-content-center ppc-box">
                      <div className="my-auto col text-center">
                          <small className="m-0">Restart the conversation with</small>
                          <h4 className="txt-white">Re-marketing Ads</h4>
                          <CommentIcon/>
                          <p className="txt-white">
                              Don’t let good leads go bad! Even if visitors don’t contact your company the first time, you can follow them around the web with re-marketing ads to get them back into your sales and marketing funnel.
                          </p>
                      </div>
                  </div>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
          <Row className="mb-5">
              <Col lg={12} className="text-center">
                  <h2>Get leads fast with PPC Advertising Management.</h2>
                  <p className="lead">
                      We consistently increase leads and lower cost per lead for hundreds of businesses through pay per click services. Become the next success story and contact our PPC experts about our PPC services today.
                  </p>
                  <Link to="contact-us" className="btn btn-yellow btn-lg">get a free quote</Link>
              </Col>
          </Row>
      </Container>

      <Marketing/>

  </Layout>
)

export default PPCPage