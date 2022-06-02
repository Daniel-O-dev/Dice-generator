import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

export default class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };


  state = {
    Die1: 'one',
    Die2: 'one',
    isRolling: false
  };

  roll = (e) => {
    const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];



    this.setState({ Die1: newDie1, Die2: newDie2, isRolling: true });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className='RollDice'>
        <h1>Random Dice Generator  <i class="fa-solid fa-dice"></i> </h1>

        <div className='RollDice-container'>
          <Die face={this.state.Die1} Rolling={this.state.isRolling} />
          <Die face={this.state.Die2} Rolling={this.state.isRolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'Rolling ...' : 'Roll dice!'}
        </button>
      </div>
    );
  }
}
