import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      friends: [],
      picture: "",
      name: "",
    }
  }
  updatePicture(value) {
    this.setState({
      picture: value,
    })
  }
  updateName(value){
    this.setState({
      name: value,
    })
  }

  addFriend(){
    let friend = {
      name: this.state.name,
      picture: this.state.picture,
    }
    let newFriends = this.state.friends.slice(0);
    newFriends.push(friend)
    this.setState({
      friends: newFriends,
      picture: "",
      name:"",
    })
  }

  render() {

    const friends = this.state.friends.map((e, i) =>{
      return (
      <div key = {i}>
        <span>{e.name}</span>
        <img src={e.picture} alt="your mom"/>
      </div>);
    })

    return (
      <div>
     <span>Picture:</span>
     <input type= 'text' onChange={(e) => this.updatePicture(e.target.value)} value={this.state.picture}/>
      <span>Name:</span>
      <input type= 'text'onChange={(e) => this.updateName(e.target.value)} value={this.state.name}/>
      <button onClick={() => this.addFriend()}>Add Friend</button>
      {friends}
      </div>
    );
  }
}
export default App;
