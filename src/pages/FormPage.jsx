import React, { useState } from 'react';
import Filter from '../components/Filter';
import RestaurantList from '../components/RestaurantList';

const HomePage = () => {
    const [restaurants, setRestaurants] = useState([
        { id: 1, name: 'Restaurant 1', location: 'centre-ville', specialty: 'burgers', origin: 'italien' },
        { id: 2, name: 'Restaurant 2', location: 'peripherie', specialty: 'kebabs', origin: 'libanais' },
        { id: 3, name: 'Restaurant 3', location: 'centre-ville', specialty: 'pizzas', origin: 'italien' },
        
    ]);

    const handleFilterChange = (filters) => {
        // Implémentez la logique pour filtrer les restaurants en fonction des filtres sélectionnés
        // Mettez à jour la liste des restaurants en conséquence
        console.log('Filtres sélectionnés:', filters);
    };

    return (
        <div>
            <Filter onFilterChange={handleFilterChange} />
            <RestaurantList restaurants={restaurants} />
        </div>
    );
};

export default HomePage;
