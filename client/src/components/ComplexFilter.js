import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';


class ComplexFilter extends Component {

  state = {
    coin: "",
    country: "",
    metal: "",
    quality: "",
    yearFrom: '',
    yearTo: '',
    priceFrom: '',
    priceTo: '',
  }

  handleInput = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value });
  }

  onChange = (value) => {
    console.log(`selected ${value}`);
  }

  handleButtonClick = () => {

    console.log(this.state);
  }

  render = () => {
    return (
      <FilterForm>
        <label htmlFor="coin"><b>Input field</b></label>
        <InputRow>
          <div>
            <Input type="text" id="coin"
              value={this.state.coin.toUpperCase()}
              onChange={this.handleInput} />
          </div>

          <Link to="/coinslist" onClick={this.handleButtonClick} >
            <Button type="button">Search</Button>
          </Link>
        </InputRow>

        <LinkDiv>
          <StyledLink to="/">Advanced filter &#708;</StyledLink>
        </LinkDiv>

        <InputRow>
          <div>
            <label htmlFor="country"><b>Issuing country</b></label>
            <br />
            <Input type="text" id="country"
              onChange={this.handleInput}
              value={this.state.country.toUpperCase()} />
          </div>
          <div>
            <label htmlFor="price"><b>Price</b></label>
            <br />
            <span>from</span>  <InputSmall type="number" id="priceFrom"
              onChange={this.handleInput}
              value={this.state.priceFrom} />
            <span>to</span>  <InputSmall type="number" id="priceTo"
              onChange={this.handleInput}
              value={this.state.priceTo} />
          </div>
        </InputRow>

        <InputRow>
          <div>
            <label htmlFor="metal"><b>Metal</b></label>
            <br />
            <Input type="text" id="metal"
              onChange={this.handleInput}
              value={this.state.metal.toUpperCase()} />
          </div>
          <div>
            <label htmlFor="year"><b>Year of issue</b></label>
            <br />
            <span>from</span>  <InputSmall type="number" id="yearFrom"
              onChange={this.handleInput}
              value={this.state.yearFrom} />
            <span>to</span>  <InputSmall type="number" id="yearTo"
              onChange={this.handleInput}
              value={this.state.yearTo} />
          </div>
        </InputRow>

        <div>
          <label htmlFor="quality"><b>Quality of the coin </b></label>
          <br />
          <Input type="text" id="quality"
            onChange={this.handleInput} value={this.state.quality.toUpperCase()} />

        </div>
      </FilterForm >
    )
  }
}
export default ComplexFilter;

const SubmitDiv = styled.div`
    padding-top: 3.2vh;
`;


const InputRow = styled.div`
    display: flex;

`;

const StyledLink = styled(Link)`
    color: black;
  &:hover{
    color: blueviolet;
}`;

const LinkDiv = styled.div`
    margin-bottom: 3vh;
`

const FilterForm = styled.div`
    margin-left: 7vw;
`;

const InputSmall = styled.input`
    border: 1px solid black;
    width: 12.1vw;
    height: 7vh;
    margin: 0.7vh 2vw 0.9vh 0.5vw;
    font-size: 3vh;
    padding-left: 1vw;
`;

const Input = styled.input`
    border: 1px solid black;
    width: 26vw;
    height: 7vh;
    margin: 0.7vh 3vw 0.9vh 0;
    font-size: 3vh;
    padding-left: 1vw;
`;

const Button = styled.button`
    border: none;
    margin-top: 0.7vh;
    width: 8vw;
    height: 7.4vh;
    background-color: blueviolet;
    color: white;
    &:hover{
      opacity: 0.8;
      cursor: pointer;}
`;
