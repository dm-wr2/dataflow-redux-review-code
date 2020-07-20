import React, {Component} from 'react';
import User from './Components/User';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'Handsome Squidward'
    }
  }

  

  render(){
    return (
      <div className="App">
        <User />
      </div>
    );
  }
}

export default App;
