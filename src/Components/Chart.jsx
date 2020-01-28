import React from 'react';
import {Line} from 'react-chartjs-2';
import './Chart.scss';

class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            labels: ['January', 'February', 'March',
                     'April', 'May'],
            datasets: [
              {
                label: 'Rainfall',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
              }
            ]
        };
    }

    render() {
        return (
          <div>
            <Line
              data={this.state}
              options={{
                title:{
                  display:true,
                  text:'Average Rainfall per month',
                  fontSize:20
                }
              }}
            />
          </div>
        );
      }
}

export default Chart;