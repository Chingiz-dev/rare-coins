import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

class SmallCoinDescription extends React.Component {


  handleCoinClick = () => {
    this.props.changeCoin(this.props.coin);
  }

  render() {
    const { coin } = this.props;
    return (
      <Section>
        <CoinImg>
          <Link to="/onecoin" onClick={this.handleCoinClick} >
            <SmallCoinImage src={coin.obv} alt={coin.coin} />
          </Link>
        </CoinImg>
        <div>
          <H3>{coin.coin}</H3>
          <P>{coin.shortD}</P>
        </div>
      </Section>
    )
  }
}

export default SmallCoinDescription;

const Section = styled.div`
  width: 35vw;
  padding-left: 4vw;
  display: flex;
  padding-bottom: 0vw;

`;

const SmallCoinImage = styled.img`
    height: 16vh;
    transition: 0.5s;
    &:hover {
      transform: scale(1.15);
    }
`;

const H3 = styled.h3`
    font-size: 3vh;
    color: blueviolet;
    margin-block-start: 1em;
    margin-block-end: 0.2em;
`;

const P = styled.p`
    margin-block-start: 0.2em;
`;

const CoinImg = styled.div`
    margin: 2.5vh 2vw 0vh 2.5vw;
`;
