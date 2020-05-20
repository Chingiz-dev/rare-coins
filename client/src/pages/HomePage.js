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
          <h1>Homepage</h1>
          <Link to="/admin">Admin panel</Link>
        </Header>
        <div>
          <SimpleFilter />
        </div>
        <ThreeCoin>
          <CoinTypes cointype='Bullion'
            changeFilter={this.props.changeFilter}
            changeCoin={this.props.changeCoin} />
          <CoinTypes cointype='Exclusive'
            changeFilter={this.props.changeFilter}
            changeCoin={this.props.changeCoin} />
          <CoinTypes cointype='Commemorative'
            changeFilter={this.props.changeFilter}
            changeCoin={this.props.changeCoin} />
        </ThreeCoin>
      </div>
    )
  }
}


const Header = styled.header`
    display:flex;
    justify-content: space-around;
`
const ThreeCoin = styled.div`
    display:flex;
    justify-content: space-around;
`
export default HomePage;
