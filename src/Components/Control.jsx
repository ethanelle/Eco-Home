import React from 'react';
import './Control.scss';

class Control extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current_setting: 0,
            current_temporary: 0
        }
    }

    incrementCurrent(e) {
        this.setState({
            current_setting: this.state.current_setting + 1
        });
    }

    decrementCurrent(e) {
        this.setState({
            current_setting: this.state.current_setting - 1
        });
    }

    changeTempSetting(e) {
        this.setState({
            current_temporary: e.target.value
        });
    }

    setTemperature() {
        this.setState({
            current_setting: this.state.current_temporary
        });
    }

    render() {
        return (
            <div className="control">
                <div className="control-display">
                    <div className="control-display-text-box">
                        <span className="control-display-text">Current setting:</span>
                        <input className="control-display-text control-display-value" 
                            value={this.state.current_setting} onChange={this.changeTempSetting.bind(this)} />
                        <button className="btn-control-set" onClick={this.changeTempSetting.bind(this)}>Set</button>
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