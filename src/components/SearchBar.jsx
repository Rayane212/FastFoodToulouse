import React, { useState } from 'react';
import { Input } from 'antd';
import restaurantData from '../data/restaurantData.json';

const { Search } = Input;

const SearchBar = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (value) => {
        setSearchValue(value);
        if (value.length >= 2) {
            const filtered = restaurantData.filter((restaurant) =>
                restaurant.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredRestaurants(filtered);
        } else {
            setFilteredRestaurants([]);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Search
                placeholder="Search restaurants..."
                style={{ width: 400, marginBottom: 20 }}
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
            />
            <div style={{ width: 400 }}>
                {/* Render the filtered restaurant list */}
                {filteredRestaurants.map((restaurant) => (
                    <div key={restaurant.id} style={{ marginBottom: 10 }}>{restaurant.name}</div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
