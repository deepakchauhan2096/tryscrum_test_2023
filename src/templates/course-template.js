import React, { useState } from "react"
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal'
import { graphql, Link } from "gatsby"
import { Button } from 'react-bootstrap';
import Layout from "../components/Layout"
import NavTwo from "../components/NavTwo"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"
import CourseEnrollTable from "../components/CourseEnrollTable"
import CourseBundleTable from "../components/CourseBundleTable"

import CourseBundleCardType from "../components/CourseBundleCardType"

import axios from "axios";
import horizontal from "../assets/images/slider-line.png";
import Helmet from "react-helmet";
import notebook from "../assets/images/notebook.png";
import bannercsm from "../assets/images/banner-csm.webp";
import psm1 from "../assets/images/psm1-01.png"
import apsm from "../assets/images/psm-2.png"
import psmlogo from "../assets/images/psmlogo.png"
import asm2logo from "../assets/images/asm2logo.png"
import pspo1logo from "../assets/images/pspo1logo.png"
import pspo2logo from "../assets/images/pspo2logo.png"
import pspo1 from "../assets/images/pspo1-01.png"
import pspo2 from "../assets/images/pspo2-01.png"
import pspoa from "../assets/images/pspo2logo.png"
import pskLogo from "../assets/images/psklogo.png"
import pskBannerImg from "../assets/images/pskBannerImg.png"
import calLogo from "../assets/images/combo.png"
import accLogo from "../assets/images/icp-acc-logo.png"
import entLogo from "../assets/images/icp-ent-logo.png"
import catLogo from "../assets/images/icp-cat-logo.png"
import calBannerImg from "../assets/images/leadership-combo.png"
import leftImg from "../assets/images/left-side-img.png"
import rightImg from "../assets/images/right-side-img.png"
import CourseCategoryFilter from "../components/CourseCategoryFilter"
// import icpaccBannerImg from "../assets/images/icp-acc-03.png"
import icpaccBannerImg from "../assets/images/icp-acc-02-01-01.png"
import icpcatBannerImg from "../assets/images/icp-cat-banner2.png"
import icpentBannerImg from "../assets/images/icp-ent-banner.png"
import bundleCourseBannerImg from "../assets/images/bundle-box-01.png"
import csm2_02 from "../assets/images/csm2-02.png"
import leftImgBundle from "../assets/images/left-side-white-bundle-page.png"
import corporate from "../assets/images/corporate-table2-01.png";
import csm_logo from "../assets/images/csm-logo.png"
import cceLogo from "../assets/images/cce-1.png"

import "../components/Chat/style.css";
import "../components/Chat/townscript.css";
import ModalCPACC from "../components/ModalICPACC";
import ModalCPENT from "../components/ModalICPENT";
import ModalCPCAT from "../components/ModalICPCAT";
import BrochureCAL from "../components/BrochureCAL";
// import "../../static/Team_coaching_Canvas_Portrait.pdf"



ReactModal.setAppElement('#___gatsby')

export const query = graphql`
query($id: String!) {
    allWpPost(filter: {id: {eq: "cG9zdDozNjQ2"}}) {
      nodes {
        categories {
          nodes {
            name
          }
        }
      }
    }
    wpPost(id: {eq: $id}) {
        id
        title
        uri
        categories {
          nodes {
            name
            }
          }
        featuredImage {
            node {
              mediaItemUrl
            }
        }
        seo {
          title
          metaDesc
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
                position
                enrolltext
                country
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
                position
                enrolltext
                country
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
                position
                enrolltext
                country
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
                position
                enrolltext
                country
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
              position
              enrolltext
              country
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
              position
              enrolltext
              country
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
              position
              enrolltext
              country
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
              position
              enrolltext
              country
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
              position
              enrolltext
              country
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
              position
              enrolltext
              country
            }
            course11 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
              position
              enrolltext
              country
            }
            course12 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
              position
              enrolltext
              country
            }
            course13 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
              position
              enrolltext
              country
            }
            course14 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
              position
              enrolltext
              country
            }
            course15 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
              position
              enrolltext
              country
            }
            course16 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
              position
              enrolltext
              country
            }
            course17 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
              position
              enrolltext
              country
            }
            course18 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
              position
              enrolltext
              country
            }
            course19 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
              position
              enrolltext
              country
            }
            course20 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
              position
              enrolltext
              country
            }
            faq1 {
              content
              heading
            }
            faq2 {
              content
              heading
            }
            faq3 {
              content
              heading
            }
            faq4 {
              content
              heading
            }
            faq5 {
              content
              heading
            }
            faq6 {
              content
              heading
            }
            faq7 {
              content
              heading
            }
            faq8 {
              content
              heading
            }
            faq9 {
              content
              heading
            }
            faq10 {
              content
              heading
            }
            faq11 {
              content
              heading
            }
            faq12 {
              content
              heading
            }
            faq13 {
              content
              heading
            }
            faq14 {
              content
              heading
            }
            faq15 {
              content
              heading
            }
            faq16 {
              content
              heading
            }
            faq17 {
              content
              heading
            }
            faq18 {
              content
              heading
            }
            faq19 {
              content
              heading
            }
            faq20 {
              content
              heading
            }
            bundle {
              category
              bundle {
                  mediaItemUrl
                }
              dates
              time
              price
              url
              enrolltext
            }

            bundle2 {
              category
              bundle {
                  mediaItemUrl
                }
              dates
              time
              price
              url
              enrolltext
            }

            bundle3 {
              category
              bundle {
                  mediaItemUrl
                }
              dates
              time
              price
              url
              enrolltext
            }

            bundle4 {
              category
              bundle {
                  mediaItemUrl
                }
              dates
              time
              price
              url
              enrolltext
            }

            bundle5 {
              category
              bundle {
                  mediaItemUrl
                }
              dates
              time
              price
              url
              enrolltext
            }

            bundle6 {
              category
              bundle {
                  mediaItemUrl
                }
              dates
              time
              price
              url
              enrolltext
            }

            bundle7 {
              category
              bundle {
                  mediaItemUrl
                }
              dates
              time
              price
              url
              enrolltext
            }

            bundle8 {
              category
              bundle {
                  mediaItemUrl
                }
              dates
              time
              price
              url
              enrolltext
            }

            bundle9 {
              category
              bundle {
                  mediaItemUrl
                }
              dates
              time
              price
              url
              enrolltext
            }

            bundle10 {
              category
              bundle {
                  mediaItemUrl
                }
              dates
              time
              price
              url
              enrolltext
            }

            bundle11 {
              category
              bundle {
                  mediaItemUrl
                }
              dates
              time
              price
              url
              enrolltext
            }

         }
      }

  }
`

const PostTemplate = ({ data }) => {


  const title = data.wpPost.seo.title;
  const metadesc = data.wpPost.seo.metaDesc;
  const course = data.wpPost;

  console.log(title, "yddddddhdhd")
  const coursename = data.wpPost.title;
  const fimg = course.featuredImage.node.mediaItemUrl;
  // console.log(fimg);
  // console.log("course url", course.acfcoursePage.course1.url);
  console.log("course all values: ", course)
  console.log("course value title", coursename);
  console.log("course value uri", data.wpPost.uri);

  // const coursename = data.wpPost.title;


  const [state, setState] = useState({ name: "", email: "", phone: "", message: "", bundlename: "", bundleemail: "", bundlecontact: "", bundleoption: "Psm 1 + Psm 2", bundlemessage: "" });
  const [loader, setloader] = useState('');
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", message: "", bundlename: "", bundleemail: "", bundlecontact: "", bundleoption: "Psm 1 + Psm 2", bundlemessage: "" });
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [bundlesubmissionMessage, setBundleSubmissionMessage] = useState("");

  let faqRef = React.createRef();

  const goToFaq = () => {
    faqRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });

  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value,
    });

    setErrors({ ...errors, [name]: "" });
  };

  const windowScrollDown = () => {
    window.scrollTo(2000, 2000);
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("course name is ", + coursename);
    setTimeout(windowScrollDown, 100)
    if (state.email && state.name && state.phone && state.message) {
      debugger;
      setloader('loading');
      const url = "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/3477/feedback";
      const formData = new FormData();
      formData.append("your-name", state.name + " " + coursename);
      formData.append("your-phone", state.phone);
      formData.append("your-email", state.email);
      formData.append("your-message", state.message);

      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      };
      const res = await axios.post(url, formData, config);

      setloader(res.data.message)
      if (typeof res.data.message !== undefined) {
        // alert(res.data.message);
        setSubmissionMessage(res.data.message);
        setState({ name: "", email: "", phone: "", message: "" });
      }
      else {
        alert("please try again");
      }
    } else {
      window.scrollTo(1000, 1000);

      let error = errors;
      if (state.name === "") {
        // debugger;
        error = {
          ...error,
          name: "This is required",
        };
      }
      if (state.email === "") {
        // debugger;
        error = {
          ...error,
          email: "This is required",
        };
      }
      if (state.phone === "") {
        // debugger;
        error = {
          ...error,
          phone: "This is required",
        };
      }
      if (state.message === "") {
        // debugger;
        error = {
          ...error,
          message: "This is required",
        };
      }
      window.scrollTo(1000, 1000);
      setErrors(error);
    }
    // console.log(res.data.message, "res");
  };

  // Contact Form For Only Bundle Course
  const bundleSubmitHandler = async (e) => {
    e.preventDefault();
    if (state.bundlename && state.bundleemail && state.bundlecontact && state.bundlemessage) {
      debugger;
      setloader('loading');
      const url = "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/6480/feedback";
      const formData = new FormData();
      formData.append("bundle-name", state.bundlename);
      formData.append("bundle-email", state.bundleemail);
      formData.append("bundle-contact", state.bundlecontact);
      formData.append("bundle-option", state.bundleoption);
      formData.append("bundle-message", state.bundlemessage);
      formData.append("your-subject", "This is a bundle enquiry form");

      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        },
      };

      const res = await axios.post(url, formData, config);
      setloader(res.data.message)
      if (typeof res.data.message !== undefined) {
        setBundleSubmissionMessage(res.data.message);
        setState({ bundlename: "", bundleemail: "", bundlecontact: "", bundlemessage: "" });
      } else {
        alert("Please Try Again");
      }
    } else {


      let error = errors;
      if (state.bundlename === "") {
        // debugger;
        error = {
          ...error,
          name: "This is required",
        };
      }
      if (state.bundleemail === "") {
        // debugger;
        error = {
          ...error,
          email: "This is required",
        };
      }
      if (state.bundlecontact === "") {
        // debugger;
        error = {
          ...error,
          city: "This is required",
        };
      }
      if (state.bundlemessage === "") {
        // debugger;
        error = {
          ...error,
          state: "This is required",
        };
      }
      setErrors(error);
      window.scrollTo(1000, 1000);
    }
    window.scrollTo(1000, 1000);
  };

  const [isModalOpen, setChecked] = useState(false);
  const [isModalOpen2, setChecked2] = useState(false);
  const [isModalOpen3, setChecked3] = useState(false);
  const [isModalOpen4, setChecked4] = useState(false);
  const [isModalOpen5, setChecked5] = useState(false);
  const [isModalOpen6, setChecked6] = useState(false);
  const [isModalOpen7, setChecked7] = useState(false);
  const [isModalOpen8, setChecked8] = useState(false);
  const [isModalOpen9, setChecked9] = useState(false);
  const [isModalOpen10, setChecked10] = useState(false);

  const [eventStateId, setEventStateId] = useState("");

  const eventBrite = (eventId) => {
    setEventStateId({
      eventStateId: eventId.substring(1)
    });

    // console.log('eventStateId set is : ', eventStateId);

  }

  // isModalOpen(false);


  const customStyles = {
    content: {
      top: '60%',
      left: '50%',
      // right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    },
  };

  const handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    setChecked(true);
    // isModalOpen(true);
    document.body.style.overflow = 'hidden';

  }

  const handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    setChecked(false);
    // isModalOpen(false);
    document.body.style.overflow = 'unset';

  }

  const handleModalOpen2 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked2(true);
    // isModalOpen(true);
    document.body.style.overflow = 'hidden';


  }

  const handleModalClose2 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked2(false);
    // isModalOpen(false);
    document.body.style.overflow = 'unset';

  }

  const handleModalOpen3 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked3(true);
    // isModalOpen(true);
    document.body.style.overflow = 'hidden';


  }

  const handleModalClose3 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked3(false);
    // isModalOpen(false);
    document.body.style.overflow = 'unset';

  }

  const handleModalOpen4 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked4(true);
    // isModalOpen(true);
    document.body.style.overflow = 'hidden';

  }

  const handleModalClose4 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked4(false);
    // isModalOpen(false);
    document.body.style.overflow = 'unset';

  }

  const handleModalOpen5 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked5(true);
    // isModalOpen(true);
    document.body.style.overflow = 'hidden';

  }

  const handleModalClose5 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked5(false);
    // isModalOpen(false);
    document.body.style.overflow = 'unset';

  }

  const handleModalOpen6 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked6(true);
    // isModalOpen(true);
    document.body.style.overflow = 'hidden';

  }

  const handleModalClose6 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked6(false);
    // isModalOpen(false);
    document.body.style.overflow = 'unset';

  }

  const handleModalOpen7 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked7(true);
    // isModalOpen(true);
    document.body.style.overflow = 'hidden';

  }

  const handleModalClose7 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked7(false);
    // isModalOpen(false);
    document.body.style.overflow = 'unset';

  }

  const handleModalOpen8 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked8(true);
    // isModalOpen(true);
    document.body.style.overflow = 'hidden';

  }

  const handleModalClose8 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked8(false);
    // isModalOpen(false);
    document.body.style.overflow = 'unset';

  }

  const handleModalOpen9 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked9(true);
    // isModalOpen(true);
    document.body.style.overflow = 'hidden';

  }

  const handleModalClose9 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked9(false);
    // isModalOpen(false);
    document.body.style.overflow = 'unset';

  }

  const handleModalOpen10 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked10(true);
    // isModalOpen(true);
    document.body.style.overflow = 'hidden';

  }

  const handleModalClose10 = event => {
    // console.log('handleModalOpen: ', event);
    setChecked10(false);
    // isModalOpen(false);
    document.body.style.overflow = 'unset';
  }

  const [activeClassId, setActiveClassId] = useState("overview");
  const onTabClick = (e) => {
    let id = e.target.id;
    setActiveClassId(id);
  };

  // console.log("course category is", data.wpPost.categories.nodes[0].name );

  console.log("title is: ", course.title);
  // console.log(course.acfcoursePage.faq9.heading , "hhhhhhhhhh")

  let categoryValue = data.wpPost.categories.nodes[0].name;

  // Except Six Courses This Will Show Up
  if (course.title != "Professional Scrum Master (PSM I)" && course.title != "Advanced Scrum Master (PSM II)" && course.title != "Professional Scrum Product Owner(PSPO I)" && course.title != "Advanced Product Owner (PSPO-A)" && course.title != "Professional  Scrum with Kanban (PSK)" && course.title != "Certified Agile Leadership -Combination" && course.title != "Certified Professional Agile Coaching (ICP-ACC)" && course.title != "Coaching Agile Transitions (ICP-CAT)" && course.title != "Enterprise Transformation(ICP-ENT)" && course.title != "Certified Scrum Master(CSM)" && course.title != "Bundle Courses") {

    return (

      <Layout pageTitle={title} metaDesc={metadesc} pageName={fimg} pageloc="individual" >

        <NavTwo />

        <PageHeader title="Course Details" />

        <section className="course-details">
          <div className="container-fluid">
            <div className="row">


              <div className="col-lg-9">
                <div className="course-details__content">
                  <p className="course-details__author">

                    <img src={fimg} alt="" style={{ width: 420, height: 250 }} />

                  </p>

                  <div className="course-details__top">
                    <div className="course-details__top-left">
                      <h1 className="course-details__title">
                        {course.title}
                      </h1>
                      <div className="course-one__stars">
                        <span className="course-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="course-one__count">4.9</span>
                        <span className="course-one__count">
                          <a href={course.acfcoursePage.options.trustPilotRating} className="course-one__category" target="__blank">
                            TrustPilot Rating
                          </a>
                        </span>


                        {/* <span className="course-one__count">
                        <a href="#table-responsive" className="course-one__category">
                            See Upcoming Courses Classes
                        </a>    
                    </span> */}

                      </div>

                    </div>


                    {/* <div className="course-details__top-right">
                  <a href="#none" className="course-one__category">
                    marketing
                  </a>
                </div> */}
                  </div>
                  {/* <div>
                    {course.title === "Certified Agile Leadership -Combination" ? <><div><BrochureCAL /></div></> : ""
                    }
                  </div> */}


                  {/* Schedule */}
                  <div style={{}} className="table-responsive" id="table-responsive" >
                    <br />
                    <h2 style={{ color: "black", fontWeight: "600" }}>Upcoming Classes</h2>

                    <div style={{ display: 'inline-block' }}>
                      <img src={horizontal} alt="img" />
                    </div>

                    <CourseEnrollTable messages={course} />

                  </div>



                  <div className="course-one__image">
                    <i className="far fa-heart"></i>
                  </div>

                  <div className="course-details__tab-navs list-unstyled">

                    {/* 3 Tab Sections */}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">

                      <li className="nav-item" role="presentation">
                        <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Curriculum</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Who can attend</button>
                      </li>

                    </ul>

                  </div>

                  <div className="tab-content tab-content course-details__tab-content" id="myTabContent">

                    <div className="tab-pane show active animated fade" id="home" role="tabpanel" aria-labelledby="home-tab">

                      {/* <p className="course-details__tab-text">
                        {course.acfcoursePage.options.title}
                  </p>
                  <br /> */}
                      <p className="course-details__tab-text makingblack">
                        <h2 style={{ color: "red" }}>
                          Course Details
                        </h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.thecourse }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Certificate</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.certificate }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Why tryScrum</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.why }} />
                      </p>

                      <iframe width="560" height="315"
                        src={course.acfcoursePage.options.video}
                        title="tryScrum"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                      />

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Course Fee</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.feeStructure }} />
                      </p>

                      <ul className="list-unstyled course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Virtual class Instructions</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.instructions }} />
                        <li>
                          <a href="/virtual-class-special-instructions/" target="__blank">
                            Special instructions</a>
                        </li>
                      </ul>

                    </div>

                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                      <p className="course-details__tab-text makingblack" >
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.curriculum }} />
                      </p>
                      <br />

                    </div>

                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                      <p className="makingblack">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.whoCanAttend }} />
                      </p>
                      <br />

                    </div>

                  </div>


                  {/* <ul className="course-details__tab-navs list-unstyled">  
                
                <li>
                  <a
                    className={activeClassId === "overview" ? "active" : null}
                    role="tab"
                    data-toggle="tab"
                    // href="#overview"
                    id="overview"
                    onClick={onTabClick}
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    className={activeClassId === "curriculum" ? "active" : null}
                    role="tab"
                    data-toggle="tab"
                    id="curriculum"
                    // href="#curriculum"
                    onClick={onTabClick}
                  >
                    Curriculum
                  </a>
                </li>
                <li>
                  <a
                    className={activeClassId === "review" ? "active" : null}
                    role="tab"
                    data-toggle="tab"
                    // href="#review"
                    id="review"
                    onClick={onTabClick}
                  >
                    Who can attend
                  </a>
                </li>
              </ul>  */}


                  {/* <div className="tab-content course-details__tab-content">
                <div
                  className="tab-pane show active  animated fade"
                  role="tabpanel"
                  id="overview"
                  style={
                    activeClassId !== "overview" ? { display: "none" } : null
                  }
                >
                  {/* <p className="course-details__tab-text">
                        {course.acfcoursePage.options.title}
                  </p>
                  <br /> */}
                  {/*
                  <p className="course-details__tab-text makingblack">
                  <h2 style={{color:"red"}}>    
                        Course Details
                  </h2>
                    <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.thecourse }} />
                  </p>
           
                  <p className="course-details__tab-text makingblack" >
                      <h2 style={{color:"red"}}>Certificate</h2>
                     <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.certificate }} />
                  </p>

                  <p className="course-details__tab-text makingblack" >
                      <h2 style={{color:"red"}}>Why tryScrum</h2>
                     <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html:course.acfcoursePage.options.why}} />
                  </p>
                                         
                  <iframe width="560" height="315" 
                      src={course.acfcoursePage.options.video}
                      title="tryScrum"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      frameBorder="0"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allowFullScreen
                  />
                             
                  <p className="course-details__tab-text makingblack" >
                      <h2 style={{color:"red"}}>Course Fee</h2>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html:course.acfcoursePage.options.feeStructure}} />
                  </p>
                               
                  <ul className="list-unstyled course-details__tab-text makingblack" >
                      <h2 style={{color:"red"}}>Virtual class Instructions</h2>
                      <div  className="all-courses-font"  dangerouslySetInnerHTML={{ __html:course.acfcoursePage.options.instructions}} />
                      <li>
                          <a href="/virtual-class-special-instructions/" target="__blank">
                          Special instructions</a>
                      </li>
                  </ul>
                                                         
                </div>

                <div
                  className="tab-pane  animated fade"
                  role="tabpanel"
                  id="curriculum"
                  style={
                    activeClassId === "curriculum" ? { display: "block" } : null
                  }
                >

                  <p className="course-details__tab-text makingblack" >
                     <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html:course.acfcoursePage.options.curriculum}} />
                  </p> 
                  <br />
                 

                </div>


                <div
                  className="tab-pane  animated fade"
                  role="tabpanel"
                  id="review"
                  style={
                    activeClassId === "review" ? { display: "block" } : null
                  }
                >
                  <div className="row course-details__tab-text" id="buycourse">
                   
                    <p className="makingblack">
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html:course.acfcoursePage.options.whoCanAttend}} />
                    </p> 
                    <br />  
                      
                  </div>

                </div>
              </div> */}

                </div>



              </div>

              <div className="col-lg-3">

                <div className="course-details__price" >
                  {/* <p className="course-details__price-text">Course price </p>
              <p className="course-details__price-amount">$18.00</p>
              <a href="#none" className="thm-btn course-details__price-btn">
                Buy This Course
              </a> */}
                  <a href="#faq" className="thm-btn course-details__price-btn hide_mobile" >
                    FAQ'S
                  </a>
                </div>



                <div className="course-details__meta" >
                  <div className="course-details__meta-link" style={{ padding: "10px" }} >
                    <span className="course-details__meta-icon">
                      <i className="far fa-clock"></i>
                    </span>
                    Prerequisites: <span>{course.acfcoursePage.options.prerequisites}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-folder-open"></i>
                    </span>
                    Duration: <span>{course.acfcoursePage.options.duration}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-user-circle"></i>
                    </span>
                    Delivery: <span>Remote</span>
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    Certification Body: <span>{course.acfcoursePage.options.certificationBody}</span>
                  </div>


                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    {/* <a href="#none" className="course-details__meta-link"> */}
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    PDU & SEUs: <span>{course.acfcoursePage.options.pduScrumAllianceSeus}</span>
                    {/* </a> */}
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="fas fa-play"></i>
                    </span>Included:
                    {/* Included: <span>Examination Fees 
                                            <br/>
                                            Community channel to continue collaborating and access to the trainers.
                                            <br/>
                                            Access to tryScrum Academy with Special Pricing
                                          </span> */}

                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.included }} />
                    </span>
                  </div>

                  {/* <ul>
                                        <li>
                                            Examination Fees 
                                        </li>
                                        <li>
                                            Community channel to continue collaborating and access to the trainers.
                                        </li>
                                        <li>
                                            Access to tryScrum Academy with Special Pricing
                                        </li>
                                        
                            </ul> */}



                  <div className="course-details__price">
                    <p className="course-details__price-text">Request More Info </p>
                    <br />

                    <form
                      action="#"
                      method="POST"
                    >

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Your Name" name="name" value={state.name} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.name}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Email Address" name="email" value={state.email} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.email}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Phone Number" name="phone" value={state.phone} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.phone}</small>

                      </div>

                      <div className="form-group">

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Message"
                          name="message"
                          value={state.message}
                          onChange={handleInputChange}
                        />
                        <small style={{ color: "red" }}>{errors.message}</small>

                      </div>

                      {/* <button type="submit" className="btn btn-primary" onClick={submitHandler} >Submit</button> */}
                      {loader == 'loading' ? <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                        disabled
                      >Submit<div class="loader"></div></button> : <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                      >Submit</button>}

                      <small style={{ color: "green" }}>{submissionMessage}</small>

                    </form>

                  </div>



                </div>


                {/* Relevant Courses  */}
                <CourseCategoryFilter name={categoryValue} title={data.wpPost.title} />

              </div>


              {course.acfcoursePage.faq1.heading === "" ? "" :
                <div id="faq">
                  <h2 style={{ color: "black", marginTop: "10px", scrollPaddingTop: "100px"}} >Frequently Asked Questions</h2>
                  <div style={{ display: 'inline-block' }} >
                    <img src={horizontal} width="450px" alt="img" />
                  </div>
                </div>
              }

              <div style={{ marginTop: "20px" }} className="accordion " id="accordionExample" >

                {course.acfcoursePage.faq1.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {/* What does the registration fee include? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.heading }} />
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* The registration fee includes the fees for classroom training, the study material, exam fees. */}
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq2.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {/* How many attempts do i get if I attend the classroom training? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">

                        {/* All participants completing the Scrum.org courses will receive a password to attempt the first assessment. The class participants who attempt the assessment within 14 days of receiving their free password and do not score at least 85% will be granted a 2nd attempt at no additional cost.

For ICAgile courses, there is no exam as of today. However, the trainers will evaluate before issuing the Certificate.

For other Courses, please speak to our support executive by writing to <a href="mailto help@tryscrum.com"> help@tryscrum.com </a>
       */}
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq3.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        {/* Which Course is right for me? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Even though it depends on your role and passion, our trainers tried to implement some recommendations based on their experience. Please visit the <a href="/which-scrum-role-is-right-for-me/" target="__blank">link</a> here to go through our recommendations.
       */}
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq4.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        {/* How Do I Obtain an Invoice Receipt or Proof of Payment for My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After placing your order, you will receive a confirmation email with a link to download your invoice as a PDF. If the email does not have this link, please send a message to <a href="mailto support@tryscrum.com"> support@tryscrum.com </a> referencing your order number.
      */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq5.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
       */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq6.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
       */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq7.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
       */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.content }} />
                      </div>
                    </div>
                  </div>
                }


                {course.acfcoursePage.faq8.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
       */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq9.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
       */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq10.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq11.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEleven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq12.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwelve">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq13.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThirteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq14.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFourteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq15.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFifteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq16.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSixteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq17.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeventeen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq18.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEighteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEighteen" className="accordion-collapse collapse" aria-labelledby="headingEighteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq19.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNineteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNineteen" className="accordion-collapse collapse" aria-labelledby="headingNineteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq20.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwenty">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwenty" className="accordion-collapse collapse" aria-labelledby="headingTwenty" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.content }} />

                      </div>
                    </div>
                  </div>
                }


                {/* <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.heading }} /> */}

              </div>

            </div>





          </div>
        </section>


        <Footer />
      </Layout>

    )

  } else if (course.title === "Professional Scrum Master (PSM I)") {

    return (

      // <Layout pageTitle="tryScrum | Course Details">
      <Layout pageTitle={title} metaDesc={metadesc} pageName={fimg} pageloc="individual" >
        <NavTwo />

        {/* <PageHeader title="Course Details" />  */}

        <div>

          <div className="courseStripePSM">

            <ul className="list-unstyled thm-breadcrumb" >
              <li style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237" }} to="/">Home</Link>
              </li>
              <li className="active" style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237", fontWeight: "bold" }} to="/courses">Courses</Link>
              </li>
            </ul>

            <p className="newCoursePageImg2" style={{ marginLeft: "10px" }}>
              <img src={psmlogo} alt="" style={{ width: 120, height: 120 }} />
              <div>
                <h2 style={{ marginLeft: "10px", marginTop: "20px", color: "#052237", fontWeight: "bold" }}> {course.title} </h2>
                <br />
                <div className="badges-top" style={{ marginLeft: "10px" }} >
                  {/* <span className="badge badge-certified">Certified</span> */}
                  <span className="badge badge-live-online">Live Online</span>
                  <span className="badge badge-in-person">In Person</span>
                </div>
              </div>
            </p>

          </div>

          <div className="courseStripe2">

            <div className="modal-body row">
              <div className="col-md-6">

                <div className="content">

                  <h2 class="h1 bordered">Become a Great Scrum Master&nbsp;</h2>
                  <h2 style={{ fontSize: "22px" }} > Professional Scrum Master training with tryScrum is intense and creative. You can do more than getting certified. More than 8000 agile professionals chose to take their Scrum Master training with us, and we'd love to welcome you to a future course. </h2>

                  <div className="hide_mobile">

                    <img src={leftImg} style={{ width: "50%", height: "40%" }} />

                    <img src={rightImg} style={{ width: "50%", height: "40%" }} />

                  </div>

                </div>


              </div>
              <div className="col-md-6">

                <div className="imageNewCourse">
                  <img src={psm1} alt="banner-csm" />
                </div>

              </div>
            </div>
          </div>

        </div>



        <section className="course-details">

          <div className="row">
            <div className="col-lg-9">
              <div className="course-details__content">
                {/* <p className="course-details__author">
  
                  <img src={fimg} alt="" style={{ width: 420, height: 300 }} />
                  
                </p> */}

                <div className="course-details__top">
                  <div className="course-details__top-left">
                    {/* <h1 className="course-details__title">
                          {course.title}
                    </h1> */}

                    <h1 className="course-details__title">
                      Upcoming Classes
                    </h1>

                    <div style={{ display: 'inline-block' }}>
                      <img src={horizontal} alt="img" />
                    </div>

                    <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.9</span>
                      <span className="course-one__count">
                        <a href={course.acfcoursePage.options.trustPilotRating} className="course-one__category" target="__blank">
                          TrustPilot Rating
                        </a>
                      </span>

                      {/* <span className="course-one__count">
                          <a href="#table-responsive" className="course-one__category">
                              See Upcoming Courses Classes
                          </a>    
                      </span> */}

                    </div>
                  </div>




                  {/* <div className="course-details__top-right">
                    <a href="#none" className="course-one__category">
                      marketing
                    </a>
                  </div> */}
                </div>


                {/* Schedule */}
                <div className="table-responsive" id="table-responsive" >
                  <br />
                  {/* <h2 style={{color:"black"}}>Upcoming Classes</h2> */}

                  {/* <div style={{display : 'inline-block'}}>
                                <img src={horizontal}  alt="img"/>
                              </div> */}

                  <CourseEnrollTable messages={course} />

                </div>


                <div className="course-one__image">
                  <i className="far fa-heart"></i>
                </div>

                <div className="course-details__tab-navs list-unstyled">

                  {/* 3 Tab Sections */}
                  <ul className="nav nav-tabs" id="myTab" role="tablist">

                    <li className="nav-item" role="presentation">
                      <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                    </li>

                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Curriculum</button>
                    </li>

                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Who can attend</button>
                    </li>

                  </ul>

                </div>

                <div className="tab-content tab-content course-details__tab-content" id="myTabContent">

                  <div className="tab-pane show active animated fade" id="home" role="tabpanel" aria-labelledby="home-tab">

                    {/* <p className="course-details__tab-text">
                          {course.acfcoursePage.options.title}
                    </p>
                    <br /> */}
                    <p className="course-details__tab-text makingblack">
                      <h2 style={{ color: "red" }}>
                        Course Details
                      </h2>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.thecourse }} />
                    </p>

                    <p className="course-details__tab-text makingblack" >
                      <h2 style={{ color: "red" }}>Certificate</h2>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.certificate }} />
                    </p>

                    <p className="course-details__tab-text makingblack" >
                      <h2 style={{ color: "red" }}>Why tryScrum</h2>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.why }} />
                    </p>

                    <iframe width="560" height="315"
                      src={course.acfcoursePage.options.video}
                      title="tryScrum"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      frameBorder="0"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allowFullScreen
                    />

                    <p className="course-details__tab-text makingblack" >
                      <h2 style={{ color: "red" }}>Course Fee</h2>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.feeStructure }} />
                    </p>

                    <ul className="list-unstyled course-details__tab-text makingblack" >
                      <h2 style={{ color: "red" }}>Virtual class Instructions</h2>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.instructions }} />
                      <li>
                        <a href="/virtual-class-special-instructions/" target="__blank">
                          Special instructions</a>
                      </li>
                    </ul>

                  </div>

                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                    <p className="course-details__tab-text makingblack" >
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.curriculum }} />
                    </p>
                    <br />

                  </div>

                  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                    <p className="makingblack">
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.whoCanAttend }} />
                    </p>
                    <br />

                  </div>

                </div>


              </div>



            </div>

            <div className="col-lg-3">

              <div className="course-details__price">
                <a href="#faq"  className="thm-btn course-details__price-btn hide_mobile" >
                  FAQ'S
                </a>
              </div>



              <div className="course-details__meta">
                <div className="course-details__meta-link" style={{ padding: "10px" }}>
                  <span className="course-details__meta-icon">
                    <i className="far fa-clock"></i>
                  </span>
                  Prerequisites: <span>{course.acfcoursePage.options.prerequisites}</span>
                </div>
                <div className="course-details__meta-link" style={{ padding: "10px" }}>
                  <span className="course-details__meta-icon">
                    <i className="far fa-folder-open"></i>
                  </span>
                  Duration: <span>{course.acfcoursePage.options.duration}</span>
                </div>
                <div className="course-details__meta-link" style={{ padding: "10px" }}>
                  <span className="course-details__meta-icon">
                    <i className="far fa-user-circle"></i>
                  </span>
                  Delivery: <span>Remote</span>
                </div>

                <div className="course-details__meta-link" style={{ padding: "10px" }}>
                  <span className="course-details__meta-icon">
                    <i className="far fa-flag"></i>
                  </span>
                  Certification Body: <span>{course.acfcoursePage.options.certificationBody}</span>
                </div>


                <div className="course-details__meta-link" style={{ padding: "10px" }}>
                  {/* <a href="#none" className="course-details__meta-link"> */}
                  <span className="course-details__meta-icon">
                    <i className="far fa-flag"></i>
                  </span>
                  PDU & SEUs: <span>{course.acfcoursePage.options.pduScrumAllianceSeus}</span>
                  {/* </a> */}
                </div>

                <div className="course-details__meta-link" style={{ padding: "10px" }}>
                  <span className="course-details__meta-icon">
                    <i className="fas fa-play"></i>
                  </span>Included:

                </div>
                <div className="course-details__meta-link" style={{ padding: "10px" }}>
                  <span>
                    <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.included }} />
                  </span>
                </div>


                <div className="course-details__price">
                  <p className="course-details__price-text">Request More Info </p>
                  <br />

                  <form
                    action="#"
                    method="POST"
                  >

                    <div className="form-group">

                      <input type="text" className="form-control" placeholder="Your Name" name="name" value={state.name} onChange={handleInputChange} />
                      <small style={{ color: "red" }}>{errors.name}</small>

                    </div>

                    <div className="form-group">

                      <input type="text" className="form-control" placeholder="Email Address" name="email" value={state.email} onChange={handleInputChange} />
                      <small style={{ color: "red" }}>{errors.email}</small>

                    </div>

                    <div className="form-group">

                      <input type="text" className="form-control" placeholder="Phone Number" name="phone" value={state.phone} onChange={handleInputChange} />
                      <small style={{ color: "red" }}>{errors.phone}</small>

                    </div>

                    <div className="form-group">

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Message"
                        name="message"
                        value={state.message}
                        onChange={handleInputChange}
                      />
                      <small style={{ color: "red" }}>{errors.message}</small>

                    </div>

                    {/* <button type="submit" className="btn btn-primary" onClick={submitHandler} >Submit</button> */}
                    {loader == 'loading' ? <button
                      type="submit"
                      onClick={submitHandler}
                      className="btn btn-primary ml-0"
                      disabled
                    >Submit<div class="loader"></div></button> : <button
                      type="submit"
                      onClick={submitHandler}
                      className="btn btn-primary ml-0"
                    >Submit</button>}
                    <small style={{ color: "green" }}>{submissionMessage}</small>

                  </form>

                </div>



              </div>
              {/* Relevant Courses */}
              <CourseCategoryFilter name={categoryValue} title={data.wpPost.title} />


            </div>

            {course.acfcoursePage.faq1.heading === "" ? "" :
              <div id="faq">
                <h2 style={{ color: "black", marginTop: "10px" , scrollPaddingTop: "100px"}} >Frequently Asked Questions</h2>
                <div style={{ display: 'inline-block' }} >
                  <img src={horizontal} width="450px" alt="img" />
                </div>
              </div>
            }

            <div style={{ marginTop: "20px" }} class="accordion gotofaq" id="accordionExample" >

              {course.acfcoursePage.faq1.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      {/* What does the registration fee include? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.heading }} />
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* The registration fee includes the fees for classroom training, the study material, exam fees. */}
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.content }} />
                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq2.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      {/* How many attempts do i get if I attend the classroom training? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.heading }} />
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">


                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.content }} />
                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq3.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      {/* Which Course is right for me? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.heading }} />
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Even though it depends on your role and passion, our trainers tried to implement some recommendations based on their experience. Please visit the <a href="/which-scrum-role-is-right-for-me/" target="__blank">link</a> here to go through our recommendations.
         */}
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.content }} />
                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq4.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      {/* How Do I Obtain an Invoice Receipt or Proof of Payment for My Order? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.heading }} />
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* After placing your order, you will receive a confirmation email with a link to download your invoice as a PDF. If the email does not have this link, please send a message to <a href="mailto support@tryscrum.com"> support@tryscrum.com </a> referencing your order number.
        */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.content }} />
                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq5.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      {/* What if I do not receive a confirmation of My Order? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.heading }} />
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
         */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.content }} />
                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq6.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.heading }} />
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
         */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq7.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                      {/* What if I do not receive a confirmation of My Order? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.heading }} />
                    </button>
                  </h2>
                  <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
         */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.content }} />
                    </div>
                  </div>
                </div>
              }


              {course.acfcoursePage.faq8.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEight">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.heading }} />
                    </button>
                  </h2>
                  <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
         */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq9.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingNine">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.heading }} />
                    </button>
                  </h2>
                  <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
       */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq10.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.heading }} />
                    </button>
                  </h2>
                  <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq11.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEleven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.heading }} />
                    </button>
                  </h2>
                  <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq12.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwelve">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.heading }} />
                    </button>
                  </h2>
                  <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq13.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThirteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.heading }} />
                    </button>
                  </h2>
                  <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq14.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFourteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.heading }} />
                    </button>
                  </h2>
                  <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq15.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFifteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.heading }} />
                    </button>
                  </h2>
                  <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq16.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSixteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.heading }} />
                    </button>
                  </h2>
                  <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq17.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeventeen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.heading }} />
                    </button>
                  </h2>
                  <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq18.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEighteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.heading }} />
                    </button>
                  </h2>
                  <div id="collapseEighteen" className="accordion-collapse collapse" aria-labelledby="headingEighteen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq19.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingNineteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.heading }} />
                    </button>
                  </h2>
                  <div id="collapseNineteen" className="accordion-collapse collapse" aria-labelledby="headingNineteen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq20.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwenty">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.heading }} />
                    </button>
                  </h2>
                  <div id="collapseTwenty" className="accordion-collapse collapse" aria-labelledby="headingTwenty" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.content }} />

                    </div>
                  </div>
                </div>
              }

            </div>

          </div>

        </section>


        <Footer />
      </Layout>



    )

  } else if (course.title === "Advanced Scrum Master (PSM II)") {

    return (

      // <Layout pageTitle="tryScrum | Course Details">
      <Layout pageTitle={title} metaDesc={metadesc} pageName={fimg} pageloc="individual" >
        <NavTwo />

        {/* <PageHeader title="Course Details" />  */}

        <div>

          <div className="courseStripePSM">

            <ul className="list-unstyled thm-breadcrumb" >
              <li style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237" }} to="/">Home</Link>
              </li>
              <li className="active" style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237", fontWeight: "bold" }} to="/courses">Courses</Link>
              </li>
            </ul>

            <p className="newCoursePageImg2" style={{ marginLeft: "10px" }}>
              <img src={asm2logo} alt="" style={{ width: 120, height: 120 }} />
              <div>
                <h2 style={{ marginLeft: "10px", marginTop: "20px", color: "#052237", fontWeight: "bold" }}> {course.title} </h2>
                <br />
                <div className="badges-top" style={{ marginLeft: "10px" }}>
                  {/* <span className="badge badge-certified">Certified</span> */}
                  <span className="badge badge-live-online">Live Online</span>
                  <span className="badge badge-in-person">In Person</span>
                </div>
              </div>
            </p>

          </div>

          <div className="courseStripe2">

            <div className="modal-body row">
              <div className="col-md-6">

                <div class="content">
                  <h2 class="h1 bordered">Become an exceptional Scrum Master&nbsp;</h2>
                  <h2 style={{ fontSize: "22px" }} > There are a ton of credentials for Scrum Masters. But, the PSM II training focuses on skills and traits needed to grow as a Scrum Master. PSM II from tryScrum is one of the highly-rated workshops by more than 100 Scrum Masters. </h2>

                  <div className="hide_mobile">

                    <img src={leftImg} style={{ width: "50%", height: "40%" }} />

                    <img src={rightImg} style={{ width: "50%", height: "40%" }} />

                  </div>

                </div>

              </div>
              <div className="col-md-6">

                <div className="imageNewCourse">
                  <img src={apsm} alt="banner-csm" />
                </div>

              </div>
            </div>
          </div>

        </div>



        <section className="course-details">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9">
                <div className="course-details__content">
                  {/* <p className="course-details__author">
  
                  <img src={fimg} alt="" style={{ width: 420, height: 300 }} />
                  
                </p> */}

                  <div className="course-details__top">
                    <div className="course-details__top-left">
                      {/* <h1 className="course-details__title">
                          {course.title}
                    </h1> */}

                      <h1 className="course-details__title">
                        Upcoming Classes
                      </h1>

                      <div style={{ display: 'inline-block' }}>
                        <img src={horizontal} alt="img" />
                      </div>


                      <div className="course-one__stars">
                        <span className="course-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="course-one__count">4.9</span>
                        <span className="course-one__count">
                          <a href={course.acfcoursePage.options.trustPilotRating} className="course-one__category" target="__blank">
                            TrustPilot Rating
                          </a>
                        </span>


                      </div>
                    </div>




                  </div>


                  {/* Schedule */}
                  <div className="table-responsive" id="table-responsive" >
                    <br />

                    <CourseEnrollTable messages={course} />

                  </div>


                  <div className="course-one__image">
                    <i className="far fa-heart"></i>
                  </div>

                  <div className="course-details__tab-navs list-unstyled">

                    {/* 3 Tab Sections */}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">

                      <li className="nav-item" role="presentation">
                        <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Curriculum</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Who can attend</button>
                      </li>

                    </ul>

                  </div>

                  <div className="tab-content tab-content course-details__tab-content" id="myTabContent">

                    <div className="tab-pane show active animated fade" id="home" role="tabpanel" aria-labelledby="home-tab">


                      <p className="course-details__tab-text makingblack">
                        <h2 style={{ color: "red" }}>
                          Course Details
                        </h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.thecourse }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Certificate</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.certificate }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Why tryScrum</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.why }} />
                      </p>

                      <iframe width="560" height="315"
                        src={course.acfcoursePage.options.video}
                        title="tryScrum"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                      />

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Course Fee</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.feeStructure }} />
                      </p>

                      <ul className="list-unstyled course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Virtual class Instructions</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.instructions }} />
                        <li>
                          <a href="/virtual-class-special-instructions/" target="__blank">
                            Special instructions</a>
                        </li>
                      </ul>

                    </div>

                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                      <p className="course-details__tab-text makingblack" >
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.curriculum }} />
                      </p>
                      <br />

                    </div>

                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                      <p className="makingblack">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.whoCanAttend }} />
                      </p>
                      <br />

                    </div>

                  </div>

                </div>



              </div>

              <div className="col-lg-3">

                <div className="course-details__price">

                  <a href="#faq" className="thm-btn course-details__price-btn hide_mobile" >
                    FAQ'S
                  </a>

                </div>



                <div className="course-details__meta">
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-clock"></i>
                    </span>
                    Prerequisites: <span>{course.acfcoursePage.options.prerequisites}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-folder-open"></i>
                    </span>
                    Duration: <span>{course.acfcoursePage.options.duration}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-user-circle"></i>
                    </span>
                    Delivery: <span>Remote</span>
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    Certification Body: <span>{course.acfcoursePage.options.certificationBody}</span>
                  </div>


                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    {/* <a href="#none" className="course-details__meta-link"> */}
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    PDU & SEUs: <span>{course.acfcoursePage.options.pduScrumAllianceSeus}</span>
                    {/* </a> */}
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="fas fa-play"></i>
                    </span>Included:

                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.included }} />
                    </span>
                  </div>

                  <div className="course-details__price">
                    <p className="course-details__price-text">Request More Info </p>
                    <br />

                    <form
                      action="#"
                      method="POST"
                    >

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Your Name" name="name" value={state.name} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.name}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Email Address" name="email" value={state.email} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.email}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Phone Number" name="phone" value={state.phone} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.phone}</small>

                      </div>

                      <div className="form-group">

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Message"
                          name="message"
                          value={state.message}
                          onChange={handleInputChange}
                        />
                        <small style={{ color: "red" }}>{errors.message}</small>

                      </div>

                      {/* <button type="submit" className="btn btn-primary" onClick={submitHandler} >Submit</button> */}
                      {loader == 'loading' ? <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                        disabled
                      >Submit<div class="loader"></div></button> : <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                      >Submit</button>}
                      <small style={{ color: "green" }}>{submissionMessage}</small>

                    </form>

                  </div>

                </div>

                {/* Relevant Courses */}
                <CourseCategoryFilter name={categoryValue} title={data.wpPost.title} />



              </div>

              {course.acfcoursePage.faq1.heading === "" ? "" :
                <div id="faq">
                  <h2 style={{ color: "black", marginTop: "10px" , scrollPaddingTop: "100px"}}>Frequently Asked Questions</h2>
                  <div style={{ display: 'inline-block' }} >
                    <img src={horizontal} width="450px" alt="img" />
                  </div>
                </div>
              }

              <div style={{ marginTop: "20px" }} class="accordion gotofaq" id="accordionExample">

                {course.acfcoursePage.faq1.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {/* What does the registration fee include? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.heading }} />
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* The registration fee includes the fees for classroom training, the study material, exam fees. */}
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq2.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {/* How many attempts do i get if I attend the classroom training? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq3.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        {/* Which Course is right for me? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq4.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        {/* How Do I Obtain an Invoice Receipt or Proof of Payment for My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After placing your order, you will receive a confirmation email with a link to download your invoice as a PDF. If the email does not have this link, please send a message to <a href="mailto support@tryscrum.com"> support@tryscrum.com </a> referencing your order number.
        */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq5.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
         */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq6.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
         */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq7.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
         */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.content }} />
                      </div>
                    </div>
                  </div>
                }


                {course.acfcoursePage.faq8.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
         */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq9.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
       */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq10.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq11.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEleven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq12.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwelve">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq13.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThirteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq14.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFourteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq15.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFifteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq16.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSixteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq17.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeventeen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq18.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEighteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEighteen" className="accordion-collapse collapse" aria-labelledby="headingEighteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq19.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNineteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNineteen" className="accordion-collapse collapse" aria-labelledby="headingNineteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq20.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwenty">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwenty" className="accordion-collapse collapse" aria-labelledby="headingTwenty" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.content }} />

                      </div>
                    </div>
                  </div>
                }

              </div>

            </div>
          </div>
        </section>


        <Footer />
      </Layout>


    )

  }
  // PSPO 1
  else if (course.title === "Professional Scrum Product Owner(PSPO I)") {

    return (

      // <Layout pageTitle="tryScrum | Course Details">
      <Layout pageTitle={title} metaDesc={metadesc} pageName={fimg} pageloc="individual" >
        <NavTwo />

        {/* <PageHeader title="Course Details" />  */}

        <div>

          <div className="courseStripePSM">

            <ul className="list-unstyled thm-breadcrumb" >
              <li style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237" }} to="/">Home</Link>
              </li>
              <li className="active" style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237", fontWeight: "bold" }} to="/courses">Courses</Link>
              </li>
            </ul>

            <p className="newCoursePageImg2" style={{ marginLeft: "10px" }}>
              <img src={pspo1logo} alt="" style={{ width: 120, height: 120 }} />
              <div>
                <h2 style={{ marginLeft: "10px", marginTop: "20px", color: "#052237", fontWeight: "bold" }}> {course.title} </h2>
                <br />
                <div className="badges-top" style={{ marginLeft: "10px" }} >
                  {/* <span className="badge badge-certified">Certified</span> */}
                  <span className="badge badge-live-online">Live Online</span>
                  <span className="badge badge-in-person">In Person</span>
                </div>
              </div>
            </p>

          </div>

          <div className="courseStripePSPO1">

            <div className="modal-body row">
              <div className="col-md-6">

                <div className="content">

                  <h2 class="h1 bordered">Become a Skilled Product Owner&nbsp;</h2>
                  <h2 style={{ fontSize: "22px" }}>Our Scrum Product Owner workshop is intense and creative. You'll not only understand the roles and responsibilities of a product owner, but you'll also learn how to maximise value from the Scrum team's work.  </h2>

                  <div className="hide_mobile">

                    <img src={leftImg} style={{ width: "50%", height: "40%" }} />

                    <img src={rightImg} style={{ width: "50%", height: "40%" }} />

                  </div>

                </div>

              </div>
              <div className="col-md-6">

                <div className="imageNewCourse">

                  <img src={pspo1} alt="banner-csm" />

                </div>

              </div>
            </div>
          </div>

        </div>



        <section className="course-details">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9">
                <div className="course-details__content">
                  {/* <p className="course-details__author">
  
                  <img src={fimg} alt="" style={{ width: 420, height: 300 }} />
                  
                </p> */}

                  <div className="course-details__top">
                    <div className="course-details__top-left">
                      {/* <h1 className="course-details__title">
                          {course.title}
                    </h1> */}

                      <h1 className="course-details__title">
                        Upcoming Classes
                      </h1>

                      <div style={{ display: 'inline-block' }}>
                        <img src={horizontal} alt="img" />
                      </div>

                      <div className="course-one__stars">
                        <span className="course-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="course-one__count">4.9</span>
                        <span className="course-one__count">
                          <a href={course.acfcoursePage.options.trustPilotRating} className="course-one__category" target="__blank">
                            TrustPilot Rating
                          </a>
                        </span>

                        {/* <span className="course-one__count">
                          <a href="#table-responsive" className="course-one__category">
                              See Upcoming Courses Classes
                          </a>    
                      </span> */}

                      </div>
                    </div>




                    {/* <div className="course-details__top-right">
                    <a href="#none" className="course-one__category">
                      marketing
                    </a>
                  </div> */}
                  </div>


                  {/* Schedule */}
                  <div className="table-responsive" id="table-responsive" >
                    <br />
                    {/* <h2 style={{color:"black"}}>Upcoming Classes</h2> */}

                    {/* <div style={{display : 'inline-block'}}>
                                <img src={horizontal}  alt="img"/>
                              </div> */}

                    <CourseEnrollTable messages={course} />

                  </div>


                  <div className="course-one__image">
                    <i className="far fa-heart"></i>
                  </div>

                  <div className="course-details__tab-navs list-unstyled">

                    {/* 3 Tab Sections */}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">

                      <li className="nav-item" role="presentation">
                        <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Curriculum</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Who can attend</button>
                      </li>

                    </ul>

                  </div>

                  <div className="tab-content tab-content course-details__tab-content" id="myTabContent">

                    <div className="tab-pane show active animated fade" id="home" role="tabpanel" aria-labelledby="home-tab">

                      {/* <p className="course-details__tab-text">
                          {course.acfcoursePage.options.title}
                    </p>
                    <br /> */}
                      <p className="course-details__tab-text makingblack">
                        <h2 style={{ color: "red" }}>
                          Course Details
                        </h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.thecourse }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Certificate</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.certificate }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Why tryScrum</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.why }} />
                      </p>

                      <iframe width="560" height="315"
                        src={course.acfcoursePage.options.video}
                        title="tryScrum"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                      />

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Course Fee</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.feeStructure }} />
                      </p>

                      <ul className="list-unstyled course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Virtual class Instructions</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.instructions }} />
                        <li>
                          <a href="/virtual-class-special-instructions/" target="__blank">
                            Special instructions</a>
                        </li>
                      </ul>

                    </div>

                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                      <p className="course-details__tab-text makingblack" >
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.curriculum }} />
                      </p>
                      <br />

                    </div>

                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                      <p className="makingblack">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.whoCanAttend }} />
                      </p>
                      <br />

                    </div>

                  </div>


                </div>



              </div>

              <div className="col-lg-3">

                <div className="course-details__price">
                  <a href="#faq" className="thm-btn course-details__price-btn hide_mobile" >
                    FAQ'S
                  </a>
                </div>



                <div className="course-details__meta">
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-clock"></i>
                    </span>
                    Prerequisites: <span>{course.acfcoursePage.options.prerequisites}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-folder-open"></i>
                    </span>
                    Duration: <span>{course.acfcoursePage.options.duration}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-user-circle"></i>
                    </span>
                    Delivery: <span>Remote</span>
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    Certification Body: <span>{course.acfcoursePage.options.certificationBody}</span>
                  </div>


                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    {/* <a href="#none" className="course-details__meta-link"> */}
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    PDU & SEUs: <span>{course.acfcoursePage.options.pduScrumAllianceSeus}</span>
                    {/* </a> */}
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="fas fa-play"></i>
                    </span>Included:

                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.included }} />
                    </span>
                  </div>


                  <div className="course-details__price">
                    <p className="course-details__price-text">Request More Info </p>
                    <br />

                    <form
                      action="#"
                      method="POST"
                    >

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Your Name" name="name" value={state.name} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.name}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Email Address" name="email" value={state.email} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.email}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Phone Number" name="phone" value={state.phone} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.phone}</small>

                      </div>

                      <div className="form-group">

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Message"
                          name="message"
                          value={state.message}
                          onChange={handleInputChange}
                        />
                        <small style={{ color: "red" }}>{errors.message}</small>

                      </div>

                      {/* <button type="submit" className="btn btn-primary" onClick={submitHandler} >Submit</button> */}
                      {loader == 'loading' ? <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                        disabled
                      >Submit<div class="loader"></div></button> : <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                      >Submit</button>}
                      <small style={{ color: "green" }}>{submissionMessage}</small>

                    </form>

                  </div>

                </div>

                {/* Relevant Courses */}
                <CourseCategoryFilter name={categoryValue} title={data.wpPost.title} />

              </div>

              {course.acfcoursePage.faq1.heading === "" ? "" :
                <div id="faq">
                  <h2 style={{ color: "black", marginTop: "10px" , scrollPaddingTop: "100px"}} >Frequently Asked Questions</h2>
                  <div style={{ display: 'inline-block' }} >
                    <img src={horizontal} width="450px" alt="img" />
                  </div>
                </div>
              }

              <div style={{ marginTop: "20px" }} class="accordion gotofaq" id="accordionExample">

                {course.acfcoursePage.faq1.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {/* What does the registration fee include? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.heading }} />
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* The registration fee includes the fees for classroom training, the study material, exam fees. */}
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq2.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {/* How many attempts do i get if I attend the classroom training? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">


                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq3.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        {/* Which Course is right for me? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Even though it depends on your role and passion, our trainers tried to implement some recommendations based on their experience. Please visit the <a href="/which-scrum-role-is-right-for-me/" target="__blank">link</a> here to go through our recommendations.
         */}
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq4.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        {/* How Do I Obtain an Invoice Receipt or Proof of Payment for My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After placing your order, you will receive a confirmation email with a link to download your invoice as a PDF. If the email does not have this link, please send a message to <a href="mailto support@tryscrum.com"> support@tryscrum.com </a> referencing your order number.
        */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq5.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
         */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq6.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
         */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq7.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
         */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.content }} />
                      </div>
                    </div>
                  </div>
                }


                {course.acfcoursePage.faq8.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
         */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq9.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
       */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq10.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq11.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEleven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq12.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwelve">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq13.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThirteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq14.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFourteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq15.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFifteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq16.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSixteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq17.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeventeen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq18.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEighteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEighteen" className="accordion-collapse collapse" aria-labelledby="headingEighteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq19.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNineteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNineteen" className="accordion-collapse collapse" aria-labelledby="headingNineteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq20.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwenty">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwenty" className="accordion-collapse collapse" aria-labelledby="headingTwenty" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.content }} />

                      </div>
                    </div>
                  </div>
                }

              </div>

            </div>
          </div>
        </section>


        <Footer />
      </Layout>



    )

  } else if (course.title === "Advanced Product Owner (PSPO-A)") {

    return (

      // <Layout pageTitle="tryScrum | Course Details">
      <Layout pageTitle={title} metaDesc={metadesc} pageName={fimg} pageloc="individual" >
        <NavTwo />

        {/* <PageHeader title="Course Details" />  */}

        <div>

          <div className="courseStripePSM">

            <ul className="list-unstyled thm-breadcrumb" >
              <li style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237" }} to="/">Home</Link>
              </li>
              <li className="active" style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237", fontWeight: "bold" }} to="/courses">Courses</Link>
              </li>
            </ul>

            <p className="newCoursePageImg2" style={{ marginLeft: "10px" }}>
              <img src={pspoa} alt="" style={{ width: 120, height: 120 }} />
              <div>
                <h2 style={{ marginLeft: "10px", marginTop: "20px", color: "#052237", fontWeight: "bold" }}> {course.title} </h2>
                <br />
                <div className="badges-top" style={{ marginLeft: "10px" }}>
                  {/* <span className="badge badge-certified">Certified</span> */}
                  <span className="badge badge-live-online">Live Online</span>
                  <span className="badge badge-in-person">In Person</span>
                </div>
              </div>
            </p>

          </div>

          <div className="courseStripePSPO1">

            <div className="modal-body row">
              <div className="col-md-6">

                <div class="content">

                  <h2 class="h1 bordered">Become an exceptional Product Owner&nbsp;</h2>
                  <h2 style={{ fontSize: "22px" }} > There are a ton of credentials for Product Managers. But, the PSPO-A workshop focus on skills and traits needed to grow as a Product Manager. Over the two days, students will learn about areas critical to growing as a successful Product Owner. </h2>

                  <div className="hide_mobile">

                    <img src={leftImg} style={{ width: "50%", height: "40%" }} />

                    <img src={rightImg} style={{ width: "50%", height: "40%" }} />

                  </div>

                </div>

              </div>
              <div className="col-md-6">

                <div className="imageNewCourse">
                  <img src={pspo2} alt="banner-csm" />
                </div>

              </div>
            </div>
          </div>

        </div>



        <section className="course-details">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9">
                <div className="course-details__content">
                  {/* <p className="course-details__author">
  
                  <img src={fimg} alt="" style={{ width: 420, height: 300 }} />
                  
                </p> */}

                  <div className="course-details__top">
                    <div className="course-details__top-left">
                      {/* <h1 className="course-details__title">
                          {course.title}
                    </h1> */}

                      <h1 className="course-details__title">
                        Upcoming Classes
                      </h1>

                      <div style={{ display: 'inline-block' }}>
                        <img src={horizontal} alt="img" />
                      </div>


                      <div className="course-one__stars">
                        <span className="course-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="course-one__count">4.9</span>
                        <span className="course-one__count">
                          <a href={course.acfcoursePage.options.trustPilotRating} className="course-one__category" target="__blank">
                            TrustPilot Rating
                          </a>
                        </span>


                      </div>
                    </div>




                  </div>


                  {/* Schedule */}
                  <div className="table-responsive" id="table-responsive" >
                    <br />

                    <CourseEnrollTable messages={course} />

                  </div>


                  <div className="course-one__image">
                    <i className="far fa-heart"></i>
                  </div>

                  <div className="course-details__tab-navs list-unstyled">

                    {/* 3 Tab Sections */}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">

                      <li className="nav-item" role="presentation">
                        <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Curriculum</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Who can attend</button>
                      </li>

                    </ul>

                  </div>

                  <div className="tab-content tab-content course-details__tab-content" id="myTabContent">

                    <div className="tab-pane show active animated fade" id="home" role="tabpanel" aria-labelledby="home-tab">


                      <p className="course-details__tab-text makingblack">
                        <h2 style={{ color: "red" }}>
                          Course Details
                        </h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.thecourse }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Certificate</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.certificate }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Why tryScrum</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.why }} />
                      </p>

                      <iframe width="560" height="315"
                        src={course.acfcoursePage.options.video}
                        title="tryScrum"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                      />

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Course Fee</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.feeStructure }} />
                      </p>

                      <ul className="list-unstyled course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Virtual class Instructions</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.instructions }} />
                        <li>
                          <a href="/virtual-class-special-instructions/" target="__blank">
                            Special instructions</a>
                        </li>
                      </ul>

                    </div>

                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                      <p className="course-details__tab-text makingblack" >
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.curriculum }} />
                      </p>
                      <br />

                    </div>

                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                      <p className="makingblack">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.whoCanAttend }} />
                      </p>
                      <br />

                    </div>

                  </div>

                </div>



              </div>

              <div className="col-lg-3">

                <div className="course-details__price">

                  <a href="#faq" className="thm-btn course-details__price-btn hide_mobile" >
                    FAQ'S
                  </a>

                </div>



                <div className="course-details__meta">
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-clock"></i>
                    </span>
                    Prerequisites: <span>{course.acfcoursePage.options.prerequisites}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-folder-open"></i>
                    </span>
                    Duration: <span>{course.acfcoursePage.options.duration}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-user-circle"></i>
                    </span>
                    Delivery: <span>Remote</span>
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    Certification Body: <span>{course.acfcoursePage.options.certificationBody}</span>
                  </div>


                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    {/* <a href="#none" className="course-details__meta-link"> */}
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    PDU & SEUs: <span>{course.acfcoursePage.options.pduScrumAllianceSeus}</span>
                    {/* </a> */}
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="fas fa-play"></i>
                    </span>Included:

                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.included }} />
                    </span>
                  </div>

                  <div className="course-details__price">
                    <p className="course-details__price-text">Request More Info </p>
                    <br />

                    <form
                      action="#"
                      method="POST"
                    >

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Your Name" name="name" value={state.name} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.name}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Email Address" name="email" value={state.email} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.email}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Phone Number" name="phone" value={state.phone} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.phone}</small>

                      </div>

                      <div className="form-group">

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Message"
                          name="message"
                          value={state.message}
                          onChange={handleInputChange}
                        />
                        <small style={{ color: "red" }}>{errors.message}</small>

                      </div>

                      {/* <button type="submit" className="btn btn-primary" onClick={submitHandler} >Submit</button> */}
                      {loader == 'loading' ? <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                        disabled
                      >Submit<div class="loader"></div></button> : <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                      >Submit</button>}
                      <small style={{ color: "green" }}>{submissionMessage}</small>

                    </form>

                  </div>

                </div>

                {/* Relevant Courses */}
                <CourseCategoryFilter name={categoryValue} title={data.wpPost.title} />

              </div>

              {course.acfcoursePage.faq1.heading === "" ? "" :
                <div id="faq">
                  <h2 style={{ color: "black", marginTop: "10px" , scrollPaddingTop: "100px"}}>Frequently Asked Questions</h2>
                  <div style={{ display: 'inline-block' }} >
                    <img src={horizontal} width="450px" alt="img" />
                  </div>
                </div>
              }

              <div style={{ marginTop: "20px" }} class="accordion gotofaq" id="accordionExample">

                {course.acfcoursePage.faq1.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {/* What does the registration fee include? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.heading }} />
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* The registration fee includes the fees for classroom training, the study material, exam fees. */}
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq2.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {/* How many attempts do i get if I attend the classroom training? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq3.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        {/* Which Course is right for me? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq4.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        {/* How Do I Obtain an Invoice Receipt or Proof of Payment for My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After placing your order, you will receive a confirmation email with a link to download your invoice as a PDF. If the email does not have this link, please send a message to <a href="mailto support@tryscrum.com"> support@tryscrum.com </a> referencing your order number.
        */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq5.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
         */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq6.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
         */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq7.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
         */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.content }} />
                      </div>
                    </div>
                  </div>
                }


                {course.acfcoursePage.faq8.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
         */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq9.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
       */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq10.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq11.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEleven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq12.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwelve">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq13.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThirteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq14.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFourteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq15.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFifteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq16.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSixteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq17.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeventeen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq18.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEighteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEighteen" className="accordion-collapse collapse" aria-labelledby="headingEighteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq19.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNineteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNineteen" className="accordion-collapse collapse" aria-labelledby="headingNineteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq20.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwenty">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwenty" className="accordion-collapse collapse" aria-labelledby="headingTwenty" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.content }} />

                      </div>
                    </div>
                  </div>
                }

              </div>

            </div>
          </div>
        </section>


        <Footer />
      </Layout>


    )

  }
  // PSK
  else if (course.title === "Professional  Scrum with Kanban (PSK)") {

    return (

      // <Layout pageTitle="tryScrum | Course Details">
      <Layout pageTitle={title} metaDesc={metadesc} pageName={fimg} pageloc="individual" >
        <NavTwo />

        {/* <PageHeader title="Course Details" />  */}

        <div>

          <div className="courseStripePSM">

            <ul className="list-unstyled thm-breadcrumb" >
              <li style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237" }} to="/">Home</Link>
              </li>
              <li className="active" style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237", fontWeight: "bold" }} to="/courses">Courses</Link>
              </li>
            </ul>

            <p className="newCoursePageImg2" style={{ marginLeft: "10px" }}>
              <img src={pskLogo} alt="" style={{ width: 120, height: 120 }} />
              <div>
                <h2 style={{ marginLeft: "10px", marginTop: "20px", color: "#052237", fontWeight: "bold" }}> {course.title} </h2>
                <br />
                <div className="badges-top" style={{ marginLeft: "10px" }}>
                  {/* <span className="badge badge-certified">Certified</span> */}
                  <span className="badge badge-live-online">Live Online</span>
                  <span className="badge badge-in-person">In Person</span>
                </div>
              </div>
            </p>

          </div>

          <div className="courseStripePSK">

            <div className="modal-body row">
              <div className="col-md-6">

                <div class="content">
                  <h2 class="h1 bordered">Stand out as a Flow Coach&nbsp;</h2>
                  <h2 style={{ fontSize: "22px" }} > Scrum and Kanban can exist together. By taking this class, you will learn to optimise workflow in Scrum by leveraging Kanban practices.  </h2>

                  <div className="hide_mobile">

                    <img src={leftImg} style={{ width: "50%", height: "40%" }} />

                    <img src={rightImg} style={{ width: "50%", height: "40%" }} />

                  </div>

                </div>

              </div>
              <div className="col-md-6">

                <div className="imageNewCourse">
                  <img src={pskBannerImg} alt="banner-csm" />
                </div>

              </div>
            </div>
          </div>

        </div>



        <section className="course-details">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9">
                <div className="course-details__content">
                  {/* <p className="course-details__author">
  
                  <img src={fimg} alt="" style={{ width: 420, height: 300 }} />
                  
                </p> */}

                  <div className="course-details__top">
                    <div className="course-details__top-left">
                      {/* <h1 className="course-details__title">
                          {course.title}
                    </h1> */}

                      <h1 className="course-details__title">
                        Upcoming Classes
                      </h1>

                      <div style={{ display: 'inline-block' }}>
                        <img src={horizontal} alt="img" />
                      </div>


                      <div className="course-one__stars">
                        <span className="course-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="course-one__count">4.9</span>
                        <span className="course-one__count">
                          <a href={course.acfcoursePage.options.trustPilotRating} className="course-one__category" target="__blank">
                            TrustPilot Rating
                          </a>
                        </span>


                      </div>
                    </div>




                  </div>


                  {/* Schedule */}
                  <div className="table-responsive" id="table-responsive" >
                    <br />

                    <CourseEnrollTable messages={course} />

                  </div>


                  <div className="course-one__image">
                    <i className="far fa-heart"></i>
                  </div>

                  <div className="course-details__tab-navs list-unstyled">

                    {/* 3 Tab Sections */}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">

                      <li className="nav-item" role="presentation">
                        <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Curriculum</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Who can attend</button>
                      </li>

                    </ul>

                  </div>

                  <div className="tab-content tab-content course-details__tab-content" id="myTabContent">

                    <div className="tab-pane show active animated fade" id="home" role="tabpanel" aria-labelledby="home-tab">


                      <p className="course-details__tab-text makingblack">
                        <h2 style={{ color: "red" }}>
                          Course Details
                        </h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.thecourse }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Certificate</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.certificate }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Why tryScrum</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.why }} />
                      </p>

                      <iframe width="560" height="315"
                        src={course.acfcoursePage.options.video}
                        title="tryScrum"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                      />

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Course Fee</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.feeStructure }} />
                      </p>

                      <ul className="list-unstyled course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Virtual class Instructions</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.instructions }} />
                        <li>
                          <a href="/virtual-class-special-instructions/" target="__blank">
                            Special instructions</a>
                        </li>
                      </ul>

                    </div>

                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                      <p className="course-details__tab-text makingblack" >
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.curriculum }} />
                      </p>
                      <br />

                    </div>

                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                      <p className="makingblack">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.whoCanAttend }} />
                      </p>
                      <br />

                    </div>

                  </div>

                </div>



              </div>

              <div className="col-lg-3">

                <div className="course-details__price">

                  <a href="#faq"  className="thm-btn course-details__price-btn hide_mobile" >
                    FAQ'S
                  </a>

                </div>



                <div className="course-details__meta">
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-clock"></i>
                    </span>
                    Prerequisites: <span>{course.acfcoursePage.options.prerequisites}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-folder-open"></i>
                    </span>
                    Duration: <span>{course.acfcoursePage.options.duration}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-user-circle"></i>
                    </span>
                    Delivery: <span>Remote</span>
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    Certification Body: <span>{course.acfcoursePage.options.certificationBody}</span>
                  </div>


                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    {/* <a href="#none" className="course-details__meta-link"> */}
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    PDU & SEUs: <span>{course.acfcoursePage.options.pduScrumAllianceSeus}</span>
                    {/* </a> */}
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="fas fa-play"></i>
                    </span>Included:

                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.included }} />
                    </span>
                  </div>

                  <div className="course-details__price">
                    <p className="course-details__price-text">Request More Info </p>
                    <br />

                    <form
                      action="#"
                      method="POST"
                    >

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Your Name" name="name" value={state.name} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.name}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Email Address" name="email" value={state.email} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.email}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Phone Number" name="phone" value={state.phone} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.phone}</small>

                      </div>

                      <div className="form-group">

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Message"
                          name="message"
                          value={state.message}
                          onChange={handleInputChange}
                        />
                        <small style={{ color: "red" }}>{errors.message}</small>

                      </div>

                      {/* <button type="submit" className="btn btn-primary" onClick={submitHandler} >Submit</button> */}
                      {loader == 'loading' ? <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                        disabled
                      >Submit<div class="loader"></div></button> : <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                      >Submit</button>}
                      <small style={{ color: "green" }}>{submissionMessage}</small>

                    </form>

                  </div>

                </div>

                {/* Relevant Courses */}
                <CourseCategoryFilter name={categoryValue} title={data.wpPost.title} />

              </div>

              {course.acfcoursePage.faq1.heading === "" ? "" :
                <div id="faq">
                  <h2 style={{ color: "black", marginTop: "10px" , scrollPaddingTop: "100px"}}>Frequently Asked Questions</h2>
                  <div style={{ display: 'inline-block' }} >
                    <img src={horizontal} width="450px" alt="img" />
                  </div>
                </div>
              }

              <div style={{ marginTop: "20px" }} class="accordion gotofaq" id="accordionExample" >

                {course.acfcoursePage.faq1.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {/* What does the registration fee include? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.heading }} />
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* The registration fee includes the fees for classroom training, the study material, exam fees. */}
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq2.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {/* How many attempts do i get if I attend the classroom training? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq3.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        {/* Which Course is right for me? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq4.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        {/* How Do I Obtain an Invoice Receipt or Proof of Payment for My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After placing your order, you will receive a confirmation email with a link to download your invoice as a PDF. If the email does not have this link, please send a message to <a href="mailto support@tryscrum.com"> support@tryscrum.com </a> referencing your order number.
        */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq5.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
         */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq6.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
         */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq7.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
         */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.content }} />
                      </div>
                    </div>
                  </div>
                }


                {course.acfcoursePage.faq8.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
         */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq9.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
       */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq10.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq11.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEleven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq12.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwelve">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq13.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThirteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq14.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFourteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq15.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFifteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq16.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSixteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq17.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeventeen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq18.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEighteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEighteen" className="accordion-collapse collapse" aria-labelledby="headingEighteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq19.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNineteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNineteen" className="accordion-collapse collapse" aria-labelledby="headingNineteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq20.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwenty">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwenty" className="accordion-collapse collapse" aria-labelledby="headingTwenty" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.content }} />

                      </div>
                    </div>
                  </div>
                }

              </div>

            </div>
          </div>
        </section>


        <Footer />
      </Layout>


    )

  }

  // CAL COMBO
  else if (course.title === "Certified Agile Leadership -Combination") {

    return (

      // <Layout pageTitle="tryScrum | Course Details">
      <Layout pageTitle={title} metaDesc={metadesc} pageName={fimg} pageloc="individual" >
        <NavTwo />

        {/* <PageHeader title="Course Details" />  */}

        <div>

          <div className="courseStripePSM">

            <ul className="list-unstyled thm-breadcrumb" >
              <li style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237" }} to="/">Home</Link>
              </li>
              <li className="active" style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237", fontWeight: "bold" }} to="/courses">Courses</Link>
              </li>
            </ul>

            <p className="newCoursePageImg2" style={{ marginLeft: "10px" }}>
              <img src={calLogo} alt="" style={{ width: 120, height: 120 }} />
              <div>
                <h2 style={{ marginLeft: "10px", marginTop: "20px", color: "#052237", fontWeight: "bold" }}> {course.title} </h2>
                <br />
                <div className="badges-top" style={{ marginLeft: "10px" }}>
                  {/* <span className="badge badge-certified">Certified</span> */}
                  <span className="badge badge-live-online">Live Online</span>
                  <span className="badge badge-in-person">In Person</span>
                </div>
              </div>
            </p>

          </div>

          <div className="courseStripeCal">

            <div className="modal-body row">
              <div className="col-md-6">

                <div class="content">
                  <h2 class="h1 bordered">Become an inspiring Leader&nbsp;</h2>
                  <h2 style={{ fontSize: "22px" }} > The Certified Agile Leadership program with tryScrum is intense and transformative. This workshop uses promising leadership models that equip agile leaders to build a capable and resilient workplace in a complex environment. </h2>

                  <div className="hide_mobile">

                    <img src={leftImg} style={{ width: "50%", height: "40%" }} />

                    <img src={rightImg} style={{ width: "50%", height: "40%" }} />

                  </div>

                  <div className="hide_mobile">

                    <BrochureCAL />
                    {/* <img src={cceLogo} height="90px" width="200px" style={{ marginLeft: "27%", marginTop: "" }} /> */}

                  </div>

                </div>

              </div>
              <div className="col-md-6">

                <div className="imageNewCourse">
                  <img src={calBannerImg} alt="banner-csm" />
                </div>

              </div>
            </div>
          </div>

        </div>



        <section className="course-details">

          <div className="row" >
            <div className="col-lg-9">
              <div className="course-details__content">
                {/* <p className="course-details__author">
  
                  <img src={fimg} alt="" style={{ width: 420, height: 300 }} />
                  
                </p> */}

                <div className="course-details__top">
                  <div className="course-details__top-left">
                    {/* <h1 className="course-details__title">
                          {course.title}
                    </h1> */}

                    <h1 className="course-details__title">
                      Upcoming Classes
                    </h1>

                    <div style={{ display: 'inline-block' }}>
                      <img src={horizontal} alt="img" />
                    </div>


                    <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.9</span>
                      <span className="course-one__count">
                        <a href={course.acfcoursePage.options.trustPilotRating} className="course-one__category" target="__blank">
                          TrustPilot Rating
                        </a>
                      </span>


                    </div>
                  </div>




                </div>


                {/* Schedule */}
                <div className="table-responsive" id="table-responsive" >
                  <br />

                  <CourseEnrollTable messages={course} />

                </div>


                <div className="course-one__image">
                  <i className="far fa-heart"></i>
                </div>

                <div className="course-details__tab-navs list-unstyled">

                  {/* 3 Tab Sections */}
                  <ul className="nav nav-tabs" id="myTab" role="tablist">

                    <li className="nav-item" role="presentation">
                      <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                    </li>

                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Curriculum</button>
                    </li>

                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Who can attend</button>
                    </li>

                  </ul>

                </div>

                <div className="tab-content tab-content course-details__tab-content" id="myTabContent">

                  <div className="tab-pane show active animated fade" id="home" role="tabpanel" aria-labelledby="home-tab">


                    <p className="course-details__tab-text makingblack">
                      <h2 style={{ color: "red" }}>
                        Course Details
                      </h2>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.thecourse }} />
                    </p>

                    <p className="course-details__tab-text makingblack" >
                      <h2 style={{ color: "red" }}>Certificate</h2>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.certificate }} />
                    </p>

                    <p className="course-details__tab-text makingblack" >
                      <h2 style={{ color: "red" }}>Why tryScrum</h2>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.why }} />
                    </p>

                    <iframe width="560" height="315"
                      src={course.acfcoursePage.options.video}
                      title="tryScrum"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      frameBorder="0"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allowFullScreen
                    />

                    <p className="course-details__tab-text makingblack" >
                      <h2 style={{ color: "red" }}>Course Fee</h2>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.feeStructure }} />
                    </p>

                    <ul className="list-unstyled course-details__tab-text makingblack" >
                      <h2 style={{ color: "red" }}>Virtual class Instructions</h2>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.instructions }} />
                      <li>
                        <a href="/virtual-class-special-instructions/" target="__blank">
                          Special instructions</a>
                      </li>
                    </ul>

                  </div>

                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                    <p className="course-details__tab-text makingblack" >
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.curriculum }} />
                    </p>
                    <br />

                  </div>

                  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                    <p className="makingblack">
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.whoCanAttend }} />
                    </p>
                    <br />

                  </div>

                </div>

              </div>



            </div>

            <div className="col-lg-3">

              <div className="course-details__price">

                <a href="#faq"  className="thm-btn course-details__price-btn hide_mobile" >
                  FAQ'S
                </a>

              </div>



              <div className="course-details__meta" >
                <div className="course-details__meta-link" style={{ padding: "10px" }}>
                  <span className="course-details__meta-icon">
                    <i className="far fa-clock"></i>
                  </span>
                  Prerequisites: <span>{course.acfcoursePage.options.prerequisites}</span>
                </div>
                <div className="course-details__meta-link" style={{ padding: "10px" }}>
                  <span className="course-details__meta-icon">
                    <i className="far fa-folder-open"></i>
                  </span>
                  Duration: <span>{course.acfcoursePage.options.duration}</span>
                </div>
                <div className="course-details__meta-link" style={{ padding: "10px" }}>
                  <span className="course-details__meta-icon">
                    <i className="far fa-user-circle"></i>
                  </span>
                  Delivery: <span>Remote</span>
                </div>

                <div className="course-details__meta-link" style={{ padding: "10px" }}>
                  <span className="course-details__meta-icon">
                    <i className="far fa-flag"></i>
                  </span>
                  Certification Body: <span>{course.acfcoursePage.options.certificationBody}</span>
                </div>


                <div className="course-details__meta-link" style={{ padding: "10px" }}>
                  {/* <a href="#none" className="course-details__meta-link"> */}
                  <span className="course-details__meta-icon">
                    <i className="far fa-flag"></i>
                  </span>
                  PDU & SEUs: <span>{course.acfcoursePage.options.pduScrumAllianceSeus}</span>
                  {/* </a> */}
                </div>

                <div className="course-details__meta-link" style={{ padding: "10px" }}>
                  <span className="course-details__meta-icon">
                    <i className="fas fa-play"></i>
                  </span>Included:

                </div>
                <div className="course-details__meta-link" style={{ padding: "10px" }}>
                  <span>
                    <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.included }} />
                  </span>
                </div>

                <div className="course-details__price">
                  <p className="course-details__price-text">Request More Info </p>
                  <br />

                  <form
                    action="#"
                    method="POST"
                  >

                    <div className="form-group">

                      <input type="text" className="form-control" placeholder="Your Name" name="name" value={state.name} onChange={handleInputChange} />
                      <small style={{ color: "red" }}>{errors.name}</small>

                    </div>

                    <div className="form-group">

                      <input type="text" className="form-control" placeholder="Email Address" name="email" value={state.email} onChange={handleInputChange} />
                      <small style={{ color: "red" }}>{errors.email}</small>

                    </div>

                    <div className="form-group">

                      <input type="text" className="form-control" placeholder="Phone Number" name="phone" value={state.phone} onChange={handleInputChange} />
                      <small style={{ color: "red" }}>{errors.phone}</small>

                    </div>

                    <div className="form-group">

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Message"
                        name="message"
                        value={state.message}
                        onChange={handleInputChange}
                      />
                      <small style={{ color: "red" }}>{errors.message}</small>

                    </div>

                    {/* <button type="submit" className="btn btn-primary" onClick={submitHandler} >Submit</button> */}
                    {loader == 'loading' ? <button
                      type="submit"
                      onClick={submitHandler}
                      className="btn btn-primary ml-0"
                      disabled
                    >Submit<div class="loader"></div></button> : <button
                      type="submit"
                      onClick={submitHandler}
                      className="btn btn-primary ml-0"
                    >Submit</button>}
                    <small style={{ color: "green" }}>{submissionMessage}</small>

                  </form>

                </div>

              </div>

              {/* Relevant Courses */}
              <CourseCategoryFilter name={categoryValue} title={data.wpPost.title} />


            </div>

            {course.acfcoursePage.faq1.heading === "" ? "" :
              <div id="faq">
                <h2 style={{ color: "black", marginTop: "10px" , scrollPaddingTop: "100px"}} >Frequently Asked Questions</h2>
                <div style={{ display: 'inline-block' }} >
                  <img src={horizontal} width="450px" alt="img" />
                </div>
              </div>
            }

            <div style={{ marginTop: "20px" }} class="accordion gotofaq" id="accordionExample">

              {course.acfcoursePage.faq1.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      {/* What does the registration fee include? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.heading }} />
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* The registration fee includes the fees for classroom training, the study material, exam fees. */}
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.content }} />
                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq2.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      {/* How many attempts do i get if I attend the classroom training? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.heading }} />
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.content }} />
                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq3.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      {/* Which Course is right for me? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.heading }} />
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.content }} />
                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq4.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      {/* How Do I Obtain an Invoice Receipt or Proof of Payment for My Order? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.heading }} />
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* After placing your order, you will receive a confirmation email with a link to download your invoice as a PDF. If the email does not have this link, please send a message to <a href="mailto support@tryscrum.com"> support@tryscrum.com </a> referencing your order number.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.content }} />
                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq5.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      {/* What if I do not receive a confirmation of My Order? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.heading }} />
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.content }} />
                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq6.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.heading }} />
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq7.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                      {/* What if I do not receive a confirmation of My Order? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.heading }} />
                    </button>
                  </h2>
                  <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.content }} />
                    </div>
                  </div>
                </div>
              }


              {course.acfcoursePage.faq8.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEight">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.heading }} />
                    </button>
                  </h2>
                  <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq9.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingNine">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.heading }} />
                    </button>
                  </h2>
                  <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
       */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq10.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.heading }} />
                    </button>
                  </h2>
                  <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq11.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEleven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.heading }} />
                    </button>
                  </h2>
                  <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq12.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwelve">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.heading }} />
                    </button>
                  </h2>
                  <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq13.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThirteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.heading }} />
                    </button>
                  </h2>
                  <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq14.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFourteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.heading }} />
                    </button>
                  </h2>
                  <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq15.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFifteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.heading }} />
                    </button>
                  </h2>
                  <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq16.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSixteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.heading }} />
                    </button>
                  </h2>
                  <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq17.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeventeen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.heading }} />
                    </button>
                  </h2>
                  <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq18.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEighteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.heading }} />
                    </button>
                  </h2>
                  <div id="collapseEighteen" className="accordion-collapse collapse" aria-labelledby="headingEighteen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq19.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingNineteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.heading }} />
                    </button>
                  </h2>
                  <div id="collapseNineteen" className="accordion-collapse collapse" aria-labelledby="headingNineteen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.content }} />

                    </div>
                  </div>
                </div>
              }

              {course.acfcoursePage.faq20.heading === "" ? "" :
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwenty">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                      {/* May I know the Refund & Cancellation Policies? */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.heading }} />
                    </button>
                  </h2>
                  <div id="collapseTwenty" className="accordion-collapse collapse" aria-labelledby="headingTwenty" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.content }} />

                    </div>
                  </div>
                </div>
              }

            </div>

          </div>

        </section>


        <Footer />
      </Layout>


    )

  }

  // ICP-ACC
  else if (course.title === "Certified Professional Agile Coaching (ICP-ACC)") {

    return (

      // <Layout pageTitle="tryScrum | Course Details">
      <Layout pageTitle={title} metaDesc={metadesc} pageName={fimg} pageloc="individual" >
        <NavTwo />

        {/* <PageHeader title="Course Details" />  */}

        <div>

          <div className="courseStripeICPCAT">

            <ul className="list-unstyled thm-breadcrumb" >
              <li style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237" }} to="/">Home</Link>
              </li>
              <li className="active" style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237", fontWeight: "bold" }} to="/courses">Courses</Link>
              </li>
            </ul>

            <p className="newCoursePageImg2" style={{ marginLeft: "10px" }}>
              <img src={accLogo} alt="" style={{ width: 120, height: 120 }} />
              <div>
                <h2 style={{ marginLeft: "10px", marginTop: "20px", color: "#052237", fontWeight: "bold" }}> {course.title} </h2>
                <br />
                <div className="badges-top" style={{ marginLeft: "10px" }}>
                  {/* <span className="badge badge-certified">Certified</span> */}
                  <span className="badge badge-live-online">Live Online</span>
                  <span className="badge badge-in-person">In Person</span>
                </div>
              </div>
            </p>

          </div>

          <div className="courseStripeCal">

            <div className="modal-body row">
              <div className="col-md-6">

                <div class="content">
                  <h2 class="h1 bordered">Become a Skilled Coach&nbsp;</h2>
                  <h2 style={{ fontSize: "22px" }}> The agile Coaching program at tryScrum teaches you the skills needed to be successful as a coach and shows you how to be a valuable coach to any Agile Team. </h2>

                  <div className="hide_mobile">

                    <img src={leftImg} style={{ width: "50%", height: "40%" }} />

                    <img src={rightImg} style={{ width: "50%", height: "40%" }} />

                  </div>

                  <div className="hide_mobile">


                    <ModalCPACC />
                    <img src={cceLogo} height="90px" width="200px" style={{ marginLeft: "27%", marginTop: "" }} />

                  </div>


                </div>

              </div>
              <div className="col-md-6">

                <div className="imageNewCourse">
                  <img src={icpaccBannerImg} alt="banner-csm" />
                </div>

              </div>
            </div>
          </div>

        </div>



        <section className="course-details">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9">
                <div className="course-details__content">
                  {/* <p className="course-details__author">
    
                    <img src={fimg} alt="" style={{ width: 420, height: 300 }} />
                    
                  </p> */}

                  <div className="course-details__top">
                    <div className="course-details__top-left">
                      {/* <h1 className="course-details__title">
                            {course.title}
                      </h1> */}

                      <h1 className="course-details__title">
                        Upcoming Classes
                      </h1>

                      <div style={{ display: 'inline-block' }}>
                        <img src={horizontal} alt="img" />
                      </div>


                      <div className="course-one__stars">
                        <span className="course-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="course-one__count">4.9</span>
                        <span className="course-one__count">
                          <a href={course.acfcoursePage.options.trustPilotRating} className="course-one__category" target="__blank">
                            TrustPilot Rating
                          </a>
                        </span>


                      </div>
                    </div>




                  </div>


                  {/* Schedule */}
                  <div className="table-responsive" id="table-responsive" >
                    <br />

                    <CourseEnrollTable messages={course} />

                  </div>


                  <div className="course-one__image">
                    <i className="far fa-heart"></i>
                  </div>

                  <div className="course-details__tab-navs list-unstyled">

                    {/* 3 Tab Sections */}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">

                      <li className="nav-item" role="presentation">
                        <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Curriculum</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Who can attend</button>
                      </li>

                    </ul>

                  </div>

                  <div className="tab-content tab-content course-details__tab-content" id="myTabContent">

                    <div className="tab-pane show active animated fade" id="home" role="tabpanel" aria-labelledby="home-tab">


                      <p className="course-details__tab-text makingblack">
                        <h2 style={{ color: "red" }}>
                          Course Details
                        </h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.thecourse }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Certificate</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.certificate }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Why tryScrum</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.why }} />
                      </p>

                      <iframe width="560" height="315"
                        src={course.acfcoursePage.options.video}
                        title="tryScrum"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                      />

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Course Fee</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.feeStructure }} />
                      </p>

                      <ul className="list-unstyled course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Virtual class Instructions</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.instructions }} />
                        <li>
                          <a href="/virtual-class-special-instructions/" target="__blank">
                            Special instructions</a>
                        </li>
                      </ul>

                    </div>

                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                      <p className="course-details__tab-text makingblack" >
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.curriculum }} />
                      </p>
                      <br />

                    </div>

                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                      <p className="makingblack">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.whoCanAttend }} />
                      </p>
                      <br />

                    </div>

                  </div>

                </div>



              </div>

              <div className="col-lg-3">

                <div className="course-details__price">

                  <a href="#faq"  className="thm-btn course-details__price-btn hide_mobile" >
                    FAQ'S
                  </a>

                </div>



                <div className="course-details__meta">
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-clock"></i>
                    </span>
                    Prerequisites: <span>{course.acfcoursePage.options.prerequisites}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-folder-open"></i>
                    </span>
                    Duration: <span>{course.acfcoursePage.options.duration}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-user-circle"></i>
                    </span>
                    Delivery: <span>Remote</span>
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    Certification Body: <span>{course.acfcoursePage.options.certificationBody}</span>
                  </div>


                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    {/* <a href="#none" className="course-details__meta-link"> */}
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    PDU & SEUs: <span>{course.acfcoursePage.options.pduScrumAllianceSeus}</span>
                    {/* </a> */}
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="fas fa-play"></i>
                    </span>Included:

                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.included }} />
                    </span>
                  </div>

                  <div className="course-details__price">
                    <p className="course-details__price-text">Request More Info </p>
                    <br />

                    <form
                      action="#"
                      method="POST"
                    >

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Your Name" name="name" value={state.name} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.name}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Email Address" name="email" value={state.email} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.email}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Phone Number" name="phone" value={state.phone} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.phone}</small>

                      </div>

                      <div className="form-group">

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Message"
                          name="message"
                          value={state.message}
                          onChange={handleInputChange}
                        />
                        <small style={{ color: "red" }}>{errors.message}</small>

                      </div>

                      {/* <button type="submit" className="btn btn-primary" onClick={submitHandler} >Submit</button> */}
                      {loader == 'loading' ? <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                        disabled
                      >Submit<div class="loader"></div></button> : <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                      >Submit</button>}
                      <small style={{ color: "green" }}>{submissionMessage}</small>

                    </form>

                  </div>

                </div>

                {/* Relevant Courses */}
                <CourseCategoryFilter name={categoryValue} title={data.wpPost.title} />


              </div>

              {course.acfcoursePage.faq1.heading === "" ? "" :
                <div id="faq">
                  <h2 style={{ color: "black", marginTop: "10px" , scrollPaddingTop: "100px"}}>Frequently Asked Questions</h2>
                  <div style={{ display: 'inline-block' }} >
                    <img src={horizontal} width="450px" alt="img" />
                  </div>
                </div>
              }

              <div style={{ marginTop: "20px" }} class="accordion gotofaq" id="accordionExample" >

                {course.acfcoursePage.faq1.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {/* What does the registration fee include? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.heading }} />
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* The registration fee includes the fees for classroom training, the study material, exam fees. */}
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq2.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {/* How many attempts do i get if I attend the classroom training? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq3.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        {/* Which Course is right for me? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq4.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        {/* How Do I Obtain an Invoice Receipt or Proof of Payment for My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After placing your order, you will receive a confirmation email with a link to download your invoice as a PDF. If the email does not have this link, please send a message to <a href="mailto support@tryscrum.com"> support@tryscrum.com </a> referencing your order number.
                    */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq5.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
                    */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq6.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                    */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq7.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
                    */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.content }} />
                      </div>
                    </div>
                  </div>
                }


                {course.acfcoursePage.faq8.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                    */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq9.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
       */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq10.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq11.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEleven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq12.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwelve">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq13.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThirteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq14.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFourteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq15.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFifteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq16.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSixteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq17.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeventeen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq18.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEighteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEighteen" className="accordion-collapse collapse" aria-labelledby="headingEighteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq19.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNineteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNineteen" className="accordion-collapse collapse" aria-labelledby="headingNineteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq20.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwenty">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwenty" className="accordion-collapse collapse" aria-labelledby="headingTwenty" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.content }} />

                      </div>
                    </div>
                  </div>
                }

              </div>

            </div>
          </div>
        </section>


        <Footer />
      </Layout>


    )

  }


  // ICP-CAT
  else if (course.title === "Coaching Agile Transitions (ICP-CAT)") {

    return (

      // <Layout pageTitle="tryScrum | Course Details">
      <Layout pageTitle={title} metaDesc={metadesc} pageName={fimg} pageloc="individual" >
        <NavTwo />

        {/* <PageHeader title="Course Details" />  */}

        <div>

          <div className="courseStripeICPCAT">

            <ul className="list-unstyled thm-breadcrumb" >
              <li style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237" }} to="/">Home</Link>
              </li>
              <li className="active" style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237", fontWeight: "bold" }} to="/courses">Courses</Link>
              </li>
            </ul>

            <p className="newCoursePageImg2" style={{ marginLeft: "10px" }}>
              <img src={catLogo} alt="" style={{ width: 120, height: 120 }} />
              <div>
                <h2 style={{ marginLeft: "10px", marginTop: "20px", color: "#052237", fontWeight: "bold" }}> {course.title} </h2>
                <br />
                <div className="badges-top" style={{ marginLeft: "10px" }}>
                  {/* <span className="badge badge-certified">Certified</span> */}
                  <span className="badge badge-live-online">Live Online</span>
                  <span className="badge badge-in-person">In Person</span>
                </div>
              </div>
            </p>

          </div>

          <div className="courseStripeCal">

            <div className="modal-body row">
              <div className="col-md-6">

                <div class="content">
                  <h2 class="h1 bordered">Become a Catalyst for Change&nbsp;</h2>
                  <h2 style={{ fontSize: "22px" }}> Our Transition Mastery program enables Agile coaches to gain the competencies on organisational and human change processes to catalyse change. </h2>

                  <div className="hide_mobile">

                    <img src={leftImg} style={{ width: "50%", height: "40%" }} />

                    <img src={rightImg} style={{ width: "50%", height: "40%" }} />

                  </div>

                  <div className="hide_mobile">

                    <ModalCPCAT />
                    {/* <img src={cceLogo} height="90px" width="200px" style={{ marginLeft: "27%", marginTop: "" }} /> */}

                  </div>

                </div>

              </div>
              <div className="col-md-6">

                <div className="imageNewCourse">
                  <img src={icpcatBannerImg} alt="banner-csm" />
                </div>

              </div>
            </div>
          </div>

        </div>



        <section className="course-details">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9">
                <div className="course-details__content">
                  {/* <p className="course-details__author">
  
                  <img src={fimg} alt="" style={{ width: 420, height: 300 }} />
                  
                </p> */}

                  <div className="course-details__top">
                    <div className="course-details__top-left">
                      {/* <h1 className="course-details__title">
                          {course.title}
                    </h1> */}

                      <h1 className="course-details__title">
                        Upcoming Classes
                      </h1>

                      <div style={{ display: 'inline-block' }}>
                        <img src={horizontal} alt="img" />
                      </div>


                      <div className="course-one__stars">
                        <span className="course-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="course-one__count">4.9</span>
                        <span className="course-one__count">
                          <a href={course.acfcoursePage.options.trustPilotRating} className="course-one__category" target="__blank">
                            TrustPilot Rating
                          </a>
                        </span>


                      </div>
                    </div>




                  </div>


                  {/* Schedule */}
                  <div className="table-responsive" id="table-responsive" >
                    <br />

                    <CourseEnrollTable messages={course} />

                  </div>


                  <div className="course-one__image">
                    <i className="far fa-heart"></i>
                  </div>

                  <div className="course-details__tab-navs list-unstyled">

                    {/* 3 Tab Sections */}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">

                      <li className="nav-item" role="presentation">
                        <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Curriculum</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Who can attend</button>
                      </li>

                    </ul>

                  </div>

                  <div className="tab-content tab-content course-details__tab-content" id="myTabContent">

                    <div className="tab-pane show active animated fade" id="home" role="tabpanel" aria-labelledby="home-tab">


                      <p className="course-details__tab-text makingblack">
                        <h2 style={{ color: "red" }}>
                          Course Details
                        </h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.thecourse }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Certificate</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.certificate }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Why tryScrum</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.why }} />
                      </p>

                      <iframe width="560" height="315"
                        src={course.acfcoursePage.options.video}
                        title="tryScrum"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                      />

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Course Fee</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.feeStructure }} />
                      </p>

                      <ul className="list-unstyled course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Virtual class Instructions</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.instructions }} />
                        <li>
                          <a href="/virtual-class-special-instructions/" target="__blank">
                            Special instructions</a>
                        </li>
                      </ul>

                    </div>

                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                      <p className="course-details__tab-text makingblack" >
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.curriculum }} />
                      </p>
                      <br />

                    </div>

                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                      <p className="makingblack">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.whoCanAttend }} />
                      </p>
                      <br />

                    </div>

                  </div>

                </div>



              </div>

              <div className="col-lg-3">

                <div className="course-details__price">

                  <a href="#faq"  className="thm-btn course-details__price-btn hide_mobile" >
                    FAQ'S
                  </a>

                </div>



                <div className="course-details__meta">
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-clock"></i>
                    </span>
                    Prerequisites: <span>{course.acfcoursePage.options.prerequisites}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-folder-open"></i>
                    </span>
                    Duration: <span>{course.acfcoursePage.options.duration}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-user-circle"></i>
                    </span>
                    Delivery: <span>Remote</span>
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    Certification Body: <span>{course.acfcoursePage.options.certificationBody}</span>
                  </div>


                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    {/* <a href="#none" className="course-details__meta-link"> */}
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    PDU & SEUs: <span>{course.acfcoursePage.options.pduScrumAllianceSeus}</span>
                    {/* </a> */}
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="fas fa-play"></i>
                    </span>Included:

                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.included }} />
                    </span>
                  </div>

                  <div className="course-details__price">
                    <p className="course-details__price-text">Request More Info </p>
                    <br />

                    <form
                      action="#"
                      method="POST"
                    >

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Your Name" name="name" value={state.name} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.name}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Email Address" name="email" value={state.email} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.email}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Phone Number" name="phone" value={state.phone} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.phone}</small>

                      </div>

                      <div className="form-group">

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Message"
                          name="message"
                          value={state.message}
                          onChange={handleInputChange}
                        />
                        <small style={{ color: "red" }}>{errors.message}</small>

                      </div>

                      {/* <button type="submit" className="btn btn-primary" onClick={submitHandler} >Submit</button> */}
                      {loader == 'loading' ? <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                        disabled
                      >Submit<div class="loader"></div></button> : <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                      >Submit</button>}
                      <small style={{ color: "green" }}>{submissionMessage}</small>

                    </form>

                  </div>

                </div>

                {/* Relevant Courses */}
                <CourseCategoryFilter name={categoryValue} title={data.wpPost.title} />


              </div>

              {course.acfcoursePage.faq1.heading === "" ? "" :
                <div id="faq">
                  <h2 style={{ color: "black", marginTop: "10px" , scrollPaddingTop: "100px" }}>Frequently Asked Questions</h2>
                  <div style={{ display: 'inline-block' }} >
                    <img src={horizontal} width="450px" alt="img" />
                  </div>
                </div>
              }

              <div style={{ marginTop: "20px" }} class="accordion gotofaq" id="accordionExample">

                {course.acfcoursePage.faq1.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {/* What does the registration fee include? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.heading }} />
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* The registration fee includes the fees for classroom training, the study material, exam fees. */}
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq2.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {/* How many attempts do i get if I attend the classroom training? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq3.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        {/* Which Course is right for me? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq4.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        {/* How Do I Obtain an Invoice Receipt or Proof of Payment for My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After placing your order, you will receive a confirmation email with a link to download your invoice as a PDF. If the email does not have this link, please send a message to <a href="mailto support@tryscrum.com"> support@tryscrum.com </a> referencing your order number.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq5.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq6.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq7.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.content }} />
                      </div>
                    </div>
                  </div>
                }


                {course.acfcoursePage.faq8.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.content }} />

                      </div>
                    </div>
                  </div>
                }


                {course.acfcoursePage.faq9.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
       */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq10.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq11.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEleven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq12.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwelve">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq13.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThirteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq14.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFourteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq15.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFifteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq16.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSixteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq17.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeventeen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq18.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEighteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEighteen" className="accordion-collapse collapse" aria-labelledby="headingEighteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq19.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNineteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNineteen" className="accordion-collapse collapse" aria-labelledby="headingNineteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq20.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwenty">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwenty" className="accordion-collapse collapse" aria-labelledby="headingTwenty" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.content }} />

                      </div>
                    </div>
                  </div>
                }
              </div>

            </div>
          </div>
        </section>


        <Footer />
      </Layout>


    )

  }

  // ICP-ENT
  else if (course.title === "Enterprise Transformation(ICP-ENT)") {

    return (

      // <Layout pageTitle="tryScrum | Course Details">
      <Layout pageTitle={title} metaDesc={metadesc} pageName={fimg} pageloc="individual" >
        <NavTwo />

        {/* <PageHeader title="Course Details" />  */}

        <div>

          <div className="courseStripeICPENT">

            <ul className="list-unstyled thm-breadcrumb" >
              <li style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237" }} to="/">Home</Link>
              </li>
              <li className="active" style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237", fontWeight: "bold" }} to="/courses">Courses</Link>
              </li>
            </ul>

            <p className="newCoursePageImg2" style={{ marginLeft: "10px" }}>
              <img src={entLogo} alt="" style={{ width: 120, height: 120 }} />
              <div>
                <h2 style={{ marginLeft: "10px", marginTop: "20px", color: "#052237", fontWeight: "bold" }}> {course.title} </h2>
                <br />
                <div className="badges-top" style={{ marginLeft: "10px" }}>
                  {/* <span className="badge badge-certified">Certified</span> */}
                  <span className="badge badge-live-online">Live Online</span>
                  <span className="badge badge-in-person">In Person</span>
                </div>
              </div>
            </p>

          </div>

          <div className="courseStripeEnt">

            <div className="modal-body row">
              <div className="col-md-6">

                <div class="content">
                  <h2 class="h1 bordered">Enable Organisational Agility&nbsp;</h2>
                  <h2 style={{ fontSize: "22px" }}> This Enterprise Mastery class teaches you the competencies you need to grow your confidence, credibility, and value as an Enterprise Coach. </h2>

                  <div className="hide_mobile">

                    <img src={leftImg} style={{ width: "50%", height: "40%" }} />

                    <img src={rightImg} style={{ width: "50%", height: "40%" }} />

                  </div>

                  <div className="hide_mobile">



                    <ModalCPENT />
                    {/* <img src={cceLogo} height="90px" width="200px" style={{ marginLeft: "27%", marginTop: "" }} /> */}

                  </div>

                </div>

              </div>
              <div className="col-md-6">

                <div className="imageNewCourse">
                  <img src={icpentBannerImg} alt="banner-csm" />
                </div>

              </div>
            </div>
          </div>

        </div>



        <section className="course-details">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9">
                <div className="course-details__content">
                  {/* <p className="course-details__author">
  
                  <img src={fimg} alt="" style={{ width: 420, height: 300 }} />
                  
                </p> */}

                  <div className="course-details__top">
                    <div className="course-details__top-left">
                      {/* <h1 className="course-details__title">
                          {course.title}
                    </h1> */}

                      <h1 className="course-details__title">
                        Upcoming Classes
                      </h1>

                      <div style={{ display: 'inline-block' }}>
                        <img src={horizontal} alt="img" />
                      </div>


                      <div className="course-one__stars">
                        <span className="course-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="course-one__count">4.9</span>
                        <span className="course-one__count">
                          <a href={course.acfcoursePage.options.trustPilotRating} className="course-one__category" target="__blank">
                            TrustPilot Rating
                          </a>
                        </span>


                      </div>
                    </div>




                  </div>


                  {/* Schedule */}

                  <div className="table-responsive" id="table-responsive" >
                    <br />
                    <CourseEnrollTable messages={course} />
                  </div>

                  <div className="container-fluid">
                    <div className="row">
                      <div className="col">



                      </div>
                    </div>
                  </div>


                  <div className="course-one__image">
                    <i className="far fa-heart"></i>
                  </div>

                  <div className="course-details__tab-navs list-unstyled">

                    {/* 3 Tab Sections */}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">

                      <li className="nav-item" role="presentation">
                        <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Curriculum</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Who can attend</button>
                      </li>

                    </ul>

                  </div>

                  <div className="tab-content tab-content course-details__tab-content" id="myTabContent">

                    <div className="tab-pane show active animated fade" id="home" role="tabpanel" aria-labelledby="home-tab">


                      <p className="course-details__tab-text makingblack">
                        <h2 style={{ color: "red" }}>
                          Course Details
                        </h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.thecourse }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Certificate</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.certificate }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Why tryScrum</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.why }} />
                      </p>

                      <iframe width="560" height="315"
                        src={course.acfcoursePage.options.video}
                        title="tryScrum"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                      />

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Course Fee</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.feeStructure }} />
                      </p>

                      <ul className="list-unstyled course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Virtual class Instructions</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.instructions }} />
                        <li>
                          <a href="/virtual-class-special-instructions/" target="__blank">
                            Special instructions</a>
                        </li>
                      </ul>

                    </div>

                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                      <p className="course-details__tab-text makingblack" >
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.curriculum }} />
                      </p>
                      <br />

                    </div>

                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                      <p className="makingblack">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.whoCanAttend }} />
                      </p>
                      <br />

                    </div>

                  </div>

                </div>



              </div>

              <div className="col-lg-3">

                <div className="course-details__price">

                  <a href="#faq"  className="thm-btn course-details__price-btn hide_mobile" >
                    FAQ'S
                  </a>

                </div>



                <div className="course-details__meta">
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-clock"></i>
                    </span>
                    Prerequisites: <span>{course.acfcoursePage.options.prerequisites}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-folder-open"></i>
                    </span>
                    Duration: <span>{course.acfcoursePage.options.duration}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-user-circle"></i>
                    </span>
                    Delivery: <span>Remote</span>
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    Certification Body: <span>{course.acfcoursePage.options.certificationBody}</span>
                  </div>


                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    {/* <a href="#none" className="course-details__meta-link"> */}
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    PDU & SEUs: <span>{course.acfcoursePage.options.pduScrumAllianceSeus}</span>
                    {/* </a> */}
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="fas fa-play"></i>
                    </span>Included:

                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.included }} />
                    </span>
                  </div>

                  <div className="course-details__price">
                    <p className="course-details__price-text">Request More Info </p>
                    <br />

                    <form
                      action="#"
                      method="POST"
                    >

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Your Name" name="name" value={state.name} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.name}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Email Address" name="email" value={state.email} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.email}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Phone Number" name="phone" value={state.phone} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.phone}</small>

                      </div>

                      <div className="form-group">

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Message"
                          name="message"
                          value={state.message}
                          onChange={handleInputChange}
                        />
                        <small style={{ color: "red" }}>{errors.message}</small>

                      </div>

                      {/* <button type="submit" className="btn btn-primary" onClick={submitHandler} >Submit</button> */}
                      {loader == 'loading' ? <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                        disabled
                      >Submit<div class="loader"></div></button> : <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                      >Submit</button>}
                      <small style={{ color: "green" }}>{submissionMessage}</small>

                    </form>

                  </div>

                </div>

                {/* Relevant Courses */}
                <CourseCategoryFilter name={categoryValue} title={data.wpPost.title} />


              </div>

              {course.acfcoursePage.faq1.heading === "" ? "" :
                <div>
                  <h2 style={{ color: "black", marginTop: "10px",scrollPaddingTop: "100px"}} id="faq">Frequently Asked Questions</h2>
                  <div style={{ display: 'inline-block' }} >
                    <img src={horizontal} width="450px" alt="img" />
                  </div>
                </div>
              }

              <div style={{ marginTop: "20px" }} class="accordion gotofaq" id="accordionExample" >

                {course.acfcoursePage.faq1.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {/* What does the registration fee include? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.heading }} />
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* The registration fee includes the fees for classroom training, the study material, exam fees. */}
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq2.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {/* How many attempts do i get if I attend the classroom training? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq3.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        {/* Which Course is right for me? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq4.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        {/* How Do I Obtain an Invoice Receipt or Proof of Payment for My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After placing your order, you will receive a confirmation email with a link to download your invoice as a PDF. If the email does not have this link, please send a message to <a href="mailto support@tryscrum.com"> support@tryscrum.com </a> referencing your order number.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq5.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq6.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq7.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.content }} />
                      </div>
                    </div>
                  </div>
                }


                {course.acfcoursePage.faq8.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq9.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
       */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq10.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq11.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEleven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq12.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwelve">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq13.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThirteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq14.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFourteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq15.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFifteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq16.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSixteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq17.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeventeen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq18.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEighteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEighteen" className="accordion-collapse collapse" aria-labelledby="headingEighteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq19.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNineteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNineteen" className="accordion-collapse collapse" aria-labelledby="headingNineteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq20.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwenty">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwenty" className="accordion-collapse collapse" aria-labelledby="headingTwenty" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.content }} />

                      </div>
                    </div>
                  </div>
                }

              </div>

            </div>
          </div>
        </section>


        <Footer />
      </Layout>


    )

  }

  // Certified Scrum Master(CSM) UI Design
  else if (course.title === "Certified Scrum Master(CSM)") {

    return (

      // <Layout pageTitle="tryScrum | Course Details">
      <Layout pageTitle={title} metaDesc={metadesc} pageName={fimg} pageloc="individual" >
        <NavTwo />

        {/* <PageHeader title="Course Details" />  */}

        <div>

          <div className="courseStripeICPENT">

            <ul className="list-unstyled thm-breadcrumb" >
              <li style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237" }} to="/">Home</Link>
              </li>
              <li className="active" style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237", fontWeight: "bold" }} to="/courses">Courses</Link>
              </li>
            </ul>

            <p className="newCoursePageImg2" style={{ marginLeft: "10px" }}>
              <img src={csm_logo} alt="" style={{ width: 120, height: 120 }} />
              <div>
                <h2 style={{ marginLeft: "10px", marginTop: "20px", color: "#052237", fontWeight: "bold" }}> {course.title} </h2>
                <br />
                <div className="badges-top" style={{ marginLeft: "10px" }}>
                  {/* <span className="badge badge-certified">Certified</span> */}
                  <span className="badge badge-live-online">Live Online</span>
                  <span className="badge badge-in-person">In Person</span>
                </div>
              </div>
            </p>

          </div>

          <div style={{ backgroundColor: "#73b89e" }}>

            <div className="modal-body row">
              <div className="col-md-6">

                <div class="content">
                  <h2 class="h1 bordered">Become an Inspiring Scrum Master&nbsp;</h2>
                  <h2 style={{ fontSize: "22px" }}>Certified Scrum Master training with tryScrum is intense and innovative. You can do more than get certified. More than 10000 agile professionals chose to take their Scrum Master training with us, and we'd love to welcome you to a future course.</h2>

                  <div className="hide_mobile">

                    <img src={leftImg} style={{ width: "50%", height: "40%" }} />

                    <img src={rightImg} style={{ width: "50%", height: "40%" }} />

                  </div>



                </div>

              </div>
              <div className="col-md-6">

                <div className="imageNewCourse">
                  <img src={csm2_02} alt="banner-csm" />
                </div>

              </div>
            </div>
          </div>

        </div>



        <section className="course-details">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9">
                <div className="course-details__content">
                  {/* <p className="course-details__author">
  
                  <img src={fimg} alt="" style={{ width: 420, height: 300 }} />
                  
                </p> */}

                  <div className="course-details__top">
                    <div className="course-details__top-left">
                      {/* <h1 className="course-details__title">
                          {course.title}
                    </h1> */}

                      <h1 className="course-details__title">
                        Upcoming Classes
                      </h1>

                      <div style={{ display: 'inline-block' }}>
                        <img src={horizontal} alt="img" />
                      </div>


                      <div className="course-one__stars">
                        <span className="course-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="course-one__count">4.9</span>
                        <span className="course-one__count">
                          <a href={course.acfcoursePage.options.trustPilotRating} className="course-one__category" target="__blank">
                            TrustPilot Rating
                          </a>
                        </span>


                      </div>
                    </div>




                  </div>


                  {/* Schedule */}

                  <div className="table-responsive" id="table-responsive" >
                    <br />
                    <CourseEnrollTable messages={course} />
                  </div>

                  <div className="container-fluid">
                    <div className="row">
                      <div className="col">



                      </div>
                    </div>
                  </div>


                  <div className="course-one__image">
                    <i className="far fa-heart"></i>
                  </div>

                  <div className="course-details__tab-navs list-unstyled">

                    {/* 3 Tab Sections */}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">

                      <li className="nav-item" role="presentation">
                        <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Curriculum</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Who can attend</button>
                      </li>

                    </ul>

                  </div>

                  <div className="tab-content tab-content course-details__tab-content" id="myTabContent">

                    <div className="tab-pane show active animated fade" id="home" role="tabpanel" aria-labelledby="home-tab">


                      <p className="course-details__tab-text makingblack">
                        <h2 style={{ color: "red" }}>
                          Course Details
                        </h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.thecourse }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Certificate</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.certificate }} />
                      </p>

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Why tryScrum</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.why }} />
                      </p>

                      <iframe width="560" height="315"
                        src={course.acfcoursePage.options.video}
                        title="tryScrum"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                      />

                      <p className="course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Course Fee</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.feeStructure }} />
                      </p>

                      <ul className="list-unstyled course-details__tab-text makingblack" >
                        <h2 style={{ color: "red" }}>Virtual class Instructions</h2>
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.instructions }} />
                        <li>
                          <a href="/virtual-class-special-instructions/" target="__blank">
                            Special instructions</a>
                        </li>
                      </ul>

                    </div>

                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                      <p className="course-details__tab-text makingblack" >
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.curriculum }} />
                      </p>
                      <br />

                    </div>

                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                      <p className="makingblack">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.whoCanAttend }} />
                      </p>
                      <br />

                    </div>

                  </div>

                </div>



              </div>

              <div className="col-lg-3">

                <div className="course-details__price">

                  <a href="#faq"  className="thm-btn course-details__price-btn hide_mobile" >
                    FAQ'S
                  </a>

                </div>



                <div className="course-details__meta">
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-clock"></i>
                    </span>
                    Prerequisites: <span>{course.acfcoursePage.options.prerequisites}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-folder-open"></i>
                    </span>
                    Duration: <span>{course.acfcoursePage.options.duration}</span>
                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-user-circle"></i>
                    </span>
                    Delivery: <span>Remote</span>
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    Certification Body: <span>{course.acfcoursePage.options.certificationBody}</span>
                  </div>


                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    {/* <a href="#none" className="course-details__meta-link"> */}
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    PDU & SEUs: <span>{course.acfcoursePage.options.pduScrumAllianceSeus}</span>
                    {/* </a> */}
                  </div>

                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span className="course-details__meta-icon">
                      <i className="fas fa-play"></i>
                    </span>Included:

                  </div>
                  <div className="course-details__meta-link" style={{ padding: "10px" }}>
                    <span>
                      <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.options.included }} />
                    </span>
                  </div>

                  <div className="course-details__price">
                    <p className="course-details__price-text">Request More Info </p>
                    <br />

                    <form
                      action="#"
                      method="POST"
                    >

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Your Name" name="name" value={state.name} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.name}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Email Address" name="email" value={state.email} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.email}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Phone Number" name="phone" value={state.phone} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.phone}</small>

                      </div>

                      <div className="form-group">

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Message"
                          name="message"
                          value={state.message}
                          onChange={handleInputChange}
                        />
                        <small style={{ color: "red" }}>{errors.message}</small>

                      </div>

                      {/* <button type="submit" className="btn btn-primary" onClick={submitHandler} >Submit</button> */}
                      {loader == 'loading' ? <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                        disabled
                      >Submit<div class="loader"></div></button> : <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                      >Submit</button>}
                      <small style={{ color: "green" }}>{submissionMessage}</small>

                    </form>

                  </div>

                </div>

                {/* Relevant Courses */}
                <CourseCategoryFilter name={categoryValue} title={data.wpPost.title} />


              </div>

              {course.acfcoursePage.faq1.heading === "" ? "" :
                <div>
                  <h2 style={{ color: "black", marginTop: "10px" , scrollPaddingTop: "100px"}} id="faq">Frequently Asked Questions</h2>
                  <div style={{ display: 'inline-block' }} >
                    <img src={horizontal} width="450px" alt="img" />
                  </div>
                </div>
              }

              <div style={{ marginTop: "20px" }} class="accordion gotofaq" id="accordionExample" >

                {course.acfcoursePage.faq1.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {/* What does the registration fee include? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.heading }} />
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* The registration fee includes the fees for classroom training, the study material, exam fees. */}
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq2.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {/* How many attempts do i get if I attend the classroom training? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq3.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        {/* Which Course is right for me? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq4.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        {/* How Do I Obtain an Invoice Receipt or Proof of Payment for My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After placing your order, you will receive a confirmation email with a link to download your invoice as a PDF. If the email does not have this link, please send a message to <a href="mailto support@tryscrum.com"> support@tryscrum.com </a> referencing your order number.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq5.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq6.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq7.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.content }} />
                      </div>
                    </div>
                  </div>
                }


                {course.acfcoursePage.faq8.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq9.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
       */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq10.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq11.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEleven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq12.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwelve">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq13.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThirteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq14.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFourteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq15.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFifteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq16.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSixteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq17.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeventeen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq18.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEighteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEighteen" className="accordion-collapse collapse" aria-labelledby="headingEighteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq19.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNineteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNineteen" className="accordion-collapse collapse" aria-labelledby="headingNineteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq20.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwenty">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwenty" className="accordion-collapse collapse" aria-labelledby="headingTwenty" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.content }} />

                      </div>
                    </div>
                  </div>
                }

              </div>

            </div>
          </div>
        </section>


        <Footer />
      </Layout>


    )


  }

  // Bundle Courses Commented Out For Live Site
  else if (course.title === "Bundle Courses") {

    return (

      // <Layout pageTitle="tryScrum | Course Details">
      <Layout pageTitle={title} metaDesc={metadesc} pageName={fimg} pageloc="individual" >
        <NavTwo />

        {/* <PageHeader title="Course Details" />  */}

        <div>

          <div className="courseStripeICPENT">

            <ul className="list-unstyled thm-breadcrumb" >
              <li style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237" }} to="/">Home</Link>
              </li>
              <li className="active" style={{ marginTop: "10px" }}>
                <Link style={{ color: "#052237", fontWeight: "bold" }} to="/courses">Courses</Link>
              </li>
            </ul>

            <p className="newCoursePageImg2" style={{ marginLeft: "10px" }}>
              {/* <img src={entLogo} alt="" style={{ width:120, height: 120 }} /> */}
              <div>
                <h2 style={{ marginLeft: "10px", marginTop: "20px", color: "#052237", fontWeight: "bold" }}> {course.title} </h2>
                <br />
                <div className="badges-top" style={{ marginLeft: "10px" }}>
                  {/* <span className="badge badge-certified">Certified</span> */}
                  <span className="badge badge-live-online">Live Online</span>
                  <span className="badge badge-in-person">In Person</span>
                </div>
              </div>
            </p>

          </div>

          <div className="courseStripeEnt">

            <div className="modal-body row">
              <div className="col-md-6">

                <div class="content">
                  <h2 class="h1 bordered">Bundle Courses &nbsp;</h2>
                  <h2 style={{ fontSize: "22px" }}>

                    Choose more than one of our offerings and save up to 10*%. In addition, our bundle courses enable participants to access more than one course through single enrolment.

                  </h2>

                  <div className="hide_mobile">

                    <img src={leftImgBundle} style={{ width: "50%", height: "40%" }} />

                    <img src={rightImg} style={{ width: "50%", height: "40%" }} />

                  </div>

                </div>

              </div>
              <div className="col-md-6">

                <div className="imageNewCourse">
                  <img src={bundleCourseBannerImg} alt="banner-csm" />
                </div>

              </div>
            </div>
          </div>

        </div>


        <section className="course-details">
          <div className="container-fluid">
            <div className="row">

              <div className="col">
                <div className="course-details__content">
                  {/* <p className="course-details__author">
  
                  <img src={fimg} alt="" style={{ width: 420, height: 300 }} />
                  
                </p> */}

                  <div className="course-details__top">
                    <div className="course-details__top-left">
                      {/* <h1 className="course-details__title">
                          {course.title}
                    </h1> */}

                      <h1 className="course-details__title">
                        Select Your Bundle Choice
                      </h1>

                      <div style={{ display: 'inline-block' }}>
                        <img src={horizontal} alt="img" />
                      </div>


                      <div className="course-one__stars">
                        <span className="course-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="course-one__count">4.9</span>
                        <span className="course-one__count">
                          <a href={course.acfcoursePage.options.trustPilotRating} className="course-one__category" target="__blank">
                            TrustPilot Rating
                          </a>
                        </span>


                      </div>
                    </div>



                  </div>

                  <div>


                  </div>


                  {/* Schedule */}
                  {/* <div>
                              <br/>
                              {/* <CourseBundleTable messages={course} />  
                              <CourseBundleCardType messages={course} />

                  </div> */}

                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-8">
                        <CourseBundleCardType messages={course} />
                      </div>
                      <div className="col-lg-4" >
                        <>
                          <div style={{ borderRadius: "none" }}>
                            <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
                              <div className="card-header bg-transparent border-0 text-center text-uppercase">

                                <h3>Contact US</h3>
                                <div className="ost-multi-header"></div>

                              </div>
                              <div className="card-body">

                                <form action="#" method="POST">

                                  <div className="form-group">
                                    <input type="text" name="bundlename" placeholder="Your Name" className="form-control" value={state.bundlename} onChange={handleInputChange} style={{ height: "60px", borderRadius: "none" }} />
                                    <small style={{ color: "red" }}>{errors.bundlename}</small>
                                  </div>

                                  <div className="form-group">
                                    <input type="text" name="bundleemail" placeholder="Your Email" className="form-control" value={state.bundleemail} onChange={handleInputChange} style={{ height: "60px", borderRadius: "none" }} />
                                    <small style={{ color: "red" }}>{errors.bundleemail}</small>
                                  </div>

                                  <div className="form-group">
                                    <input type="text" name="bundlecontact" placeholder="Contact Number" className="form-control" value={state.bundlecontact} onChange={handleInputChange} style={{ height: "60px", borderRadius: "none" }} />
                                    <small style={{ color: "red" }}>{errors.bundlecontact}</small>
                                  </div>

                                  {/* Dropdown */}
                                  <div className="form-floating">

                                    <select className="form-select form-select-menu" name="bundleoption" value={state.bundleoption} onChange={handleInputChange} id="floatingSelect" aria-label="Select Value">

                                      <option value="Psm 1 + Psm 2">PSM 1 + PSM 2 </option>
                                      <option value="Pspo 1 +Pspo 2">PSPO 1 + PSPO 2</option>
                                      <option value="Pspo 1 + Psm 1">PSPO 1 + PSM 1</option>
                                      <option value="Pspo 2+ Psm2">PSPO 2 + PSM 2</option>
                                      <option value="Psk 1 + Psm 1">PSK 1 + PSM 1</option>
                                      <option value="Psm 2+ Icp-acc">PSM 2 + ICP-ACC</option>
                                      <option value="Icp-acc + Icp-cat">ICP-ACC + ICP-CAT</option>

                                      <option value="Icp-acc+ Icp-ent">ICP-ACC + ICP-ENT</option>
                                      <option value="Icp cat + Icp-ent">ICP CAT + ICP-ENT</option>
                                      <option value="Psm 1 + Icp-acc">PSM 1 + ICP-ACC</option>
                                      <option value="Cal combo">CAL COMBO</option>

                                    </select>
                                  </div>

                                  <div className="form-group" style={{ paddingTop: "10px" }}>
                                    <textarea type="text" name="bundlemessage" placeholder="How Can We Help ?" className="form-control" value={state.bundlemessage} onChange={handleInputChange} style={{ minHeight: "120px", borderRadius: "none" }} />
                                    <small style={{ color: "red" }}>{errors.bundlemessage}</small>

                                  </div>
                                  <p className="text-center mb-0">
                                    {/* <input type="submit" className="btn btn-danger btn-lg w-100 text-uppercase" onClick={bundleSubmitHandler} value="Submit" style={{ minHeight: "60px", borderRadius: "none" }} /> */}
                                    {loader == 'loading' ? <button
                                      type="submit"
                                      onClick={bundleSubmitHandler}
                                      className="btn btn-danger btn-lg w-100 text-uppercase"
                                      disabled
                                    >Submit<div class="loader"></div></button> : <button
                                      type="submit"
                                      onClick={bundleSubmitHandler}
                                      className="btn btn-danger btn-lg w-100 text-uppercase"
                                    >Submit</button>}
                                    <small style={{ color: "green" }}>{bundlesubmissionMessage}</small>
                                  </p>
                                </form>

                              </div>
                            </div>
                          </div>
                        </>
                      </div>
                    </div>
                  </div>


                  <div className="course-one__image">
                    <i className="far fa-heart"></i>
                  </div>

                </div>

              </div>



              {course.acfcoursePage.faq1.heading === "" ? "" :
                <div>
                  <h2 style={{ color: "black", marginTop: "10px" , scrollPaddingTop: "100px"}} id="faq"></h2>
                  <div style={{ display: 'inline-block' }} >
                    <img src={horizontal} width="450px" alt="img" />
                  </div>
                </div>
              }

              <div style={{ marginTop: "20px" }} class="accordion gotofaq" id="accordionExample">

                {course.acfcoursePage.faq1.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {/* What does the registration fee include? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.heading }} />
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* The registration fee includes the fees for classroom training, the study material, exam fees. */}
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq1.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq2.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {/* How many attempts do i get if I attend the classroom training? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq2.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq3.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        {/* Which Course is right for me? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq3.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq4.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        {/* How Do I Obtain an Invoice Receipt or Proof of Payment for My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After placing your order, you will receive a confirmation email with a link to download your invoice as a PDF. If the email does not have this link, please send a message to <a href="mailto support@tryscrum.com"> support@tryscrum.com </a> referencing your order number.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq4.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq5.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq5.content }} />
                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq6.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq6.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq7.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        {/* What if I do not receive a confirmation of My Order? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq7.content }} />
                      </div>
                    </div>
                  </div>
                }


                {course.acfcoursePage.faq8.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq8.content }} />

                      </div>
                    </div>
                  </div>
                }


                {course.acfcoursePage.faq9.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq9.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq10.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq10.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq11.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEleven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq11.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq12.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwelve">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq12.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq13.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThirteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.heading }} />
                      </button>
                    </h2>
                    <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq13.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq14.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFourteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq14.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq15.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFifteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.heading }} />
                      </button>
                    </h2>
                    <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq15.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq16.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSixteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq16.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq17.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeventeen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.heading }} />
                      </button>
                    </h2>
                    <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq17.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq18.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEighteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.heading }} />
                      </button>
                    </h2>
                    <div id="collapseEighteen" className="accordion-collapse collapse" aria-labelledby="headingEighteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq18.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq19.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNineteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.heading }} />
                      </button>
                    </h2>
                    <div id="collapseNineteen" className="accordion-collapse collapse" aria-labelledby="headingNineteen" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq19.content }} />

                      </div>
                    </div>
                  </div>
                }

                {course.acfcoursePage.faq20.heading === "" ? "" :
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwenty">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                        {/* May I know the Refund & Cancellation Policies? */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.heading }} />
                      </button>
                    </h2>
                    <div id="collapseTwenty" className="accordion-collapse collapse" aria-labelledby="headingTwenty" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/* Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
                  */}

                        <div className="all-courses-font"  dangerouslySetInnerHTML={{ __html: course.acfcoursePage.faq20.content }} />

                      </div>
                    </div>
                  </div>
                }

              </div>

              {/* Bundle Contact Form */}
              {/* <div className="containe-fluidr">
                <div className="row"> */}
              {/* <div className="col-md-6" style={{paddingTop: "50px"}}>
                  <img src={corporate} alt="" className="w-100" />
                </div> */}

              {/* <div className="col"> */}

              {/* <>
                      <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
                        <div className="card-header bg-transparent border-0 text-center text-uppercase">

                          <h3>Contact US</h3>
                          <div className="ost-multi-header"></div>

                        </div>
                        <div className="card-body">

                          <form action="#" method="POST">

                            <div className="form-group">
                              <input type="text" name="bundlename" placeholder="Your Name" className="form-control" value={state.bundlename} onChange={handleInputChange} />
                              <small style={{ color: "red" }}>{errors.bundlename}</small>
                            </div>

                            <div className="form-group">
                              <input type="text" name="bundleemail" placeholder="Your Email" className="form-control" value={state.bundleemail} onChange={handleInputChange} />
                              <small style={{ color: "red" }}>{errors.bundleemail}</small>
                            </div>

                            <div className="form-group">
                              <input type="text" name="bundlecontact" placeholder="Contact Number" className="form-control" value={state.bundlecontact} onChange={handleInputChange} />
                              <small style={{ color: "red" }}>{errors.bundlecontact}</small>
                            </div> */}

              {/* Dropdown */}
              {/* <div className="form-floating">

                              <select className="form-select" name="bundleoption" value={state.bundleoption} onChange={handleInputChange} id="floatingSelect" aria-label="Select Value">

                                <option value="Psm 1 + Psm 2">Psm 1 + Psm 2</option>
                                <option value="Pspo 1 +Pspo 2">Pspo 1 +Pspo 2</option>
                                <option value="Pspo 1 + Psm 1">Pspo 1 + Psm 1</option>
                                <option value="Pspo 2+ Psm2">Pspo 2+ Psm2</option>
                                <option value="Psk 1 + Psm 1">Psk 1 + Psm 1</option>
                                <option value="Psm 2+ Icp-acc">Psm 2+ Icp-acc</option>
                                <option value="Icp-acc + Icp-cat">Icp-acc + Icp-cat</option>

                                <option value="Icp-acc+ Icp-ent">Icp-acc+ Icp-ent</option>
                                <option value="Icp cat + Icp-ent">Icp cat + Icp-ent</option>
                                <option value="Psm 1 + Icp-acc">Psm 1 + Icp-acc</option>
                                <option value="Cal combo">Cal combo</option>

                              </select>
                            </div>

                            <div className="form-group" style={{ paddingTop: "10px" }}>
                              <textarea type="text" name="bundlemessage" placeholder="How Can We Help ?" className="form-control" value={state.bundlemessage} onChange={handleInputChange} />
                              <small style={{ color: "red" }}>{errors.bundlemessage}</small>

                            </div>
                            <p className="text-center mb-0">
                              <input type="submit" className="btn btn-danger btn-lg w-100 text-uppercase" onClick={bundleSubmitHandler} value="Submit" />
                              <small style={{ color: "green" }}>{bundlesubmissionMessage}</small>
                            </p>
                          </form>

                        </div>
                      </div>
                    </> */}

              {/* </div>
                </div> */}

              {/* </div> */}



            </div>
          </div>
        </section>


        <Footer />
      </Layout>


    )

  }

}

export default PostTemplate
