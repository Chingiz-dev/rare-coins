import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
class SimpleFilter extends Component {
    render = () => {
        return (
            <FilterForm>
                <div>
                    <label htmlFor="filter">input field</label>
                    <br />
                    <input type="text" id="filter"
                    // onChange={this.handleInput} value={this.state.pass}
                    />
                    <button type="submit">Search</button>
                </div>

                <div>
                    <Link to="/search">advanced filter V</Link>
                </div>
            </FilterForm >
        )
    }
}
export default SimpleFilter;

const FilterForm = styled.div`
    margin-left: 10vw;
`
