import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ComplexFilter from "../components/ComplexFilter";

function SearchCoin(props) {
  return (
    <div>
      <Header>
        <H1>Homepage</H1>
        <AdminLink>
          <StyledLink to="/admin">Admin panel</StyledLink>
        </AdminLink>
      </Header>
      <div>
        <ComplexFilter changeComplexFilter={props.changeComplexFilter} />
      </div>
    </div>
  );
}

export default SearchCoin;

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    color: blueviolet;
  }
`;

const AdminLink = styled.div`
  padding-top: 2vw;
`;

const Header = styled.header`
  display: flex;
  margin: 0.2vh 4.5vw 1.2vh 7vw;
  justify-content: space-between;
`;

const H1 = styled.h1`
  width: 45vw;
  height: 6vh;
  font-size: 8vh;
  font-weight: 300;
`;
