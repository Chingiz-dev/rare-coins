import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class EditCoin extends Component {

  state = {
    coin: {},
    coinID: '',
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

  componentDidMount() {
    this.setState({
      coin: this.props.coin
    });
  }

  handleInput = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value });
  }

  render = () => {
    console.log(this.state.coin);
    const { coin } = this.state;
    return (
      <div>
        <div><header><h1>Admin panel edit</h1>
          <Link to="/">Logout</Link></header></div>
        <div>right</div>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="coin">Coin name</label>
            <div>
              <input type="text" id="coin" onChange={this.handleInput} value={coin.coin} />
            </div>

            <label htmlFor="denom">Face value</label>
            <div>
              <input type="text" id="denom" onChange={this.handleInput} value={coin.denom} />
            </div>

            <label htmlFor="year">Year of issue</label>
            <div>
              <input type="number" id="year" onChange={this.handleInput} value={coin.year} />
            </div>

            <label htmlFor="price">Price</label>
            <div>
              <input type="number" id="price" onChange={this.handleInput} value={coin.price} />
            </div>

            <label htmlFor="country">Country</label>
            <div>
              <input type="text" id="country" onChange={this.handleInput} value={coin.country} />
            </div>

            <label htmlFor="metal">Metal</label>
            <div>
              <input type="text" id="metal" onChange={this.handleInput} value={coin.metal} />
            </div>

          </div>
          <div>

            <label htmlFor="typ">Type value</label>
            <div>
              <input type="text" id="typ" onChange={this.handleInput} value={coin.typ} />
            </div>

            <label htmlFor="shortD">Short description</label>
            <div>
              <input type="text" id="shortD" onChange={this.handleInput} value={coin.shortD} />
            </div>

            <label htmlFor="longD">Long description</label>
            <div>
              <input type="text" id="longD" onChange={this.handleInput} value={coin.longD} />
            </div>

            <label htmlFor="quality">Quality of the coin</label>
            <div>
              <input type="text" id="quality" onChange={this.handleInput} value={coin.quality} />
            </div>

            <label htmlFor="weight">Weight</label>
            <div>
              <input type="text" id="weight" onChange={this.handleInput} value={coin.weight} />
            </div>

          </div>
          <div>
            <label htmlFor="obv">Name for the obverse</label>
            <div>
              <input type="text" id="obv" onChange={this.handleInput} value={coin.obv} />
            </div>
            <label htmlFor="rev">Name for the reverse</label>
            <div>
              <input type="text" id="rev" onChange={this.handleInput} value={coin.rev} />
            </div>

            <label htmlFor="coinobv">path for the obverse</label>
            <div>
              <input type="text" id="coinobv" onChange={this.handleInput} value={coin.coinobv} />
            </div>
            <label htmlFor="coinrev">path for the reverse</label>
            <div>
              <input type="text" id="coinrev" onChange={this.handleInput} value={coin.coinrev} />
            </div>

            <label htmlFor="upobv">Download obverse</label>
            <div>
              <input type="file" id="upobv" ref={this.fileInput} />
            </div>

            <label htmlFor="uprev">Download reverse </label>
            <div>
              <input type="file" id="uprev" ref={this.fileInput} />
            </div>

            <Button type="submit">Save</Button>
          </div>

        </Form>
      </div>
    )
  }
}
export default EditCoin;

const Form = styled.form`
    display: flex;
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
