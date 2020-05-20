import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
class CoinTypes extends Component {
  state = {
    coin: '',
  }

  getCoin = () => {
    const query = '/coinstyp/' + this.props.cointype;
    fetch(query)
      .then((res) =>
        res.json()
      )
      .then((data) => {
        if (data.length > 0) {
          console.log(data);
          console.log(data[0]);
          console.log(data[0].obv);
          this.setState({ coin: data[0] });
          // this.setState({ coin: data[0].obv });
        }
      });
  }

  componentDidMount = () => {
    this.getCoin();
  }

  handleClick = () => {
    this.props.changeFilter(this.props.cointype);
  }

  handleCoinClick = () => {
    this.props.changeCoin(this.state.coin);
  }

  render = () => {
    const { cointype } = this.props;
    let { coin } = this.state;
    return (
      <div>
        <h2>{cointype} coins</h2>
        <Link to="/coinslist" onClick={this.handleClick} >Show all ></Link>
        <div>
          <Link to="/onecoin" onClick={this.handleCoinClick} >
            <BigCoins src={coin.obv} alt={coin.coin} />
          </Link>
        </div>
      </div>
    )
  }
}
export default CoinTypes;

const BigCoins = styled.img`
    height: 29.7vh; transition: 1s;
    &:hover {
      transform: scale(1.10);
      box-shadow: 2px 2px 4px #000000;
    }
`
