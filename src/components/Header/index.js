import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import logo from "../../images/foli-logo.svg";

const HeaderWrapper = styled.div`
  background: rgba(1, 1, 1, 0.4);
  background: black;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 8px 24px;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  h1 {
    a {
      display: block;
    }
    img {
      height: 40px;
      margin-bottom: 0;
    }
  }
`;

const Navigation = styled.div`
  ul {
    margin: 0;
    display: flex;
    justify-content: space-between;
    list-style: none;

    li {
      margin-bottom: 0;
      padding: 0 16px;

      a {
        color: white;
        text-decoration: none;
        position: relative;

        &:after {
          content: "";
          display: block;
          position: absolute;
          border-top: 1px solid white;
          height: 1px;
          width: 0;
          transition: all 300ms linear;
        }

        &:hover {
          &:after {
            width: 100%;
          }
        }
      }
    }
  }
`;

const Logo = styled.div``;

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <Logo>
            <h1 style={{ margin: 0 }}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                <img src={logo} alt="Foli Logo" />
              </Link>
            </h1>
          </Logo>
          <Navigation>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </Navigation>
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}
