import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Image from "gatsby-image";

import videoBg from "../images/video-bg.mp4";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 103;
  .inside {
    position: relative;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 20px;
    top: 40%;
    color: white;
    font-family: League Spartan;

    h1 {
      font-family: League Spartan;
      margin-bottom: 8px;
    }
  }
`;

const FullScreenBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  .background-overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 2;
    opacity: 0.5;
  }
`;

export default class IndexPage extends Component {
  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <FullScreenBackground>
        <div className="background-overlay" />
        {/* <Image
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
          sizes={data.background.sizes}
        /> */}
        <video
          //autoPlay
          muted
          loop
          id="myVideo"
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "auto",
            height: "auto",
            minWidth: "100%",
            minHeight: "100%",
            left: "50%",
            transform: "translateX(-50%)"
          }}
        >
          <source src={videoBg} type="video/mp4" />
        </video>
        <Container>
          <div className="inside">
            <h1>hi im josh</h1>
            <p>welcome to my little universe</p>
          </div>
        </Container>
      </FullScreenBackground>
    );
  }
}

export const query = graphql`
  query HomeMeta {
    background: imageSharp(id: { regex: "/bg.jpg/" }) {
      sizes(maxWidth: 1920) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
