import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeConsumer } from "styled-components";
import SimpleFilter from '../components/SimpleFilter';
import SmallCoinDescription from '../components/SmallCoinDescription';


class CoinsList extends Component {
  state = {
    coins: [],
    filter: '',
  }

  getCoins = () => {
    const query = '/coins/' + this.props.filter;
    console.log(query);
    fetch(query)
      .then((res) =>
        res.json()
      )
      .then((data) => {
        if (data.length > 0) {
          // console.log(data);
          // console.log(data[0]);
          // console.log(data[0].rev);
          this.setState({ coins: data });
        }
        else { console.log('err', data) }
      });
  }

  changeFilter = () => {
    console.log('filter changing');
    if (this.props.filter != this.state.filter) {
      console.log('not equal');
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
            <Link to="/">homepage</Link>
          </div>
          <Link to="/admin">Admin panel</Link>
        </Header>
        <div>
          <SimpleFilter
            changeFilter={this.props.changeFilter} />
        </div>
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
    width: 45vw;
    height: 6vh;
    font-size: 8vh;
    font-weight: 300;
`;
