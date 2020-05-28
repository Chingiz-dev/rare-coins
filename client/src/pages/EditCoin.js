import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class EditCoin extends Component {

  state = {
    coin: '',
    coinID: '',
    typ: '',
    shortD: "",
    longD: "",
    country: "",
    metal: "",
    quality: "",
    denom: "",
    year: '',
    weight: '',
    price: '',
    obv: "",
    rev: "",
    coinobv: '',
    coinrev: '',
    token: localStorage.getItem('token'),
  }

  componentDidMount() {
    this.setState({
      coin: this.props.coin.coin,
      coinID: this.props.coin.coinID,
      typ: this.props.coin.typ,
      shortD: this.props.coin.shortD,
      longD: this.props.coin.longD,
      country: this.props.coin.country,
      metal: this.props.coin.metal,
      quality: this.props.coin.quality,
      denom: this.props.coin.denom,
      year: this.props.coin.year,
      weight: this.props.coin.weight,
      price: this.props.coin.price,
      obv: this.props.coin.obv,
      rev: this.props.coin.rev,
      coinobv: this.props.coin.coinobv,
      coinrev: this.props.coin.coinrev,
    });
  }

  handleInput = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const requestBody = {
      coin: this.state.coin,
      coinID: this.state.coinID,
      typ: this.state.typ,
      shortD: this.state.shortD,
      longD: this.state.longD,
      country: this.state.country,
      metal: this.state.metal,
      quality: this.state.quality,
      denom: this.state.denom,
      year: this.state.year,
      weight: this.state.weight,
      price: this.state.price,
      obv: this.state.obv,
      rev: this.state.rev,
      coinobv: this.state.coinobv,
      coinrev: this.state.coinrev,
      token: this.state.token,
    };
    fetch('/editcoin', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: { 'Content-type': 'application/json' }
    })
      .then((res) =>
        res.json()
      )
      .then((data) => {
        console.log(data);
        console.log('now go to admin panel');
      })
  }


  render = () => {
    return (
      <div>
        <Header>
          <H1>Admin panel</H1>
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="coin">Coin name</label>
            <div>
              <Input type="text" id="coin" onChange={this.handleInput} value={this.state.coin} />
            </div>

            <label htmlFor="denom">Face value</label>
            <div>
              <Input type="text" id="denom" onChange={this.handleInput} value={this.state.denom} />
            </div>

            <label htmlFor="year">Year of issue</label>
            <div>
              <Input type="number" id="year" onChange={this.handleInput} value={this.state.year} />
            </div>

            <label htmlFor="price">Price</label>
            <div>
              <Input type="number" id="price" onChange={this.handleInput} value={this.state.price} />
            </div>

            <label htmlFor="country">Country</label>
            <div>
              <Input type="text" id="country" onChange={this.handleInput} value={this.state.country} />
            </div>

            <label htmlFor="metal">Metal</label>
            <div>
              <Input type="text" id="metal" onChange={this.handleInput} value={this.state.metal} />
            </div>

          </div>
          <div>

            <label htmlFor="typ">Type value</label>
            <div>
              <Input type="text" id="typ" onChange={this.handleInput} value={this.state.typ} />
            </div>

            <label htmlFor="shortD">Short description</label>
            <div>
              <Textarea type="text" id="shortD" onChange={this.handleInput} value={this.state.shortD} />
            </div>

            <label htmlFor="longD">Long description</label>
            <div>
              <Textarea type="text" id="longD" onChange={this.handleInput} value={this.state.longD} />
            </div>

            <label htmlFor="quality">Quality of the coin</label>
            <div>
              <Input type="text" id="quality" onChange={this.handleInput} value={this.state.quality} />
            </div>



          </div>
          <div>
            <label htmlFor="weight">Weight</label>
            <div>
              <Input type="text" id="weight" onChange={this.handleInput} value={this.state.weight} />
            </div>
            <label htmlFor="obv">Name for the obverse</label>
            <div>
              <Input type="text" id="obv" onChange={this.handleInput} value={this.state.obv} />
            </div>
            <label htmlFor="rev">Name for the reverse</label>
            <div>
              <Input type="text" id="rev" onChange={this.handleInput} value={this.state.rev} />
            </div>




            <Button type="submit">Save</Button>
            <Link to="/admin" >
              <Button type="reset">Cansel</Button>
            </Link>


          </div>

        </Form>
      </div>
    )
  }
}
export default EditCoin;

const Form = styled.form`
    display: flex;
    margin-left: 7vw;
`;

const Button = styled.button`
    border: none;
    margin: 3vh 2.5vw;
    width: 8vw;
    height: 7.3vh;
    background-color: #E5E5E5;
    color: black;
    &:hover{
      border-radius: 3px;
      background-color: blueviolet;
      color: white;
      cursor: pointer;}
`;

const H1 = styled.h1`
    width: 45vw;
    height: 6vh;
    font-size: 8vh;
    font-weight: 300;
`;

const Header = styled.header`
    display:flex;
    margin: 0.2vh 4.5vw 1.2vh 7vw;
    justify-content: space-between;
`;

const Input = styled.input`
    border: 1px solid black;
    width: 26vw;
    height: 7vh;
    margin: 0.7vh 3vw 2vh 0;
    font-size: 3vh;
    padding-left: 1vw;
`;

const Textarea = styled.textarea`
border: 1px solid black;
width: 26vw;
height: 19vh;
margin: 0.7vh 3vw 2vh 0;
font-size: 3vh;
padding-left: 1vw;

`;
