import React, { useState, useCallback, useRef } from 'react';
import { Input } from 'antd';
import restaurantData from '../data/restaurantData.json';

const { Search } = Input;

const SearchBar = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const searchTimeout = useRef(null);

    const handleSearch = useCallback((value) => {
        setSearchValue(value);
        if (searchTimeout.current) {
            clearTimeout(searchTimeout.current);
        }
        searchTimeout.current = setTimeout(() => {
            if (value.length >= 2) {
                const filtered = restaurantData.filter((restaurant) =>
                    restaurant.name.toLowerCase().includes(value.toLowerCase())
                );
                setFilteredRestaurants(filtered);
            } else {
                setFilteredRestaurants([]);
            }
        }, 300); s
    }, []);

    const handleRestaurantSelect = useCallback((restaurant) => {
        setSelectedRestaurant(restaurant);
    }, []);

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
                    <div
                        key={restaurant.id}
                        style={{
                            marginBottom: 10,
                            cursor: 'pointer',
                            backgroundColor: selectedRestaurant === restaurant ? '#f0f0f0' : 'transparent'
                        }}
                        onClick={() => handleRestaurantSelect(restaurant)}
                    >
                        {restaurant.name}
                    </div>
                ))}
            </div>
            {selectedRestaurant && (
                <div style={{ marginTop: 20 }}>
                    <h2>{selectedRestaurant.name}</h2>
                    <p>{selectedRestaurant.description}</p>
                    {/* Ajoutez d'autres détails du restaurant si nécessaire */}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
