import React, {useEffect, useState} from 'react';
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"
import {Loader} from "../../../../shared/index.js";


const dateFormat = (utc) => {
    const date = new Date(utc);
    return date.toLocaleTimeString() + " " + date.toLocaleDateString()
}
export const CoinGraphics = ({id}) => {

    const [history, setHistory] = useState(null);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1&precision=2`)
            .then(res => res.json())
            .then(data => setHistory(data))
    }, []);

    const getChartData = (data) => {
        return {
            labels: data.prices.map((el) => dateFormat(el[0])),
            datasets: [{
                label: "Prices",
                data: data.prices.map((el) => el[1]),
                borderColor: '#16A34a',
                pointRadius: 2,
                hitRadius: 100,
            }]
        }
    }

    const chartOptions = {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 7,
                    align: 'center',
                    font: {
                        size: 11
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };


    return (
        <div className="mt-4 flex justify-center rounded-2xl bg-white bg-opacity-90 px-10 py-4 shadow-lg">
            {
                history ? <Line data={getChartData(history)} options={chartOptions}/> : <Loader/>
            }
        </div>
    );
};
