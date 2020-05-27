import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import SimpleFilter from '../components/SimpleFilter';
import SmallCoinDescription from '../components/SmallCoinDescription';


class CoinsList extends Component {
  state = {
    coins: [],
    filter: '',
  }

  getCoins = () => {
    const query = '/coins/' + this.props.filter;
    fetch(query)
      .then((res) =>
        res.json()
      )
      .then((data) => {
        if (data.length > 0) {
          this.setState({ coins: data });
        }
        else { console.log('err', data) }
      });
  }

  changeFilter = () => {
    if (this.props.filter !== this.state.filter) {
      this.setState({ filter: this.props.filter });
      this.getCoins();
    }
  }

  render = () => {
    this.changeFilter();
    return (
      <div>
        <Header>
          <div>
            <H1>List of the coins</H1>
            <HomeLink to="/">Homepage</HomeLink><Grey> - list of the coins</Grey>
          </div>
          <AdminLink>
            <StyledLink to="/admin">Admin panel</StyledLink>
          </AdminLink>
        </Header>
        <div>
          <SimpleFilter
            changeFilter={this.props.changeFilter} />
        </div>
        <Filters>
          <StyledLink to="/search">Advanced filter  &#709; </StyledLink>
        </Filters>
        <SixCoins>
          {this.state.coins.map(coin => <SmallCoinDescription
            key={coin.coinID}
            coin={coin}
            changeCoin={this.props.changeCoin} />)}
        </SixCoins>
      </div>

    )
  }
}


export default CoinsList;
const Grey = styled.span`
    color: #B1ABAB;
`;

const HomeLink = styled(Link)`
    color: #B1ABAB;
  &:hover{
    color: blueviolet;
}`;

const StyledLink = styled(Link)`
    color: black;
  &:hover{
    color: blueviolet;
}`;

const Header = styled.header`
    display:flex;
    margin: 0.2vh 4.5vw 1.2vh 7vw;
    justify-content: space-between;
`
const SixCoins = styled.div`
    display:flex;
    flex-wrap: wrap;
`

const H1 = styled.h1`
    width: 70vw;
    height: 3.5vh;
    font-size: 8vh;
    font-weight: 300;
`;

const Filters = styled.div`
    margin-left: 7vw;
    margin-bottom: 0.5vh;
`

const AdminLink = styled.div`
    padding-top: 2vw;
`;
