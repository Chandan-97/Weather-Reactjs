import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Body from './components/Body/Body'

class App extends React.Component {
  
  App() {
    this.state = {
      weatherData: {} 
    }
  }

  componentWillMount() {
    this.setState({ weatherData: {} })
  }

  getData = (data) => {
    this.setState({ weatherData: data });
  }

  render() {
    return (
      <div>
        <NavBar getData={this.getData}/>
        <Body weatherData={this.state.weatherData}/>
      </div>
    );
  }
  
}

export default App;
