import React, { Component } from 'react';
import styled from 'styled-components';
import SimpleFilter from '../components/SimpleFilter';
import SmallCoinDescription from '../components/SmallCoinDescription';
import { Link } from 'react-router-dom';
class AdminPanel extends Component {

  state = {
    username: localStorage.getItem('username'),
    login: '',
    pass: '',
    coins: [],
    filter: '',
  }

  changeFilter = (value) => {
    this.setState({ filter: value });
  }

  componentDidMount = () => {
    this.state.username && this.getCoins();
  }

  getCoins = () => {
    fetch('/coinsall')
      .then((res) =>
        res.json()
      )
      .then((data) => {
        if (data.length > 0) {
          this.setState({ coins: data });
        }
        else { console.log('err', data) }
      });
  }

  handleInput = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value });
  }

  handleLogout = () => {
    this.setState({
      login: '',
      pass: ''
    });
    this.props.onLogout();
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const requestBody = {
      login: this.state.login,
      pass: this.state.pass,
    };

    fetch('/token', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: { 'Content-type': 'application/json' }
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({ username: data.login })
        this.props.onLogin(data.token, data.login);
        this.getCoins();
      });
  }

  render = () => {
    return (
      <div>
        <Header>
          <H1>Admin panel</H1>
          <Link to="/">back to homepage</Link>
        </Header>
        {this.state.username ?
          <div>
            <div>
              <SimpleFilter
                changeFilter={this.state.changeFilter} />
            </div>
            <div>
              <Link to="/admin/add"><LinkToCoin><Circle>+</Circle><div> Add a new coin</div></LinkToCoin></Link>
            </div>
            <div>

              {this.state.coins.map(coin => <SmallCoinDescription
                key={coin.coinID}
                coin={coin}
                changeCoin={this.props.changeCoin} />)}
            </div>

            <p>Hello, {this.state.username} !</p>
            <div>
              <Link to="/admin/edit">Edit Coins</Link>
            </div>
            <div>
              <Link to="/admin/add">Add coin</Link>
            </div>
            <Link to="/">
              <Button type="button" onClick={this.handleLogout} >Sign out</Button>
            </Link>
          </div> :
          <div>
            <Form onSubmit={this.handleSubmit}>
              <label htmlFor="login">Логин</label>
              <div>
                <input type="text" id="login" onChange={this.handleInput} value={this.state.login} />
              </div>
              <label htmlFor="pass">Пароль</label>
              <div>
                <input type="password" id="pass" onChange={this.handleInput} value={this.state.pass} />
              </div>
              <Button type="submit">Sign in</Button>
            </Form>
            <Link to="/hidenreg">HidenReg</Link>
          </div>
        }
      </div >

    )
  }
}
export default AdminPanel;

const Button = styled.button`
    border: none;
    width: 8vw;
    height: 7.3vh;
    background-color: blueviolet;
    color: white;
`;

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

const Form = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
`;

const LinkToCoin = styled.div`
    width: 25vw;
    height: 16.6vh;
    display: flex;
    margin: 1vh 0 1vh 5vw;
`;

const Circle = styled.div`
    width: 110px;
    height: 110px;
    border: 1px solid black;
    border-radius: 50%;
    text-align: center;
`;
