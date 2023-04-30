import contributions from './data/contributions.json';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const LineChart = ({ data }) => {
    const chartData = [
        {
            name: 'Campaign Contributions',
            type: 'line',
            data: data.map(d => ({ x: d.election_year, y: d.donations }))
        },
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
        title: {
            text: 'Campaign Contributions by Finance/Insurance/Real Estate ',
            wrapTitle: true,
        },
        yaxis: [
            {
                title: {
                    text: 'Total Donations (inflation adjusted)'
                },
                tickAmount: 10
            },
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
            height={300}
            width={600}
        />
    );
};



export default function EightView() {
    return (
        <div style={{ justifyContent: 'center', display: 'flex', width: '100vw' }}>
            <div style={{ width: '80vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'inter' }}>
                <div>
                    <LineChart data={contributions} />
                    <div>
                        Finance is “far and away” the largest contributor to political campaigns
                    </div>
                </div>
                <div style={{ width: '300px', textAlign: 'center' }}>
                    <div>
                        Finance/insurance/real estate accounted for
                        <span style={{ fontSize: '1.4rem', fontWeight: 900 }}> $10.6B </span>
                        in lobbying from 1998 to 2022, second only to healthcare
                    </div>
                    <div style={{ marginTop: '60px' }}>
                        Politician Stock Trading
                        <br></br>
                        in 2021, U.S. lawmakers traded  <a href='https://www.marketwatch.com/story/u-s-lawmakers-traded-an-estimated-355-million-of-stock-last-year-these-were-the-biggest-buyers-and-sellers-11643639354'
                            style={{ fontSize: '1.4rem', fontWeight: 900 }}> $355M </a>in stocks
                    </div>
                </div>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, margin: '20px', fontSize: '0.8rem' }}>
                Source: Open Secrets, Market Watch, New York Times
            </div>
        </div>
    )
}