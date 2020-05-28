import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

class AdminFilter extends Component {

  state = {
    coinName: '',
  }

  handleInput = (evt) => {
    this.setState({ coinName: evt.target.value });
  }

  handleClick = () => {
    this.props.findCoin(this.state.coinName);
  }

  render = () => {
    return (
      <FilterForm>

        <label htmlFor="filter"><b>Input field</b></label>
        <InputAndButton>
          <div>
            <Input type="text" id="filter"
              value={this.state.coinName.toUpperCase()} onChange={this.handleInput} />
          </div>

          <Button type="button" onClick={this.handleClick} >Search</Button>

        </InputAndButton>

      </FilterForm >
    )
  }
}
export default AdminFilter;

const FilterForm = styled.div`
    margin-left: 7vw;
`;

const InputAndButton = styled.div`
    display: flex;
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
      border-radius: 3px;
      opacity: 0.8;
      cursor: pointer;}
`;
