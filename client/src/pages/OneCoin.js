import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
// import '../components/oneCoinStyle.css';
class OneCoin extends Component {
  render = () => {
    const { coin } = this.props;
    return (
      <div>

        <div class="coins-main">
          <div class="coins-big">
            <div class="coins-averse-big">
              <CoinImage src={coin.obv} alt={coin.coin} />
            </div>
            <div class="coins-reverse-big">
              <CoinImage  src={coin.rev} alt={coin.coin} />
            </div>
          </div>
          <div class="coins-text">
            <div class="coins-text-upper">
              <h1 class="coins-h1">{coin.coin}</h1>
              <p>{coin.shortD}</p>
              <p class="back-page-font">{coin.longD}</p>
              <table>
                <tr>
                  <td>Issuing country</td>
                  <td>{coin.country}</td>
                </tr>
                <tr>
                  <td>Composition</td>
                  <td>{coin.metal}</td>
                </tr>
                <tr>
                  <td>Quality</td>
                  <td>{coin.quality}</td>
                </tr>
                <tr>
                  <td>Denomination</td>
                  <td>{coin.denom}</td>
                </tr>
                <tr>
                  <td>Year</td>
                  <td>{coin.year}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{coin.weight}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{coin.price}</td>
                </tr>
              </table>
            </div>
            <div class="coins-text-lower">
              <Link to="/coinslist" >Back to the list ></Link>
            </div>
          </div>
        </div>
      </div>




    )
  }
}
export default OneCoin;

const CoinImage = styled.img`
    height: 29.7vh; transition: 1s;
    &:hover {
      transform: scale(1.10);
    }
`
