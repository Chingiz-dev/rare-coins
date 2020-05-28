import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class HidenReg extends React.Component {

  state = {
    login: '',
    pass: '',
    newUser: ''
  }

  handleInput = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const requestBody = {
      login: this.state.login,
      pass: this.state.pass
    };
    fetch('/register', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: { 'Content-type': 'application/json' }
    })
      .then(res => res.json())
      .then((data) => {
        this.onLogin(data.login);
      });
  }

  onLogin = (username) => {
    this.setState({ newUser: username });
  }

  render = () => {
    return (
      < div >
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="login"><b>New login</b></label>
          <div>
            <Input type="text" id="login" onChange={this.handleInput} value={this.state.login} />
          </div>
          <label htmlFor="pass"><b>New password</b></label>
          <div>
            <Input type="password" id="pass" onChange={this.handleInput} value={this.state.pass} />
          </div>
          <Button type="submit">register</Button>
        </Form>
        {this.state.newUser && <p>Hello, {this.state.login}</p>}
        <Link to="/admin">Go To Admin Panel</Link>
      </div >
    );
  }
}


const Form = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
`;

const Input = styled.input`
    border: 1px solid black;
    width: 26vw;
    height: 7vh;
    margin: 0.7vh 0vw 2.9vh 0;
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
