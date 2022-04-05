import styled from "styled-components";

export const ContentWrapper = styled.div`
  font-family: "Poppins";
  color: white;
  height: fit-content;
  min-height: calc(100vh - 160px);
  max-height: 1080px;
  max-width: 1440px;
  padding: 80px 10%;
  margin: auto;

  //Background
  background-image: url(${process.env.PUBLIC_URL + "/images/bg-intro-desktop.png"});
  background-color: hsl(0, 100%, 74%);
  background-size: 100%;
  background-position: top;

  //Diet Holy Albatross implementation
  display: flex;
  gap: 64px;
  align-items: center;
  flex-wrap: wrap;

  & > section {
    //Diet Holy Albatross implementation
    flex-basis: 400px;
    flex-grow: 1;
    & > h1 {
      margin: 0  0 5%;
      font-size: min(7vw, 4em);
    }
    & > p {
      font-weight: 500;
      font-size: min(4vw, 1.2em);
      margin: 0;
    }
  }

  @media (max-width: 1080px) {
    text-align: center;
    background-image: url(${process.env.PUBLIC_URL + "/images/bg-intro-mobile.png"});
  }
`;

export const PromoBtn = styled.button`
  width: 100%;
  font-size: min(4vw, 1.2em);
  font-weight: 400;
  padding: max(1.5em, 4%) max(4em, 4%);
  margin-bottom: 32px;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 0.5em;
  background-color: hsl(248, 32%, 49%);
  color: white;
  transition: transform 0.3s;
  line-height: 1.6em;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SuccessModal = styled.div`
  display: ${({ display })=>display==="true"?"block":"none"};
  background-image: url(${process.env.PUBLIC_URL + "/images/confetti-test.gif"});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
  width: 100%;
  opacity: 80%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
  &::after{
    content: "Success";
    font-size: 6em;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: hsl(248, 32%, 20%);
  }
`;
