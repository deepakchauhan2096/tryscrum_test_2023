import Layout from "../components/Layout";
import React from 'react'
import Footer from '../components/Footer'
import NavTwo from '../components/NavTwo'
import Leader from '../assets/images/agilecoach/leadership-coaching.png'
import Business from '../assets/images/agilecoach/business-coaching.png'
import Team from '../assets/images/agilecoach/team-coaching.png'
import bannerimage from '../assets/images/try-Scrum-imgaes/banner-imgs/agilecct.jpg'
import PageBanner from "../components/PageBanner";



const Agilecoachcompetencies = () => {

  // console.log(window.location.pathname, "pathname");


  return (
    <>
      <Layout>
        <NavTwo />
        <PageBanner title="AGILE COACH COMPETENCIES" image={bannerimage} uri={"agile-coach-competencies"} />
        <div className="container">
          <div className="row align-items-center my-4">
            <div className="col">
              <h1 className="display-4" style={{ color: "#012237", fontWeight: "bold" }}>Who is an Agile Coach?</h1>
              <p className="lead" style={{ color: "black" }}>
                Though, there is no universal definition of what is an Agile Coach. We want to define, Someone who developed deep expertise to help people, teams, and organisations enable better customer outcomes by focusing on an organisation’s internal and external orientation. The first Agile Coaching Competency framework was developed by Lyssa Adkins and Michael Spaydback in 2011. The model has been adopted and adapted as the application of Agile has grown over the years. we have taken this model as a reference to help illustrate the focus areas of an Agile coach when it comes to Coaching.
              </p>
            </div>
          </div>
          <div className="row align-items-center my-4">
            <div className="col">
              <h2 style={{ color: "#012237", fontWeight: "normal" }}>Focus areas of an Agile Coach</h2>
              <p className="lead" style={{ color: "black" }}>There are three core ways to serve your client that they could only accomplish with help. Three unique ways an Agile Coach can help their clients are:</p>
            </div>
          </div>
          <div className="row">
            <div className="two-row">
              <div className="two-row-contain two-row-contain-blue">
                <img src={Team} alt="Team Coaching Competencies" />
                <h2 style={{ color: "#ccde7a", fontWeight: "normal" }}>Team Coaching Capabilities</h2>
                <ol style={{ color: "#012237", fontWeight: "normal" }}>
                  <li><a>Promote Self-Management</a></li>
                  <li><a>Maintain authentic distance</a></li>
                  <li><a>Facilitate Collaboration</a></li>
                  <li><a>Cultivate Systemic Awareness</a></li>
                  <li><a>Exhibit Ethical Behaviors</a></li>
                  <li><a>Promote Software Craftsmanship</a></li>
                </ol>
                <button type="submit" style={{ backgroundColor: "#ccde7a", color: "#000" }} className="btn d-flex float-right"><a><div>READ MORE</div></a></button>
              </div>

              <div className="two-row-contain two-row-contain-green">
                <img src={Business} alt="Business Coaching Capabilities" />
                <h2 style={{ color: "#73b89e", fontWeight: "normal" }}>Business Coaching Capabilities</h2>
                <ol style={{ color: "#012237", fontWeight: "normal" }}>
                  <li><a>Promote Customer Centricity</a></li>
                  <li><a>Replace output with outcomes</a></li>
                  <li><a>Facilitate Continuous learning through empiricism</a></li>
                  <li><a>Integrate learning and action</a></li>
                  <li><a>Empathise customers</a></li>
                  <li><a>Cultivate Innovation</a></li>
                </ol>
                <button type="submit" style={{ backgroundColor: "#73b89e", color: "#000" }} className="btn d-flex float-right"><a href="/business-coaching-capabilities"><div>READ MORE</div></a></button>
              </div>

              <div className="two-row-contain two-row-contain-red">
                <img src={Leader} alt="Leadership Coaching Capabilities" />
                <h2 style={{ color: "#8c91ac", fontWeight: "normal" }}>Leadership Coaching Capabilities</h2>
                <ol style={{ color: "#012237", fontWeight: "normal" }}>
                  <li><a>Establishing Commitments</a></li>
                  <li><a>Engagement Conversations to create breakthroughs</a></li>
                  <li><a>Designing Invented future</a></li>
                  <li><a>Creating a Culture of Accountability</a></li>
                  <li><a>Promote openness and vulnerability</a></li>
                  <li><a>Challenge Established thinking</a></li>
                  <li><a>Facilitate Behavioural Change</a></li>
                </ol>
                <button type="submit" style={{ backgroundColor: "#8c91ac", color: "#000" }} className="btn d-flex float-right"><a><div>READ MORE</div></a></button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Layout >
    </>
  )
}

export default Agilecoachcompetencies