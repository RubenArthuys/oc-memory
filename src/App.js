import React, { Component } from 'react'
import './App.css'
import GuessCount from './GuessCount'
import Card from './Card'

class App extends Component {
  handleCardclick(card) {
    console.log(card, 'clicked')
  }

  render() {
    const won = new Date().getSeconds() % 2 === 0
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        <Card card="🐻" feedback="hidden" onClick={this.handleCardclick} />
        <Card card="🌇" feedback="justMatched" onClick={this.handleCardclick} />
        <Card card="😁" feedback="justMismatched" onClick={this.handleCardclick}/>
        <Card card="🔥" feedback="visible" onClick={this.handleCardclick}/>
        <Card card="🤓" feedback="hidden" onClick={this.handleCardclick}/>
        <Card card="👻" feedback="justMatched" onClick={this.handleCardclick}/>
        {won && <p>Gagné</p> }
      </div>
    ) 
  }
}

export default App