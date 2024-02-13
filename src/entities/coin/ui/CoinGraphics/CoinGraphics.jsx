import React, {useEffect, useState} from 'react';
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"
import {Loader, PercentChange} from "../../../../shared";


const dateFormat = (utc) => {
    const date = new Date(utc);
    return date.toLocaleTimeString() + " " + date.toLocaleDateString()
}
export const CoinGraphics = ({id}) => {

    const [history, setHistory] = useState(null);
    const [period, setPeriod] = useState({text: "24h", value: "1"});
    const [priceChange, setPriceChange] = useState(null);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${period.value}&precision=2`)
            .then(res => res.json())
            .then(data => {
                setHistory(data)
                setPriceChange(getPriceChange(data.prices.map((el) => el[1])))
            });
    }, [period]);

    const getChartData = (data) => {
        return {
            labels: data.prices.map((el) => dateFormat(el[0])),
            datasets: [{
                label: "Prices",
                data: data.prices.map((el) => el[1]),
                borderColor: priceChange < 0 ? '#DC2626' : '#16A34a',
                pointRadius: 0,
                hitRadius: 100,
            }]
        }
    }


    const getPriceChange = (data) => {
        return ((data[data.length - 1] - data[0]) / data[0]) * 100
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
            }
        },
    };

    const chartBtn = [
        {text: "24h", value: "1"},
        {text: "7d", value: "7"},
        {text: "1m", value: "30"},
        {text: "3m", value: "90"},
        {text: "1y", value: "365"},
        {text: "Max", value: "max"}
    ];


    return (
        <div
            className="flex items-center justify-center rounded-2xl bg-white bg-opacity-90 px-10 py-4 shadow-lg min-h-64 dark:bg-black dark:bg-opacity-90">
            {
                !history || !priceChange || !period ? <Loader/> : (
                    <LineChart data={getChartData(history)} options={chartOptions} chartBtn={chartBtn} period={period}
                               setPeriod={setPeriod} priceChange={priceChange}/>
                )
            }

        </div>
    );
};


const LineChart = ({data, options, chartBtn, period, setPeriod, priceChange}) => {
    return (
        <div className="w-full">
            <div className="flex">
                <div className="space-x-2">
                    {
                        chartBtn.map((el, index) => (
                            <button
                                key={index}
                                className={"w-10 text-center rounded p-0.5 " + (period.text === el.text ? "bg-gray-400 dark:bg-gray-600" : "bg-gray-300 dark:bg-gray-900")}
                                onClick={() => setPeriod(el)}>{el.text}</button>
                        ))
                    }
                </div>
                <div className="flex-1 text-right text-3xl">
                    <PercentChange value={priceChange} precision={1} className=""/>
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                <Line data={data} options={options}/>
            </div>
        </div>
    );
};
