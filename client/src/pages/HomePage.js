import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import SimpleFilter from '../components/SimpleFilter';
import CoinTypes from '../components/CoinTypes';

class HomePage extends Component {

  render = () => {
    return (
      <div>
        <Header>
          <H1>Homepage</H1>
          <Link to="/admin">Admin panel</Link>
        </Header>
        <div>
          <SimpleFilter
            changeFilter={this.props.changeFilter}/>
        </div>
        <ThreeCoin>
          <CoinTypes cointype='Bullion'
            changeFilter={this.props.changeFilter} />
          <CoinTypes cointype='Exclusive'
            changeFilter={this.props.changeFilter} />
          <CoinTypes cointype='Commemorative'
            changeFilter={this.props.changeFilter} />
        </ThreeCoin>
      </div>
    )
  }
}


export default HomePage;

const Header = styled.header`
    display:flex;
    margin: 0.2vh 4.5vw 1.2vh 7vw;
    justify-content: space-between;
`
const ThreeCoin = styled.div`
    display:flex;
    margin-left: 7vw;
`

const H1 = styled.h1`
    width: 45vw;
    height: 6vh;
    font-size: 8vh;
    font-weight: 300;
`;
