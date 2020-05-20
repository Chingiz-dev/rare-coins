import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchCoin from './pages/SearchCoin';
import CoinsList from './pages/CoinsList';
import OneCoin from './pages/OneCoin';
import AdminPanel from './pages/AdminPanel';
import EditCoin from './pages/EditCoin';
import AddCoin from './pages/AddCoin';

class App extends React.Component {
  state = {
    filterType: 'notfound',
    coinDetails: '',
  }

  changeFilter = (value) => {
    console.log(value);
    this.setState({ filterType: value });
  }

  changeCoin = (value) => {
    console.log(value);
    this.setState({ coinDetails: value });
  }

  render = () => {
    const { filterType } = this.state.filterType;
    console.log(filterType);
    return (

      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage changeFilter={this.changeFilter} changeCoin={this.changeCoin} />
          </Route>
          <Route path="/search" exact>
            <SearchCoin />
          </Route>
          <Route path="/coinslist" exact>
            <CoinsList filter={this.state.filterType} changeCoin={this.changeCoin}/>
          </Route>
          <Route path="/onecoin" exact>
            <OneCoin coin={this.state.coinDetails} />
          </Route>
          <Route path="/admin" exact>
            <AdminPanel />
          </Route>
          <Route path="/admin/edit" exact>
            <EditCoin />
          </Route>
          <Route path="/admin/add" exact>
            <AddCoin />
          </Route>
        </Switch>
      </Router>
    )
  }
}
export default App;
