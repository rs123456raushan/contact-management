import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useQuery } from '@tanstack/react-query';
import { fetchCountriesData } from '../api/covidApi';
import L from 'leaflet';

interface CountryData {
    country: string;
    countryInfo: {
        _id: number;
        lat: number;
        long: number;
        flag: string
    };
    active: number;
    recovered: number;
    deaths: number;
}

const Map = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['countriesData'],
        queryFn: fetchCountriesData,
    }) as { data: CountryData[], isLoading: any, error: any };


    if (isLoading) return <div className='m-5 text-center'>Loading map...</div>;
    if (error) return <div className='m-5 text-center'>Error loading map...</div>;

    const position: [number, number] = [20, 0];

    return (
        <div className="p-2 h-full flex flex-col">
            <h2 className="text-2xl text-center font-bold mb-4">COVID-19 Map</h2>
            <MapContainer center={position} zoom={2} style={{ height: '500px', width: '100vw' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {data.map((country: CountryData) => (
                    <Marker
                        key={country.countryInfo._id}
                        position={[country.countryInfo.lat, country.countryInfo.long]}
                        icon={L.icon({
                            iconUrl: country.countryInfo.flag,
                            iconSize: [15, 10],
                        })}
                    >
                        <Popup>
                            <div>
                                <h3>{country.country}</h3>
                                <p>Active: {country.active}</p>
                                <p>Recovered: {country.recovered}</p>
                                <p>Deaths: {country.deaths}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
