import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import SimpleFilter from '../components/SimpleFilter';
import SmallCoinDescription from '../components/SmallCoinDescription';


class CoinsList extends Component {
  state = {
    coins: [],
  }

  getCoins = () => {
    const query = '/coins/' + this.props.filter;
    fetch(query)
      .then((res) =>
        res.json()
      )
      .then((data) => {
        if (data.length > 0) {
          console.log(data);
          console.log(data[0]);
          console.log(data[0].rev);
          this.setState({ coins: data });
        }
      });
  }

  componentDidMount = () => {
    this.getCoins();
  }

  render = () => {

    let { coin } = this.state;
    return (
      <div>
        <Header>
          <div>
            <h1>List of the coins</h1>
            <Link to="/">homepage</Link>
          </div>
          <Link to="/admin">Admin panel</Link>
        </Header>
        <div>
          <SimpleFilter />
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
    justify-content: space-around;
`
const SixCoins = styled.div`
    display:flex;
    flex-wrap: wrap;
`
