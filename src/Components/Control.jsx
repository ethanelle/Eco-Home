import React from 'react';
import './Control.scss';

class Control extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0
        }
    }

    incrementCurrent(e) {
        this.setState({
            current: this.state.current + 1
        });
    }

    decrementCurrent(e) {
        this.setState({
            current: this.state.current - 1
        });
    }

    render() {
        return (
            <div className="control">
                <div className="control-display">
                    <div className="control-display-text-box">
                        <span className="control-display-text">Current setting:</span>
                        <span className="control-display-text control-display-value">{this.state.current}</span>
                    </div>
                </div>
                <div className="control-buttons">
                    <div className="btn btn-control btn-control-increment"
                        onClick={this.incrementCurrent.bind(this)}>
                        <span>+</span>
                    </div>
                    <div className="btn btn-control btn-control-decrement"
                        onClick={this.decrementCurrent.bind(this)}>
                        <span>-</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Control;