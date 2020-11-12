import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <MainContainer>
      <h1>Welcome to my Blog!</h1>
      <p>Follow my journey trying to learn all things computer science.</p>
    </MainContainer>
  );
};

export default Header;

// MAIN CONTAINER
const MainContainer = styled.header`
  background: url(../../header-bkg.jpeg) no-repeat center/cover;
  height: 25rem;

  h1 {
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 900;
    position: absolute;
    top: 20%;
    left: 50%;
  }

  p {
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 700;
    position: absolute;
    top: 24%;
    left: 50%;
  }
`;
