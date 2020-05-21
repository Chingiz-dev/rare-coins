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
          this.setState({ coin: data[0] });
        }
        else { console.log('err')}
      });
  }

  componentDidMount = () => {
    this.getCoin();
  }

  handleClick = () => {
    this.props.changeFilter(this.props.cointype);
  }

  render = () => {
    const { cointype } = this.props;
    let { coin } = this.state;
    return (
      <CoinBlock>
        <H2>{cointype} coins</H2>
        <Link to="/coinslist" onClick={this.handleClick} >Show all ></Link>
        <div>
          <Link to="/coinslist" onClick={this.handleClick} >
            <BigCoins src={coin.obv} alt={coin.coin} />
          </Link>
        </div>
      </CoinBlock>
    )
  }
}
export default CoinTypes;

const BigCoins = styled.img`
  margin-top: 3vh;
    height: 29.7vh; transition: 1s;
    &:hover {
      transform: scale(1.10);
    }
`;

const CoinBlock = styled.div`
    width: 30vw;
`;

const H2 = styled.h2`
    font-size: 5vh;
    font-weight: 550;
`;
