import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import ComplexFilter from '../components/ComplexFilter';

class SearchCoin extends Component {
    render = () => {
        return (
            <div>
            <Header>
              <H1>Homepage</H1>
              <Link to="/admin">Admin panel</Link>
            </Header>
                <div>
                    <ComplexFilter />
                </div>
            </div>
        )
    }
}


export default SearchCoin;

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
