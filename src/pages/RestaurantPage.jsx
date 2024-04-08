import React from 'react';
import restaurantData from '../data/restaurantData.json';
import { useParams } from 'react-router-dom';
import Map from '../components/Map';

const RestaurantPage = () => {
    const { id } = useParams();
    const restaurant = restaurantData.find(r => r.id.toString() === id);
    console.log("resto : " + restaurantData);


    if (!restaurant) {
        return <div>Restaurant introuvable</div>;
    }

    return (
        <div>
            <h2>{restaurant.name}</h2>
            <img src={restaurant.image} alt={restaurant.name} style={{ width: "100%", height: "auto" }} />
            <p><strong>Adresse:</strong> {restaurant.address}</p>
            <p><strong>Spécialités:</strong> {restaurant.specialties.join(', ')}</p>
            <p><strong>Origine:</strong> {restaurant.origins.join(', ')}</p>
            <p><strong>Description:</strong> {restaurant.description}</p>
            <Map position={[restaurant.position.latitude, restaurant.position.longitude]} />
        </div>
    );
}


export default RestaurantPage;