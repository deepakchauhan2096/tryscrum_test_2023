import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import BuscoachingContent from "../components/BuscoachingContent";
import PageBanner from "../components/PageBanner";
import Businesscoching from "../assets/images/business-coach.jpg"


const Coach = () => {
  return (
    <Layout pageTitle="tryScrum | Coaching | Offerings" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
      <NavTwo />
      <PageBanner title="Business Coaching Capabilities" image={Businesscoching} uri={"business-coaching-capabilities"}/> 
      <BuscoachingContent />     
      <Footer />
    </Layout>
  );
};

export default Coach;