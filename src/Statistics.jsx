import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import Down from './assets/down.png'

const { CanvasJSChart } = CanvasJSReact;

class App extends Component {
	render() {
		const options = {
			
			theme: "light2",
		
			axisX: {
				title: "Months",
				interval: 1,
				intervalType: "month",
				valueFormatString: "MMM",
			},
			data: [{
				type: "boxAndWhisker",
				color: "black",
				upperBoxColor: "blue",
				lowerBoxColor: "blue",
				yValueFormatString: "###.0# years",
				dataPoints: [
					{ label: "Nov", y: [67.5, 70.55, 76.705, 79.406, 73.15] },
					{ label: "Dec", y: [67.41, 71.03, 78.05, 80.657, 74.36] },
					{ label: "Jan", y: [64.94, 70.565, 78.17,  80.94, 75.345] },
					{ label: "Feb", y: [69.18, 71.06, 76.819, 79.425, 73.4] },
					{ label: "March", y: [69.62, 72.045, 78.7, 81.70, 75.8] },
					{ label: "April", y: [65.86, 70.255, 78.0625, 85, 75.24] },
					{ label: "May", y: [69.62, 72.045, 78.7, 81.70, 75.8] },
					{ label: "June", y: [65.86, 70.255, 78.0625, 85, 75.24] },
				]
			}]
		}

		return (
			<div className='bg-gray-100 px-4 rounded-xl pb-10'>
				<div className='flex justify-between mb-5 '>
					<p className='font-bold mt-4'>Statistics</p>
					<button className=" mt-4 flex gap-2 rounded-3xl bg-white px-5 py-2 text-indigo-800 font-bold">Year <span><img src={Down} alt="Icon" className="w-5 h-5 mt-1" /></span></button>
				</div>
				<CanvasJSChart options={options} />
			</div>
		);
	}
}

export default App;
