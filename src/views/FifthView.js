import React from 'react';
import data from './data/data.json';
import ReactApexChart from 'react-apexcharts';

const LineChart = ({ data }) => {
    const chartData = [
        {
            name: 'Banks',
            type: 'line',
            data: data.map(d => ({ x: d.YEAR, y: d.BANKS }))
        },
        {
            name: 'Net Income',
            type: 'line',
            data: data.map(d => ({ x: d.YEAR, y: d.NETINC_ADJ }))
        }
    ];

    const chartOptions = {
        chart: {
            id: 'basic-line',
            animations: {
                enabled: true,
                easing: 'linear',
                animateGradually: {
                    enabled: true
                }
            }
        },
        xaxis: {
            type: "datetime",
            tickAmount: 8,
            tickFormatter: function (value) {
                return Math.floor(value);
            },
        },
        yaxis: [
            {
                title: {
                    text: '# of Banks'
                },
                tickAmount: 10
            },
            {
                opposite: true,
                title: {
                    text: 'Net Income (adjusted for inflation)'
                },
                tickAmount: 10
            }
        ],
        legend: {
            position: 'top'
        },
        colors: ['#2196F3', '#FF5722'],
        dataLabels: {
            enabled: false
        }
    };



    return (
        <ReactApexChart
            options={chartOptions}
            series={chartData}
            type="line"
            height={400}
            width={900}
        />
    );
};


export default function FifthView() {

    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', }}>
            <LineChart data={data} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{
                    width: '500px',
                    marginRight: '30px',
                    fontFamily: 'inter',
                    fontSize: '1.1rem',
                    padding: '5px',
                    color: 'white',
                    backgroundColor: 'black',
                    marginTop: '-10px',

                }}>
                    In 2023 Commercial banking was the most profitable industry
                    in the US at $462.5B
                    <br></br>
                    <span style={{ fontSize: '0.8rem' }}>then life insurance at $242.2B,</span>
                    <br></br>
                    <span style={{ fontSize: '0.7rem' }}>then private equity, hedge funds, & investment vehicles at $149.1B,</span>
                    <br></br>
                    <span style={{ fontSize: '0.6rem' }}>then regional banks at $147.7B</span>

                </div>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, margin: '20px', fontSize: '0.8rem' }}>
                Source: FDIC, IBIS World
            </div>
        </div>
    )
}