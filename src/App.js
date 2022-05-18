import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Links from './components/Links';
import HelloWord from './components/HelloWord';
import ShowId from './components/ShowId';
import Prop from './components/Prop';
import FetchApi from './components/FetchApi';

class App extends React.Component {
  state = {
    objeto: {
      name: 'humberto',
      idade: 22,
    }
  }

  changeProps = ({ target: { value } }) => {
    this.setState({ objeto: { name: value, idade: 22}}, () => {
      console.log(this.state.objeto)
    });
  }
  render() {
    return (
      <BrowserRouter>
      <input type="text" onChange={this.changeProps} placeholder="name" />
        <Switch>
          <Route exact path="/" component={Links} />
          <Route path="/hello" component={HelloWord} />
          <Route path="/dog" component={FetchApi} />
          <Route path="/show/:id" component={ShowId} />
          <Route path="/prop" 
          render={() => <Prop objeto={this.state.objeto} onChange={ this.changeProps } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;



