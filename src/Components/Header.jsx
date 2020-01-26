import React from 'react';
import './Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temp_main: 0,
            temp_secondary: 0,
            temp_tertiary: 0,
        };
    }

    render() {
        return (
            <div className="header">
                <div className="header-title">
                    <span>Current temperatures:</span>
                </div>
                <div className="temp-table">
                    <div className="temp-display">
                        <span className="display-title">Primary Temperature:</span>
                        <span className="temp-main temp-value">{this.state.temp_main}</span>
                    </div>
                    <div className="temp-display">
                        <span className="display-title">Secondary Temperature:</span>
                        <span className="temp-secondary temp-value">{this.state.temp_secondary}</span>
                    </div>
                    <div className="temp-display">
                        <span className="display-title">Tertiary Temperature:</span>
                        <span className="temp-tertiary temp-value">{this.state.temp_tertiary}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;