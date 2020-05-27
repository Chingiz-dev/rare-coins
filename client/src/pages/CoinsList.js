import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import SimpleFilter from '../components/SimpleFilter';
import SmallCoinDescription from '../components/SmallCoinDescription';


class CoinsList extends Component {
  state = {
    coins: [],
    filter: {},
    coinsPerPage: 6,
    countFromCoin: 0,
    prev: false,
    next: false
  }

  setCoinsPerPage = (evt) => {
    this.setState({
      coinsPerPage: evt.target.value,
      countFromCoin: 0,
      prev: false,
      next: false
    });
  }

  goToPrevious = () => {
    const dif = this.state.countFromCoin - this.state.coinsPerPage;
    if (dif < 0) {
      this.setState({
        countFromCoin: 0,
        prev: true,
        next: false
      })
    } else {
      this.setState({
        countFromCoin: dif,
        prev: false,
        next: false
      });
    }
  }

  goToNext = () => {
    const dif = +this.state.countFromCoin + +this.state.coinsPerPage;
    if (this.state.coinsPerPage <= this.state.coins.length) {
      this.setState({
        prev: false,
        next: false,
        countFromCoin: dif
      })
    } else {
      this.setState({
        countFromCoin: this.state.countFromCoin,
        prev: false,
        next: true,
      })
    }
  }

  getCoins = () => {
    const filter = this.props.filter;
    const requestBody = {
      coinName: filter.coinName,
      country: filter.country,
      metal: filter.metal,
      quality: filter.quality,
      yearFrom: filter.yearFrom,
      yearTo: filter.yearTo,
      priceFrom: filter.priceFrom,
      priceTo: filter.priceTo,
      coinsPP: this.state.coinsPerPage,
      countFromCoin: this.state.countFromCoin,
    };

    fetch('/filter', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: { 'Content-type': 'application/json' }
    })
      .then((res) =>
        res.json()
      )
      .then((data) => {
        if (this.state.coinsPerPage > data.length > 0) {
          this.setState({
            coins: data,
            next: true
          });
        }
        else if (data.length > 0) {
          this.setState({
            coins: data,
            next: false
          });
        }
        else { console.log('error - no data') }
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
            <HomeLink to="/">Homepage  - list of the coins</HomeLink>
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
        <Footer>
          <label htmlFor="pagination">Coins per Page</label>
          <input type="number" id="pagination"
            onChange={this.setCoinsPerPage}
            onKeyUp={this.getCoins}
            value={this.state.coinsPerPage} />
          <button
            onMouseDown={this.goToPrevious}
            onMouseUp={this.getCoins}
            disabled={this.state.prev} >previous</button>
          <span>page: {
            this.state.countFromCoin / this.state.coinsPerPage + 1
          }   </span>
          <button
            onMouseDown={this.goToNext}
            onMouseUp={this.getCoins}
            disabled={this.state.next} >next</button>
        </Footer>
      </div>

    )
  }
}


export default CoinsList;

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

const Footer = styled.div`
  margin-top: 3vh;
  text-align: center;
`;
