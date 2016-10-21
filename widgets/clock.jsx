import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    this.timer = undefined;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000 );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    let {time} = this.state;

    return (
      <div className="widget col-1">
        <h2>Clock</h2>
        <div className="clock-box cf">
          <div className="clock-row col-1">
            <span>Time:</span><span>{time.toLocaleTimeString()}</span>
          </div>
          <div className="clock-row col-1">
            <span>Date:</span><span>{time.toDateString()}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
