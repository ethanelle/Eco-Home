import React from 'react';
import './Control.scss';

class Control extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            setting: 0,
            updatable: false,
            temporary: "0",
        }

        this.incrementSetting = this.incrementSetting.bind(this);
        this.decrementSetting = this.decrementSetting.bind(this);
        this.handleEnteredSetting = this.handleEnteredSetting.bind(this);
        this.handleSetSetting = this.handleSetSetting.bind(this);
    }

    incrementSetting(e) {
        this.setState({
            setting: this.state.setting + 1,
            temporary: this.state.setting + 1
        });
    }

    decrementSetting(e) {
        this.setState({
            setting: this.state.setting - 1, 
            temporary: this.state.setting - 1
        });
    }

    handleEnteredSetting(e) {
        this.setState({
            temporary: e.target.value,
            updatable: true
        });
    }

    handleSetSetting(e) {
        this.setState({
            setting: parseInt(this.state.temporary),
            updatable: false
        });
    }

    render() {
        return (
            <div className="control">
                <div className="control-display">
                    <span>Current setting:</span>
                    <input className="control-display-value" 
                        type="text"                             
                        value={this.state.temporary} 
                        onChange={this.handleEnteredSetting} />
                </div>
                <div className="control-buttons">
                    <div className="btn btn-control btn-control-increment"
                        onClick={this.incrementSetting}>
                        <span>+</span>
                    </div>
                    <div className="btn btn-control btn-control-decrement"
                        onClick={this.decrementSetting}>
                        <span>-</span>
                    </div>
                </div>
                <div className="set-button">
                    <div className="btn-set"
                        onClick={this.handleSetSetting} >
                        <span>Set thermostat</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Control;