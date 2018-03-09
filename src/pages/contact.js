import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 64px auto;
  max-width: 840px;
  padding: 0 20px;

  h1 {
    color: white;
    text-transform: uppercase;
    flex-basis: 100%;
    text-align: center;
    font-family: League Spartan;
    letter-spacing: 7px;
  }

  hr {
    width: 128px;
    height: 8px;
    margin: 32px auto;
    background-color: white;
  }

  p {
    color: white;

    &.headline {
      font-size: 32px;
      text-align: center;
      line-height: 1.5;
      margin-bottom: 64px;
    }
  }

  form {
    width: 100%;

    label {
      font-family: League Spartan;
      letter-spacing: 2px;
      display: block;
      margin-bottom: 4px;
      text-transform: uppercase;

      .required {
        color: #F4A943;
      }
    }

    input,
    textarea {
      width: 100%;
      background: #507c92
      border: none;
      padding: 8px;
      color: white;
    }

    textarea {
      resize: none;
      min-height: 160px;
    }

    button {
      letter-spacing: 4px;
      font-family: League Spartan;
      padding 16px 0;
      width: 100%;
      background-color: #3B6478;
      border: 4px solid #F4A943;
      color: #F4A943;
      text-transform: uppercase;
      font-size: 32px;
      transition: all 300ms linear;
      cursor: pointer;

      &:hover {
        background-color: #507c92;
        border-color: #507c92;
        color: white;
      }
    }
  }
`;

export default class ContactPage extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#3B6478",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignIitems: "center"
        }}
      >
        <Container>
          <h1>Contact</h1>
          <hr />
          <p className="headline">
            Have a question, interested in a project or want to discuss
            crossfit? Get in touch below!
          </p>
          <form name="contact" method="POST" netlify>
            <p>
              <label>
                First Name <span className="required">*</span>
              </label>
              <input type="text" name="name" />
            </p>
            <p>
              <label>
                Last Name <span className="required">*</span>
              </label>
              <input type="text" name="name" />
            </p>
            <p>
              <label>
                Email <span className="required">*</span>
              </label>
              <input type="email" name="email" />
            </p>
            <p>
              <label>
                Phone <span className="required">*</span>
              </label>
              <input type="email" name="email" />
            </p>
            <p>
              <label>Company</label>
              <input type="email" name="email" />
            </p>
            <p>
              <label>
                Message <span className="required">*</span>
              </label>
              <textarea name="message" />
            </p>
            <p>
              <button type="submit">Submit</button>
            </p>
          </form>
        </Container>
      </div>
    );
  }
}
