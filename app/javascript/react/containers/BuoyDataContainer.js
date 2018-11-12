import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import ReactDOM from "react-dom";

class BuoyDataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waves: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/buoydatas`)
    .then(response => {
      if (response.ok) {
        return response;
      } else{
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(message);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let historicalData = []
      let waveData = body.map(wave => {
        historicalData.push(wave.height)
      })
      this.setState({ waves: historicalData})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    return(
      <div className="chart"><br/>
        <Chart
        chartType="LineChart"
        options={{title: "NOAA Station 44098 (Jeffrey's Ledge) - Previous Wave Data (Hourly)", curveType: "none", legend: { position: "top" }}}
        width="100%"
        height="400px"
        data={[['Time', 'Wave Height, Ft.'],["4 Hours Ago", this.state.waves[6]], ["3.5 Hours Ago", this.state.waves[5]], ["3 Hours Ago", this.state.waves[4]], ["2.5 Hours Ago", this.state.waves[3]], ["2 Hours Ago", this.state.waves[2]], ["1.5 Hours Ago", this.state.waves[1]], ["1 Hours Ago", this.state.waves[6]], [".5 Hours Ago", this.state.waves[0]]]}
        legend_toggle
        />
      </div>
    )
  }
}

export default BuoyDataContainer
