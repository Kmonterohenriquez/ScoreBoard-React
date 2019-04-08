import React, { Component } from 'react'

class Stopwatch extends Component {
    state = {
        isRunning: false

    }

    handleStopwatch = () => {
        this.setState({
            isRunning: !this.state.isRunning,
            elapsedTime: 0,
            previousTime: 0,
        });
        if (!this.state.isRunning) {
            this.setState({ previousTime: Date.now() });
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1)
    }

    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState({
                previousTime: now,
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
            });
        }
    }

    handleReset = () => {
        this.setState({ elapsedTime: 0 });
    }

    seconds = Math.floor(this.state.elapsedTime / 1000);
    render() {
        return (
            <div className='stopwatch'>
                <h2>Stopwatch</h2>
                <span className='stopwatch-time'>
                    {seconds}
                </span>
                <button onClick={this.handleStopwatch}>
                    {this.state.isRunning ? 'Stop' : 'Start'}
                </button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}
export default Stopwatch;