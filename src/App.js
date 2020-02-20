import React from 'react';
// import Tweet from './Tweet';
import './App.css'
import MemeGenerator from './components/MemeGenerator';

function App() {
  return (
    <MemeGenerator />
  )
}

export default App;
















/*
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

// function App() {

//   return (
//     <div className="app">
//       <h2>My app</h2>
//       <Tweet name="john smith" arbitrary_name="I am john" number_of_likes="1" />
//       <Tweet name="neo" arbitrary_name="my name is neo" number_of_likes="10" />
//       <Tweet name="morpheus"  arbitrary_name="you are the one" number_of_likes="50" />
//     </div>
//   );
// }

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.handleSubmit = this.handSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  // grabs api data
  // componentDidMount() {
  //   this.setState ({
  //     loading: true
  //   });
  //   axios.get('https://swapi.co/api/people/1/')
  //     .then (response => {
  //       this.setState(prevState => {
  //         return {
  //           character: response.data,
  //           loading: false
  //         }
  //       })
  //       console.log(this.state);
  //     })
  // }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handSubmit(event) {
    alert('you submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    // const text = this.state.loading ? "loading!" : this.state.character.name;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App;
*/