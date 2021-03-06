import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FormData = require('form-data');

class AddCoin extends Component {

  fileInput = React.createRef();

  handleSubmit = (evt) => {
    evt.preventDefault();
    const formdata = new FormData();
    formdata.append("typ", this.state.typ);
    formdata.append("coin", this.state.coin);
    formdata.append("shortD", this.state.shortD);
    formdata.append("longD", this.state.longD);
    formdata.append("country", this.state.country);
    formdata.append("metal", this.state.metal);
    formdata.append("quality", this.state.quality);
    formdata.append("denom", this.state.denom);
    formdata.append("year", this.state.year);
    formdata.append("weight", this.state.weight);
    formdata.append("price", this.state.price);
    formdata.append("obv", this.state.obv);
    formdata.append("rev", this.state.rev);
    formdata.append("coin", this.fileInput.current.files[0], this.state.coinobv);
    formdata.append("coin", this.fileInput.current.files[0], this.state.coinrev);
    formdata.append("token", this.state.token);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("/coin", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  // handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   const requestBody = {
  //     login: this.state.login,
  //     pass: this.state.pass,
  //   };

  //   fetch('/token', {
  //     method: 'POST',
  //     body: JSON.stringify(requestBody),
  //     headers: { 'Content-type': 'application/json' }
  //   })
  //     .then(res => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({ username: data.login })
  //       this.props.onLogin(data.token, data.login);
  //       this.getCoins();
  //     });
  // }

  handleInput = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value });
  }

  state = {
    typ: '',
    coin: "",
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


  render = () => {
    return (
      <div>
        <Header>
          <H1>Admin panel</H1>
          <Link to="/">back to homepage</Link>
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
              <Input type="text" id="shortD" onChange={this.handleInput} value={this.state.shortD} />
            </div>

            <label htmlFor="longD">Long description</label>
            <div>
              <Input type="text" id="longD" onChange={this.handleInput} value={this.state.longD} />
            </div>

            <label htmlFor="quality">Quality of the coin</label>
            <div>
              <Input type="text" id="quality" onChange={this.handleInput} value={this.state.quality} />
            </div>

            <label htmlFor="weight">Weight</label>
            <div>
              <Input type="text" id="weight" onChange={this.handleInput} value={this.state.weight} />
            </div>

          </div>
          <div>
            <label htmlFor="obv">Name for the obverse</label>
            <div>
              <Input type="text" id="obv" onChange={this.handleInput} value={this.state.obv} />
            </div>
            <label htmlFor="rev">Name for the reverse</label>
            <div>
              <Input type="text" id="rev" onChange={this.handleInput} value={this.state.rev} />
            </div>

            <label htmlFor="coinobv">path for the obverse</label>
            <div>
              <Input type="text" id="coinobv" onChange={this.handleInput} value={this.state.coinobv} />
            </div>
            <label htmlFor="coinrev">path for the reverse</label>
            <div>
              <Input type="text" id="coinrev" onChange={this.handleInput} value={this.state.coinrev} />
            </div>

            <label htmlFor="upobv">Download obverse</label>
            <div>
              <Input type="file" id="upobv" ref={this.fileInput} />
            </div>

            <label htmlFor="uprev">Download reverse </label>
            <div>
              <Input type="file" id="uprev" ref={this.fileInput} />
            </div>

            <Button type="submit">Save</Button>
          </div>

        </Form>

      </div>
    )
  }
}
export default AddCoin;

const Header = styled.header`
    display:flex;
    margin: 0.2vh 4.5vw 1.2vh 7vw;
    justify-content: space-between;
`

const H1 = styled.h1`
    width: 45vw;
    height: 6vh;
    font-size: 8vh;
    font-weight: 300;
`;

const Button = styled.button`
    border: none;
    width: 8vw;
    height: 7.3vh;
    background-color: blueviolet;
    color: white;
    &:hover{
      border-radius: 3px;
      opacity: 0.8;
      cursor: pointer;}
`;

const Form = styled.form`
    display: flex;
    margin-left: 7vw;
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
