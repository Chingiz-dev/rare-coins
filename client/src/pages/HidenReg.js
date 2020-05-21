import React from 'react';
import { Link } from 'react-router-dom';

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
        console.log(data);
        this.onLogin(data.login);
      });
  }

  onLogin = (username) => {
    this.setState({ newUser: username });
  }

  render = () => {
    return (
      < div >
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="login">Логин</label>
          <input type="text" id="login" onChange={this.handleInput} value={this.state.login} />
          <label htmlFor="pass">Пароль</label>
          <input type="password" id="pass" onChange={this.handleInput} value={this.state.pass} />
          <button type="submit">Зарегаться</button>
        </form>
        {this.state.newUser && <p>Hello, {this.state.login}</p>}
        <Link to="/admin">Go To Admin Panel</Link>
      </div >
    );
  }
}
