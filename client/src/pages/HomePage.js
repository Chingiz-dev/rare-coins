import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SimpleFilter from "../components/SimpleFilter";
import CoinTypes from "../components/CoinTypes";

function HomePage(props) {
  return (
    <div>
      <Header>
        <H1>Homepage</H1>
        <AdminLink>
          <StyledLink to="/admin">Admin panel</StyledLink>
        </AdminLink>
      </Header>
      <div>
        <SimpleFilter changeFilter={props.changeFilter} />
      </div>
      <Filters>
        <StyledLink to="/search">Advanced filter &#709; </StyledLink>
      </Filters>
      <ThreeCoin>
        <CoinTypes cointype="Bullion" changeFilter={props.changeFilter} />
        <CoinTypes
          cointype="Exclusive"
          changeFilter={props.changeFilter}
        />
        <CoinTypes
          cointype="Commemorative"
          changeFilter={props.changeFilter}
        />
      </ThreeCoin>
    </div>
  );
}

export default HomePage;

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    color: blueviolet;
  }
`;

const Header = styled.header`
  display: flex;
  margin: 0.2vh 4.5vw 1.2vh 7vw;
  justify-content: space-between;
`;

const ThreeCoin = styled.div`
  @media (orientation: portrait) {
    display: block;
  }
  @media (orientation: landscape) {
    display: flex;
  }
  margin-left: 7vw;
`;

const H1 = styled.h1`
  width: 45vw;
  height: 6vh;
  font-size: 8vh;
  font-weight: 300;
`;

const AdminLink = styled.div`
  padding-top: 2vw;
`;

const Filters = styled.div`
  margin-left: 7vw;
  margin-bottom: 0.5vh;
`;
