import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchCoin from './pages/SearchCoin';
import CoinsList from './pages/CoinsList';
import OneCoin from './pages/OneCoin';
import AdminPanel from './pages/AdminPanel';
import EditCoin from './pages/EditCoin';
import AddCoin from './pages/AddCoin';
import HidenReg from './pages/HidenReg';

class App extends React.Component {
  state = {
    filter: {},
    coinDetails: '',
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username')
  }

  onLogin = (token, username) => {
    this.setState({ token, username });
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }

  onLogout = (token, username) => {
    this.setState({
      token: '',
      username: ''
    });
    localStorage.removeItem('token', token);
    localStorage.removeItem('username', username);
  }

  changeFilter = (value) => {
    this.setState({ filter: { coinName: value } });
  }

  changeComplexFilter = (value) => {
    this.setState({
      filter: value
    });
  }

  changeCoin = (value) => {
    this.setState({ coinDetails: value });
  }

  render = () => {
    return (

      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage changeFilter={this.changeFilter} />
          </Route>
          <Route path="/search" exact>
            <SearchCoin  changeComplexFilter={this.changeComplexFilter} />
          </Route>
          <Route path="/coinslist" exact>
            <CoinsList filter={this.state.filter}
              changeCoin={this.changeCoin}
              changeFilter={this.changeFilter} />
          </Route>
          <Route path="/onecoin" exact>
            <OneCoin coin={this.state.coinDetails} />
          </Route>
          <Route path="/admin" exact>
            <AdminPanel onLogin={this.onLogin} onLogout={this.onLogout} />
          </Route>
          <Route path="/admin/edit" exact>
            <EditCoin token={this.state.token} />
          </Route>
          <Route path="/admin/add" exact>
            <AddCoin token={this.state.token} />
          </Route>
          <Route path="/hidenreg" exact>
            <HidenReg />
          </Route>
        </Switch>
      </Router>
    )
  }
}
export default App;
