import React from 'react';
import {Line} from 'react-chartjs-2';
import './Chart.scss';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      labels: [],
      datasets: [
        {
          label: 'Temperature (F)',
          backgroundColor: 'rgba(214, 229, 227, 0.5)',
          borderColor: '#424874',
          borderWidth: 2,
          data: [],
          pointHitRadius: 10
        }
      ],
      converted_times: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:2500/")
      .then(res => res.json())
      .then(
        (result) => {
          let temperatures = result[0].content;
          let values = [];
          let times = [];

          temperatures.forEach(t => {
            values.push(t.temperature);
            times.push(t._id);
          });
          
          let d_sets = this.state.datasets;
          d_sets[0].data = values;

          this.setState({
            labels: times,
            datasets: d_sets,
          });
        },
        (error) => {
          this.setState({error: true});
        }
      );
  }

  render() {
    

    return (
      <div className='Graphs'>
        <Line
              height={100}
              className="temperature_chart"
              data={this.state}
              options={{
                maintainAspectRatio: true,
                
                title:{
                  display:true,
                  text:'Temperature Recording',
                  fontSize:20
                },
                legend:{
                  display: false
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: false,
                      min: 60,
                      max: 85
                    }
                  }],
                  xAxes :[{
                    type: 'time',
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10
                    }
                  }]
                },
                elements: {
                  point: {
                    radius: 0
                  }
                },
              }}
            />
      </div>
    );
  }
}

export default Chart;