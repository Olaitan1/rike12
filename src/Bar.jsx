import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const { CanvasJSChart } = CanvasJSReact;

class App extends Component {
	render() {
		const containerStyle = {
			height: "400px", 
			
		};

		const options = {
			height: 300, 
			axisX: {
				labelFormatter: function(e) {
					const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
					return daysOfWeek[e.value.getDay()]; // Return the day name based on the day of the week
				}
			},
			axisY: {
				gridThickness: 0, 
				tickLength: 0, 
				labelFormatter: function() { 
					return "";
				},
				minimum: 40 
			},
			data: [{
				type: "splineArea",
				dataPoints: [
					{ x: new Date(2022, 0, 2), y: 60.735 },
					{ x: new Date(2022, 0, 3), y: 54.102 },
					{ x: new Date(2022, 0, 4), y: 62.569 },
					{ x: new Date(2022, 0, 5), y: 52.743 },
					{ x: new Date(2022, 0, 6), y: 55.381 },
					{ x: new Date(2022, 0, 7), y: 63.163 },
					{ x: new Date(2022, 0, 8), y: 60.406 }
				]
			}]
		};

		return (
			<div style={containerStyle}>
				<CanvasJSChart options={options} backgroundColor="#f0f0f0" />
			</div>
		);
	}
}

export default App;
