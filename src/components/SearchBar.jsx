import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { restaurantData } from '../data/restaurantData';

const { Search } = Input;
import Header from './Header';

const SearchBar = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const handleSearch = (value) => {
        const filtered = restaurantData.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    };

    return (
        <>
            <Search
                placeholder="Search restaurants..."
                style={{ width: 200 }}
                onSearch={handleSearch}
            />
            {/* Render the filtered restaurant list */}
            {filteredRestaurants.map((restaurant) => (
                <div key={restaurant.id}>{restaurant.name}</div>
            ))}
        </>
    );
};

const App = () => {
    const [restaurantsData, setRestaurantsData] = useState([]);

    useEffect(() => {
        fetch('src/data/restaurantData.json')
            .then((response) => response.json())
            .then((data) => setRestaurantsData(data))
            .catch((error) => console.error('Error fetching restaurant data:', error));
    }, []);

    return <NavBar restaurants={restaurantsData} />;
};

export default Header;
