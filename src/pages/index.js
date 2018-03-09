import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Image from "gatsby-image";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
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
    opacity: 0.3;
  }
`;

export default class IndexPage extends Component {
  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <FullScreenBackground>
        <div className="background-overlay" />
        <Image
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
          sizes={data.background.sizes}
        />

        <Container>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>
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
