import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import RoomIcon from '@mui/icons-material/Room';
import { renderToStaticMarkup } from 'react-dom/server';
import 'leaflet/dist/leaflet.css';


const CustomMarkerIcon = () => {
    const iconMarkup = renderToStaticMarkup(<RoomIcon style={{ fontSize: '30px', color: 'red', backgroundColor: "transparent" }} />);
    const customMarkerIcon = new L.DivIcon({
        html: '<span style="background=' + "transparent" + '">' + iconMarkup + '</span>',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        shadowSize: [30, 30],
        shadowAnchor: [15, 30],
    });
    return customMarkerIcon;
};

const Map = ({ position }) => {

    return (
        <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={CustomMarkerIcon()} >
                <Popup>
                    {position[0]}, {position[1]}
                </Popup>
            </Marker>


        </MapContainer>
    );
};

export default Map;
