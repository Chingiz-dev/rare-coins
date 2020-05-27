import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
class OneCoin extends Component {
  render = () => {
    const { coin } = this.props;
    return (

      <Main>


        <ImagesDiv>
          <div>
            <CoinImage src={coin.obv} alt={coin.coin} />
          </div>
          <div >
            <CoinImage src={coin.rev} alt={coin.coin} />
          </div >
        </ImagesDiv >



        <TextDiv>
          <div>
            <h1>{coin.coin}</h1>
            <p>{coin.shortD}</p>
            <p>{coin.longD}</p>
            <table>
              <tbody>
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
              </tbody>
            </table>
          </div>
          <div>
            <StyledLink to="/coinslist" >Back to the list ></StyledLink>
          </div>
        </TextDiv>

      </Main>
    )
  }
}
export default OneCoin;

const StyledLink = styled(Link)`
    color: black;
  &:hover{
    color: blueviolet;
}`;

const CoinImage = styled.img`
    height: 40vh;
    transition: 0.5s;
    &:hover {
      transform: scale(1.2);
    }
`;

const Main = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 5vh;
`;

const ImagesDiv = styled.div`
    width: 30vw;
`;

const TextDiv = styled.div`
    width: 30vw;
`;
