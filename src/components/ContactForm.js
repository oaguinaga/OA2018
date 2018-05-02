import React, { Component } from "react";
import styled from "styled-components";

import topographic from "../img/topographic.png";

const ContactContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  .form-bg {
    background: #ffffff7f;
    box-sizing: border-box;
    padding: 2rem 0;
    border-radius: 10px;
  }
`;

const Form = styled.form`
  width: 380px;
  box-sizing: border-box;

  input:hover {
    background: #5258c9;
    color: #fff;
  }

  label {
    position: absolute;
    padding: 3px 10px;
    text-transform: uppercase;
    color: #fff;
    background: #5258c9;
  }

  input {
    box-sizing: border-box;
    font-size: 1.6rem;
    width: 350px;
    height: 60px;
    padding: 10px 15px 0px 15px;

    background: transparent;
    outline: none;
    color: #5258c9;

    border: solid 1px #5258c9;
    border-bottom: none;

    transition: all 0.3s ease-in-out;
  }

  input::placeholder,
  textarea::placeholder {
    color: #5258c9;
    font-size: 1.6rem;
  }

  input:focus::placeholder,
  textarea::focus:placeholder {
    color: #fff;
  }

  input:hover::placeholder,
  textarea:hover::placeholder {
    color: #fff;
    font-size: 1.6rem;
  }

  textarea {
    margin-bottom: -4px;
    box-sizing: border-box;
    width: 350px;
    min-height: 17rem;
    padding: 25px 15px;

    background: transparent;
    outline: none;

    color: #5258c9;
    font-family: "Lato", sans-serif;
    font-size: 1.6rem;

    border: solid 1px #5258c9;
    resize: none;

    transition: all 0.3s ease-in-out;
  }

  textarea:hover {
    background: #5258c9;
    color: #fff;
  }

  button {
    box-sizing: border-box;
    width: 350px;
    padding: 1rem 0;
    margin: -2px 0px 0px 0px;

    font-size: 2rem;
    color: #5258c9;
    background: transparent;

    outline: none;
    cursor: pointer;

    border: solid 3px #5258c9;
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    color: #fff;
    background: #5258c9;
  }

  select,
  option {
    box-sizing: border-box;
    appearance: none;
    border: none;
    background: none;
    font-size: 1.6rem;
    padding: 1rem 0;
    margin: -5px 0px 5px 0px;
  }

  .budget label {
    font-size: 1.6rem;
  }
`;

class ContactForm extends Component {
  render() {
    return (
      <ContactContainer>
        <div className="form-bg">
          <Form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div>
              <label htmlFor="name">name</label>
              <input name="name" placeholder="John Smith" type="text" />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input
                name="email"
                placeholder="john.smith@mail.com"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="message">message</label>
              <textarea
                name="message"
                placeholder="Hey I have an amazing idea!"
              />
            </div>
            <div>
              <label htmlFor="budget">budget</label>
              <input name="budget" placeholder="$10k - 20k MXN" type="text" />
            </div>

            <button id="submit">Submit</button>
          </Form>
        </div>
      </ContactContainer>
    );
  }
}

export default ContactForm;
