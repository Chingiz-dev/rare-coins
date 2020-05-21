import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
class ComplexFilter extends Component {
  render = () => {
    return (
      <FilterForm>
        <div>
          <label htmlFor="filter">input field</label>
          <br />
          <Input type="text" id="filter"
           // value={this.state.coinType} onChange={this.handleInput}
          />

          <Link to="/coinslist" onClick={this.handleClick} >
            <Button type="submit">Search</Button>

          </Link>
        </div>

        <div>
          <Link to="/">advanced filter /\</Link>
        </div>
        <div>

          <label htmlFor="filter1">Issuing country</label>
          <br />
          <Input type="text" id="filter1"
          // onChange={this.handleInput} value={this.state.pass}
          />
        </div>
        <div>

          <label htmlFor="filter2">Metal</label>
          <br />
          <Input type="text" id="filter2"
          // onChange={this.handleInput} value={this.state.pass}
          />

        </div>
        <div>
          <label htmlFor="filter3">Quality of the coin</label>
          <br />
          <Input type="text" id="filter3"
          // onChange={this.handleInput} value={this.state.pass}
          />

        </div>
      </FilterForm >
    )
  }
}
export default ComplexFilter;

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
