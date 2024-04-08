import React, { useState } from 'react';
import { Input } from 'antd';
import { restaurantData } from '../data/restaurantData';

const { Search } = Input;

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

export default SearchBar;
