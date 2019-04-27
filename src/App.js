import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import War from './components/War'

class App extends React.Component {

  state = {
    dragons: [],
    value: ""
  }

  componentDidMount() {
    fetch('http://localhost:3001/dragons')
    .then(res => res.json())
    .then(data => {
      this.setState({dragons: data})
    })
  }

  toggleDragon = (selectedId) => {
    const toggledDragon = this.state.dragons.find( dragon => dragon.id === selectedId)

    fetch(`http://localhost:3001/dragons/${selectedId}`, {
      method: "PATCH",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify({
        atWar: !toggledDragon.atWar
      })
    })

    this.setState({
      dragons: this.state.dragons.map(dragon => {
          return (dragon.id === selectedId
          ? {...dragon, atWar: !dragon.atWar}
          : dragon)
      })
    })
  }

  changeValue = (e) => {
    e.persist()
    this.setState({
      value: e.target.value
    })
  }

  filterDragons = () => {
    return this.state.dragons.filter(dragon => dragon.name.toLowerCase().includes(this.state.value))
  }

  render() {
    return (
      <div>
        <Header value={this.state.value} changeValue={this.changeValue}/>
        <Home dragons={this.filterDragons().filter(dragon => !dragon.atWar)} toggleDragon={this.toggleDragon}/>
        <War dragons={this.filterDragons().filter(dragon => dragon.atWar)} toggleDragon={this.toggleDragon}/>
      </div>
    );
  }
}

export default App;


// import React, { Component } from 'react';
// import War from './War'
// import Home from './Home'
//
// class App extends Component {
//
//   render() {
//     return (
//       <div>
//         <Home />
//         <War />
//       </div>
//     );
//   }
// }
//
// export default App;
