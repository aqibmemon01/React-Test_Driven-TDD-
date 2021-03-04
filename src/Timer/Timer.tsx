
import React, { Component } from 'react';
import './Timer.css';
import TimerButton from './TimerButton';

class Timer extends Component {
  constructor(props:any) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
      isOn: false,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    const { isOn }:any = this.state;

    if (isOn === true) {
      return;
    }
    var myInterval = setInterval(() => {
      const { seconds, minutes }:any = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }:any) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          this.setState(({ minutes }:any) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    this.setState({ isOn: true });
  }

  stopTimer() {
    // clearInterval(this.myInterval);
    this.setState({ isOn: false });
  }

  resetTimer() {
    this.stopTimer();
    this.setState({
      minutes: 25,
      seconds: 0,
    });
  }

  render = () => {
    const { minutes, seconds }:any = this.state;

    return (
      <div className="timer-container">
        <div className="time-display">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <div className="timer-button-container start-timer">
          <TimerButton
            buttonAction={this.startTimer}
            className="start-timer"
            buttonValue={'Start'}
          />
          <TimerButton
            className="stop-timer"
            buttonAction={this.stopTimer}
            buttonValue={'Stop'}
          />
          <TimerButton
            className={'reset-timer'}
            buttonAction={this.resetTimer}
            buttonValue={'Reset'}
          />
        </div>
      </div>
    );
  };
}

export default Timer;