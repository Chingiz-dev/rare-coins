import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Select } from 'antd';
import 'antd/dist/antd.css';
const { Option } = Select;


class ComplexFilter extends Component {

  onChange = (value) => {
    console.log(`selected ${value}`);
  }

  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  render = () => {
    return (
      <FilterForm>
        <label htmlFor="filter"><b>Input field</b></label>
        <InputAndButton>
          <div>
            <Input type="text" id="filter"
            // value={this.state.coinType} onChange={this.handleInput}
            />
          </div>

          <Link to="/coinslist" onClick={this.handleClick} >
            <Button type="submit">Search</Button>
          </Link>
        </InputAndButton>

        <Filters>
          <StyledLink to="/">Advanced filter &#708;</StyledLink>
        </Filters>
        <div>
          <div>
            <label htmlFor="countryselect">Issuing country</label>
          </div>
          <Select
            id="countryselect"
            showSearch
            style={{
              width: '26vw',
              border: '1px solid black',
              height: '7vh'
            }}
            placeholder="Select a Country"
            optionFilterProp="children"
            onChange={this.onChange}
            // onFocus={onFocus}
            // onBlur={onBlur}
            onSearch={this.onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Canada">Canada</Option>
            <Option value="China">China</Option>
            <Option value="Iran">Iran</Option>
          </Select>
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

const SubmitDiv = styled.div`
    padding-top: 3.2vh;
`;


const InputAndButton = styled.div`
    display: flex;
`;

const UpperSearchDiv = styled.div`
    display: flex;
`;

const StyledLink = styled(Link)`
    color: black;
  &:hover{
    color: blueviolet;
}`;

const Filters = styled.div`
    margin-bottom: 2vh;
`

const FilterForm = styled.div`
    margin-left: 7vw;
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
