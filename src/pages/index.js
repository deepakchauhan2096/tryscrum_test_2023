import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SliderOne from "../components/SliderOne";
import Footer from "../components/Footer";
import AboutTwo from "../components/AboutTwo";
import CourseOne from "../components/CourseOne";
import VideoTwo from "../components/VideoTwo";
import CountdownKipso from "../components/CountdownKipso";
import CourseCatOne from "../components/CourseCatOne";
import CallToActionTwo from "../components/CallToActionTwo"; 
import CallToActionNew from "../components/CallToActionNew"; 
import CallToActionThree from "../components/CallToActionThree";
import BrandsTwo from "../components/BrandsTwo";
import BlogTwo from "../components/BlogTwo";
import SubscribeOne from "../components/SubscribeOne";
import NavTwo from "../components/NavTwo";
import homebanner from "../assets/images/try-Scrum-imgaes/homebanner.png"
import Helmet from 'react-helmet';
import OurPartners from "../components/OurPartners";
import OurPartnerSlider from "../components/OurpartnerSlider";
import WhatsAppShare from "../components/WhatsAppShare";
import '../assets/css/newresponsive.css';

const HomePage = ({ data }) => {

  console.log(data, "newdata")
  const title = data.wpPage.seo.title
  const metadesc = data.wpPage.seo.metaDesc
  
   
  return(
  <Layout pageTitle={title} metaDesc={metadesc} pageName="home" >

    {/* <WhatsAppShare /> */}
    {/* <Topbar /> */}
    <NavTwo /> 

    {/* <SliderOne /> */}


    {/* <SliderOne title={data.allWpAlltable.nodes}/>  */}
    <SliderOne title={data.allWpPost.nodes}/>
    {/* <Chat title={tabledata} />  */}


    <AboutTwo />
    <CourseOne />
    <VideoTwo />
    <CountdownKipso />

    {/* <CallToActionNew /> */}
    
    {/* <CourseCatOne /> */}

    <CallToActionThree />
    
    <CallToActionTwo />
    {/* <BlogTwo />  */}
    {/* <CallToActionFour /> */}
    <SubscribeOne />
    {/* <OurPartners /> */}
    <OurPartnerSlider />

    <div className="block-title__title" style={{ marginTop:"70px", marginBottom:"100px", textAlign:"center"}}>Trusted By</div> 
    
    <BrandsTwo />
    
    <Footer />
  </Layout>

  )
  };

export default HomePage;

export const pageQuery = graphql`
query WordPressPostArchive2 {

  wpPage(id: {eq: "cG9zdDoyODc3"}) {
    seo {
      metaDesc
      title
    }
  }
 
  allWpPost {
    nodes {
      uri
      title
      excerpt
      id
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      acfcoursePage {
        options {
          certificate
          certificationBody
          curriculum
          feeStructure
          fieldGroupName
          guidlineUrl
          included
          instructions
          logisticsAndPrerequisites
          pduScrumAllianceSeus
          prerequisites
          trustPilotRating
          video
          whoCanAttend
          why
          duration
          thecourse
          keywords
        }
        course1 {
          date1
          fieldGroupName
          location
          time1
          trainer
          url
          regularPrice
          salePrice
        }
        course2 {
          date1
          fieldGroupName
          location
          time1
          trainer
          url
          regularPrice
          salePrice
        }
        course3 {
          date1
          fieldGroupName
          location
          time1
          trainer
          url
          regularPrice
          salePrice
        }
        course4 {
          date1
          fieldGroupName
          location
          time1
          trainer
          url
          regularPrice
          salePrice
        }
        course5 {
          date1
          fieldGroupName
          location
          time1
          trainer
          url
          regularPrice
          salePrice
        }
        course6 {
          date1
          fieldGroupName
          location
          time1
          trainer
          url
          regularPrice
          salePrice
        }
        course7 {
          date1
          fieldGroupName
          location
          time1
          trainer
          url
          regularPrice
          salePrice
        }
        course8 {
          date1
          fieldGroupName
          location
          time1
          trainer
          url
          regularPrice
          salePrice
        }
        course9 {
          date1
          fieldGroupName
          location
          time1
          trainer
          url
          regularPrice
          salePrice
        }
        course10 {
          date1
          fieldGroupName
          location
          time1
          trainer
          url
          regularPrice
          salePrice
        }
      }
    }
  }
 }`




// All Table list data 
// export const pageQuery = graphql`
//   query WordPressPostArchive2 {
//     allWpAlltable {
//       nodes {
//         title
//         tabledata {
//           tableDescription {
//             date
//             description
//             fieldGroupName
//             keywords
//             location
//             regularPrice
//             salePrice
//             time
//             trainer
//             url
//           }
//           tableDescription2 {
//             date
//             description
//             fieldGroupName
//             keywords
//             location
//             regularPrice
//             salePrice
//             time
//             trainer
//             url
//           }
//           tableDescription3 {
//             date
//             description
//             keywords
//             location
//             fieldGroupName
//             regularPrice
//             time
//             salePrice
//             trainer
//             url
//           }
//           tableDescription4 {
//             date
//             description
//             keywords
//             location
//             fieldGroupName
//             regularPrice
//             time
//             salePrice
//             trainer
//             url
//           }
//           tableDescription5 {
//             date
//             description
//             keywords
//             location
//             fieldGroupName
//             regularPrice
//             time
//             salePrice
//             trainer
//             url
//           }
//           tableDescription6 {
//             date
//             description
//             keywords
//             location
//             fieldGroupName
//             regularPrice
//             time
//             salePrice
//             trainer
//             url
//           }
//         }
//       }
//     }
//   }
// `