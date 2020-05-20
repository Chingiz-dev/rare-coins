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
                    <input type="text" id="filter"
                    // onChange={this.handleInput} value={this.state.pass}
                    />
                    <button type="submit">Search</button>
                </div>

                <div>
                    <Link to="/">advanced filter /\</Link>
                </div>
                <div>

                    <label htmlFor="filter">Issuing country</label>
                    <br />
                    <input type="text" id="filter"
                    // onChange={this.handleInput} value={this.state.pass}
                    />
                </div>
                <div>

                    <label htmlFor="filter">Metal</label>
                    <br />
                    <input type="text" id="filter"
                    // onChange={this.handleInput} value={this.state.pass}
                    />

                </div>
                <div>
                    <label htmlFor="filter">Quality of the coin</label>
                    <br />
                    <input type="text" id="filter"
                    // onChange={this.handleInput} value={this.state.pass}
                    />

                </div>
            </FilterForm >
        )
    }
}
export default ComplexFilter;

const FilterForm = styled.div`
    margin-left: 10vw;
`
