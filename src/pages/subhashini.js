import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import LeadershipHeaders from "../components/LeadershipHeaders";
import Footer from "../components/Footer";
import SubhashiniDescription from "../components/SubhashiniDescription";
// import FarooqDesc from "../components/FarooqDescription";

const Subhashini = () => {
  return (
    <Layout pageTitle="tryScrum | Team" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      <LeadershipHeaders title="Team" />
      <SubhashiniDescription />
      <Footer />
    </Layout>
  );
};

export default Subhashini;