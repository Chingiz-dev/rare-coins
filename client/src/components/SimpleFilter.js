import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
class SimpleFilter extends Component {

  state = {
    coinType: '',
  }

  handleInput = (evt) => {
    this.setState({ coinType: evt.target.value });
  }

  handleClick = () => {
    this.props.changeFilter(this.state.coinType);
  }

  render = () => {
    return (
      <FilterForm>
        <div>
          <label htmlFor="filter">input field</label>
          <br />
          <Input type="text" id="filter"
          value={this.state.coinType} onChange={this.handleInput}
          />

          <Link to="/coinslist" onClick={this.handleClick} >
            <Button type="submit">Search</Button>

          </Link>
        </div>

      </FilterForm >
    )
  }
}
export default SimpleFilter;

const FilterForm = styled.div`
    margin-left: 7vw;
`;

const Input = styled.input`
    border: 1px solid black;
    width: 27vw;
    height: 7vh;
    margin-right: 3vw;
`;

const Button = styled.button`
    border: none;
    width: 8vw;
    height: 7.3vh;
    background-color: blueviolet;
    color: white;
`;
