import { Line } from 'react-chartjs-2';
import { useQuery } from '@tanstack/react-query';
import { fetchHistoricalData } from '../api/covidApi';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface HistoricalData {
    cases: { [date: string]: number };
    deaths: { [date: string]: number };
    recovered: { [date: string]: number };
}

const LineGraph = () => {
    const { data, isLoading, error } = useQuery<HistoricalData>({
        queryKey: ['historicalData'],
        queryFn: fetchHistoricalData,
    });

    if (isLoading) return <div className="m-5 text-center">Loading...</div>;
    if (error) return <div className="m-5 text-center">Error loading data...</div>;
    if (!data) return <div className="m-5 text-center">No data available...</div>;

    const chartData = {
        labels: Object.keys(data.cases),
        datasets: [
            {
                label: 'Cases',
                data: Object.values(data.cases),
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
            },
            {
                label: 'Deaths',
                data: Object.values(data.deaths),
                borderColor: 'rgba(255,99,132,1)',
                fill: false,
            },
            {
                label: 'Recovered',
                data: Object.values(data.recovered),
                borderColor: 'rgba(54,162,235,1)',
                fill: false,
            },
        ],
    };

    // Responsive Chart options
    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow chart to take full height
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Count',
                },
            },
        },
    };

    return (
        <div className="pt-2 pl-14 h-full flex flex-col">
            <h2 className="text-2xl text-center font-bold mb-4">COVID-19 Cases Fluctuations</h2>
            <div className="flex-grow"> {/* Ensure this div takes the remaining space */}
                <article style={{ marginLeft: '-80px', width: '95vw', height: '400px' }} className="relative h-full">
                    <Line data={chartData} options={options} />
                </article>
            </div>
        </div>
    );
};

export default LineGraph;
