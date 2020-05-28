import React, { Component } from 'react';
import styled from 'styled-components';
import SimpleFilter from '../components/SimpleFilter';
import AdminCoin from '../components/AdminCoin';
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

  changeCoin = (coin) => {
    console.log(coin.coinID);
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
          <HomeLink>
            <StyledLink to="/" onClick={this.handleLogout} >back to homepage</StyledLink>
          </HomeLink>
        </Header>
        {this.state.username ?
          <div>
            <div>
              <SimpleFilter
                changeFilter={this.state.changeFilter} />
            </div>
            <div>
              <StyledLink to="/admin/add"><LinkToCoin><SmallCoinImage src="addcoin.gif" /> Add a new coin </LinkToCoin></StyledLink>
            </div>
            <div>

              {this.state.coins.map(coin => <AdminCoin
                key={coin.coinID}
                coin={coin}
                changeCoin={this.changeCoin} />)}
            </div>


          </div> :
          <div>
            <Form onSubmit={this.handleSubmit}>
              <label htmlFor="login"><b>Login</b></label>
              <div>
                <Input type="text" id="login" onChange={this.handleInput} value={this.state.login} />
              </div>
              <label htmlFor="pass"><b>Password</b></label>
              <div>
                <Input type="password" id="pass" onChange={this.handleInput} value={this.state.pass} />
              </div>
              <ButtonDiv>
                <Button type="submit">Sign in</Button>
              </ButtonDiv>
            </Form>
            <HidenLink to="/hidenreg">HidenReg</HidenLink>
          </div>
        }
      </div >

    )
  }
}
export default AdminPanel;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center
`;

const Input = styled.input`
    border: 1px solid black;
    width: 26vw;
    height: 7vh;
    margin: 0.7vh 0vw 2.9vh 0;
    font-size: 3vh;
    padding-left: 1vw;
`;

const HomeLink = styled.div`
    padding-top: 2vw;
`;

const StyledLink = styled(Link)`
    color: black;
  &:hover{
    color: blueviolet;
}`;

const HidenLink = styled(Link)`
    color: white;
  &:hover{
    color: blueviolet;
}`;

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
    width: 20vw;
    height: 16.6vh;
    display: flex;
    margin: 1vh 0 1vh 6.3vw;
    line-height: 15vh;
`;

const SmallCoinImage = styled.img`
    height: 17.5vh;
    margin-right: 2vw;
    transition: 0.5s;
    &:hover {
      transform: scale(1.15);
    }
`;
