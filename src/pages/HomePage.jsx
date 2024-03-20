import React, { useState } from 'react';
import Filter from '../components/Filter';
import RestaurantList from '../components/RestaurantList';

const HomePage = () => {
    const initialRestaurants = [
        { id: 1, name: 'Restaurant 1', location: 'centre-ville', specialty: 'burgers', origin: 'italien' },
        { id: 2, name: 'Restaurant 2', location: 'peripherie', specialty: 'kebabs', origin: 'libanais' },
        { id: 3, name: 'Restaurant 3', location: 'centre-ville', specialty: 'pizzas', origin: 'italien' },
  
    ];

    const [restaurants, setRestaurants] = useState(initialRestaurants);

    const handleFilterChange = (filters) => {
       
        let filteredRestaurants = initialRestaurants;

        if (filters.location) {
            filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.location === filters.location);
        }
        if (filters.specialty) {
            filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.specialty === filters.specialty);
        }
        if (filters.origin) {
            filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.origin === filters.origin);
        }

      
        setRestaurants(filteredRestaurants);
    };

    return (
        <div>
            <Filter onFilterChange={handleFilterChange} />
            <RestaurantList restaurants={restaurants} />
        </div>
    );
};

export default HomePage;
