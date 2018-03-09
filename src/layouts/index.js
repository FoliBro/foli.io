import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "./index.css";
require("typeface-league-spartan");

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Foli"
      meta={[
        { name: "description", content: "Josh Foley" },
        { name: "keywords", content: "foli, josh, foley, blog" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query BackgroundMeta {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: { regex: "/bg.jpg/" }) {
      sizes(maxWidth: 1920) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
