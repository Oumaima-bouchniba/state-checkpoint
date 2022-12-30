import './App.css';
import React, { Component } from 'react';

class App extends Component {

state = {
  Person : {
    fullName: "Eren yeager",
    bio: " a member of the Survey Corps",
    imgSrc:" https://villains.fandom.com/wiki/Eren_Yeager",
    profession: "actor"
  },
  show : true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
}


  render() {
    return (
      <>
        {this.setState.show && (
          <>
          <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="Naruto"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}
        
        <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
}

export default App;

