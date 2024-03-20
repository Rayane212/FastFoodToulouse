import React from 'react';

const RestaurantList = ({ restaurants }) => {
    return (
        <div>
            <h2>Liste des Restaurants</h2>
            <ul>
                {restaurants.map((restaurant) => (
                    <li key={restaurant.id}>
                        <div>
                            <h3>{restaurant.name}</h3>
                            <p><strong>Localisation:</strong> {restaurant.location}</p>
                            <p><strong>Spécialité:</strong> {restaurant.specialty}</p>
                            <p><strong>Origine:</strong> {restaurant.origin}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantList;
