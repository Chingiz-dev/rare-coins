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
            <H1>{coin.coin}</H1>
            <p>{coin.shortD}</p>
            <p>{coin.longD}</p>
            <Table>
              <tbody>
                <Tr>
                  <Td>Issuing country</Td>
                  <Td>{coin.country}</Td>
                </Tr>
                <tr>
                  <Td>Composition</Td>
                  <Td>{coin.metal}</Td>
                </tr>
                <Tr>
                  <Td>Quality</Td>
                  <Td>{coin.quality}</Td>
                </Tr>
                <tr>
                  <Td>Denomination</Td>
                  <Td>{coin.denom}</Td>
                </tr>
                <Tr>
                  <Td>Year</Td>
                  <Td>{coin.year}</Td>
                </Tr>
                <tr>
                  <Td>Weight</Td>
                  <Td>{coin.weight}</Td>
                </tr>
                <Tr>
                  <Td>Price</Td>
                  <Td>{coin.price}</Td>
                </Tr>
              </tbody>
            </Table>
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

const H1 = styled.h1`
       font-size: 28px;
    font-weight: bold;
`;

const StyledLink = styled(Link)`
    color: black;
  &:hover{
    color: blueviolet;
}`;

const CoinImage = styled.img`
    margin-bottom: 5vh;
    height: 42.5vh;
    transition: 0.5s;
    &:hover {
      transform: scale(1.2);
    }
`;

const Main = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 5vh;
    height: 95vh;
`;

const ImagesDiv = styled.div`
    width: 30vw;
`;

const TextDiv = styled.div`
    width: 35.3vw;
    background-color: rgba(196, 196, 196, 0.5);
    padding: 4vh 3vw 2vh 3vw;
    color: black;
    font-size: 2vh;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Td = styled.td`
    width: 50%;
    border: 1px solid rgba(196, 196, 196, 0.5);
    padding-left: 0.5vw;
`;

const Tr = styled.tr`
    background-color: white;
`;


const Table = styled.table`
    width: 100%;
`;
