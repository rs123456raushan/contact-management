const BASE_URL = 'https://disease.sh/v3/covid-19';

// Fetch world data
export const fetchWorldData = async () => {
    const res = await fetch(`${BASE_URL}/all`);
    return res.json();
};

// Fetch historical data for line graph
export const fetchHistoricalData = async () => {
    const res = await fetch(`${BASE_URL}/historical/all?lastdays=all`);
    return res.json();
};

// Fetch country-specific data
export const fetchCountriesData = async () => {
    const res = await fetch(`${BASE_URL}/countries`);
    return res.json();
};
