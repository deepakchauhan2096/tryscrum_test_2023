import React from "react";
import mandc from "../assets/images/1-5.jpeg";
import hid from "../assets/images/client-logo1.jpeg";
import who from "../assets/images/client-new.jpeg";
import stradegi from "../assets/images/client-logo4.jpeg";
import aurbus from "../assets/images/client-new2-1.jpeg";
import catalystone from "../assets/images/client-new4.jpeg";
import trelleborg from "../assets/images/client-new5.jpeg";
import brand11 from "../assets/images/client-new6.jpeg";
import brand12 from "../assets/images/client-new7.jpeg";
import danskebank from "../assets/images/danske-bank.png";
import geekyants from "../assets/images/logo-geeky-ants.png";
import brand15 from "../assets/images/logo-slk.jpeg";
import brand16 from "../assets/images/olam_logo.png";
import delhivery from "../assets/images/delhivery.jpg";
import sutherland from "../assets/images/sutherland.png";
import amicus from "../assets/images/amicus-technology-removebg.png";
import cloudcover from "../assets/images/cloudcover.png";
import solverminds from "../assets/images/solverminds.png";
import evolenthealth from "../assets/images/Evolent_Health_Logo.jpeg";
import TechnoTree from "../assets/images/TechnoTree.jpeg";
import AECS from "../assets/images/AECS.png"
import archetype from "../assets/images/archetype.jpeg"
import BB from "../assets/images/3bb.png"
import Telekom from "../assets/images/Telekom2.png"
import Vertiv from "../assets/images/vertiv.png"
import TSI from "../assets/images/TSI.jpeg"
import splitChennai from "../assets/images/splitchennai.jpg"
import IDP from "../assets/images/IDP.png"
import sdworx from "../assets/images/sdworx.png"
import abinbev from "../assets/images/abinbev.png"
import maersk from "../assets/images/Maersk.png"
import Ideagen from "../assets/images/Ideagen.png"




import "swiper/css/swiper.css";

const BrandsTwo = () => {
  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 4
      },
      640: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
  };



  const Brands =[
    {
     image : mandc,
     height:"80px",
    },
    {
      image : hid,
      padding:"30px",
      width:"180px",
      height:"130px"
     },
     {
      image : who,
      width:"200px",
      height:"130px"
     },
     {
      image : stradegi,
      padding:"20px 0 0 0",
      height:"100px",
      width:"170px"
     },
     {
      image : aurbus,
      height:"100px",
      width:"170px"
     },
     {
      image : catalystone,
      height:"100px",
      width:"170px"
     },
     {
      image : trelleborg,
      height:"100px",
      width:"170px"
     },
     {
      image : brand11,
      height:"100px",
      width:"170px"
     },
     {
      image : brand12,
      height:"120px",
      width:"170px"
     },
     {
      image : danskebank,
      height:"50px",
      width:"150px"
     },
     {
      image : geekyants,
      height:"50px",
      width:"160px"
     },
     {
      image : brand15,
      height:"90px",
      width:"140px"
     },
     {
      image : brand16,
      height:"70px",
      width:"190px"
     },
     {
      image : delhivery,
      height:"100px",
      width:"170px"
     },
     {
      image : sutherland,
      height:"60px",
      width:"220px"
     },
     {
      image : amicus,
      height:"140px",
      width:"150px"
     },
     {
      image : cloudcover,
      height:"100px",
      width:"170px"
     },
     {
      image : solverminds,
      height:"55px",
      width:"170px"
     },
     {
      image : evolenthealth,
      height:"100px",
      width:"170px"
     },
     {
      image : TechnoTree,
      height:"100px",
      width:"100px"
     },
     {
      image : AECS,
      height:"100px",
      width:"150px"
     },
     {
      image : archetype,
      height:"100px",
      width:"100px"
     },
     {
      image : BB,
      height:"100px",
      width:"100px"
     },
     {
      image : Telekom,
      height:"100px",
      width:"170px"
     },
     {
      image : Vertiv,
      height:"100px",
      width:"170px"
     },
     {
      image : TSI,
      height:"100px",
      width:"130px"
     },
     {
      image : splitChennai,
      padding:"10px",
      height:"100px",
      width:"100px"
     },
     {
      image : IDP,
      height:"90px",
      width:"170px"
     },
     {
      image : sdworx,
      height:"70px",
      width:"170px"
     },
     {
      image : abinbev,
      height:"95px",
      width:"140px"
     },
     {
      image : maersk,
      height:"130px",
      width:"200px"
     },
     {
      image : Ideagen,
      height:"85px",
      width:"170px"
     },

     

  ]





  return (

     <div className="container">
      <div className="row mx-0">
        {Brands.map((items)=>(<div className="col-6 col-xl-3 col-md-4 aboutcontain p-2">
          <div className="aboutcontain-img">
          <img src={items.image} alt="" key={items}  style= {{width:`${items.width}`, height:`${items.height}`,padding:`${items.padding}`}} className="aboutcontain_image" />
          </div>
        </div>))}
      </div>
     </div>
  );
};

export default BrandsTwo;