import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import ComplexFilter from '../components/ComplexFilter';

class SearchCoin extends Component {
    render = () => {
        return (
            <div>
                <Header>
                    <h1>Homepage</h1>
                    <Link to="/admin">Admin panel</Link>
                </Header>
                <div>
                    <ComplexFilter />
                </div>
            </div>
        )
    }
}


const Header = styled.header`
    display:flex;
    justify-content: space-around;
`
export default SearchCoin;
