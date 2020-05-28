import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

class AdminCoin extends React.Component {


  handleDeleteClick = () => {
    const promptDelete = prompt("Print Yes to delete")
    if (promptDelete === 'Yes') {
      this.deleteThisCoin();
    }
  }

  deleteThisCoin = () => {
    const requestBody = {
      coinID: this.props.coin.coinID,
      token: localStorage.getItem('token')
    };
    console.log(requestBody);
    fetch('/deletecoin', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: { 'Content-type': 'application/json' }
    })
      .then((res) =>
        res.json()
      )
      .then((data) => {
        console.log(data);
      })
  }

  handleEditClick = () => {
    this.props.editCoin(this.props.coin);
  }

  render() {
    const { coin } = this.props;
    return (
      <Section>
        <CoinDiv>
          <SmallCoinImage src={coin.obv} alt={coin.coin} />
        </CoinDiv>
        <TextPart>
          <H3>{coin.coin}</H3>
          <P>{coin.shortD}</P>
        </TextPart>

        <Link to="/admin/edit" onClick={this.handleEditClick} >
          <Button>edit</Button>
        </Link>
        <Button type="button" onClick={this.handleDeleteClick} >Delete</Button>
      </Section>
    )
  }
}

export default AdminCoin;

const Section = styled.div`
  padding-left: 4vw;
  padding-top: 2.5vh;
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
    margin-block-start: 0em;
    margin-block-end: 0.2em;
`;

const P = styled.p`
    margin-block-start: 0.2em;
`;

const CoinDiv = styled.div`
    margin: 0vh 2vw 0vh 2.5vw;
`;

const Button = styled.button`
    border: none;
    margin: 0.7vh 2.6vw;
    width: 8vw;
    height: 7.4vh;
    background-color: #E5E5E5;
    color: black;
    &:hover{
      border-radius: 3px;
      background-color: blueviolet;
      opacity: 0.8;
      color: white;
      cursor: pointer;}
`;

const TextPart = styled.div`
      width: 18.5vw;
`;
