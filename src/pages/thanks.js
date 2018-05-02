import React from "react";
import styled from "styled-components";

import bgPattern from "../img/background-pattern.png";
import Button from "../components/Button";

const ThanksWrapper = styled.div`
  height: 100vh;
`;
const ThanksIcon = styled.div`
  background-image: url(${bgPattern}),
    linear-gradient(141deg, #4e54c8 0%, #8f94fb 100%);
  clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 100px), 0 100%);
  background-size: 70px, auto;
  height: 85vh;
  overflow: hidden;
  margin-bottom: -110px;
  display: flex;
  flex-direction: column;

  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 10vmin;
    text-transform: uppercase;
    font-weight: 100;
    color: #fff;
    margin: 0;
    padding: 0;
    line-height: 1;
    text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.15);
    position: relative;
    z-index: 2;
    display: inline-block;
  }

  h2 {
    font-size: 2.5vmin;
    color: #7bed9f;
  }

  .banner span:hover {
    -webkit-transform: scale(1.1) rotate(1deg);
    transform: scale(1.1) rotate(1deg);
    cursor: cell;
  }
  .banner span {
    display: inline-block;
    transition: all 0.2s;
  }

  .banner span:hover:last-child {
    -webkit-transform: scale(2) rotate(10deg);
    transform: scale(2) rotate(10deg);
    color: #7bed9f;
  }
`;

const ThanksBtn = styled.div`
  background-image: url(${bgPattern});
  background-color: #fff;
  background-size: 70px, auto;
  height: calc(15vh + 110px);
  display: grid;
  justify-content: center;
  align-content: center;
`;

const tkmsg = "Thank you!";
const thanks = () => {
  return (
    <ThanksWrapper>
      <ThanksIcon>
        <h1 className="banner banner--large">
          {Array.from(tkmsg).map(
            (char, i) =>
              char !== " " ? (
                <span key={`${char}-${i}`}>{char}</span>
              ) : (
                <span key={`${char}-${i}`}>&nbsp;</span>
              )
          )}
        </h1>
        <h2>I'll get in toch with you as soon as possible</h2>
        <Button mode="primary" text="Go back" action="/" />
      </ThanksIcon>
      <ThanksBtn />
    </ThanksWrapper>
  );
};

export default thanks;
