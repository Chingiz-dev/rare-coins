import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

class SmallCoinDescription extends React.Component {


  handleCoinClick = () => {
    this.props.changeCoin(this.props.coin);
  }

  render() {
    // console.log(this.props.coin);
    const { coin } = this.props;
    return (
      <Section>
        <div>
          <Link to="/onecoin" onClick={this.handleCoinClick} >
            <SmallCoinImage src={coin.obv} alt={coin.coin} />
          </Link>
        </div>
        <div>
          <H2>{coin.coin}</H2>
          <p>{coin.shortD}</p>
        </div>
      </Section>
    )
  }
}

export default SmallCoinDescription;

const Section = styled.div`
  width: 41vw;
  padding-left: 4vw;
  display: flex;
  padding-bottom: 2vw;

`;

const SmallCoinImage = styled.img`
    height: 16.6vh;
    transition: 1s;
    &:hover {
      transform: scale(1.10);
      box-shadow: 2px 2px 4px #000000;
    }
`;

const H2 = styled.h2`
    font-size: 3vh;
`;
