import React from "react";
import { Link } from "gatsby";

const PageBanner = (props) => {

  const { uri, title, image } = props

  return (
    <>
      <section className="inner-banner-agile-coaching-competencies position-relative" style={{ backgroundImage: `url(${image})` }}>
        <ul className="list-unstyled thm-breadcrumb ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a href={`/${uri}`}>{uri}</a>
          </li>
        </ul>
        <p className="container inner-banner__title">{title}</p>
      </section>
    </>
  );
};

export default PageBanner;