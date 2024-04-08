import React, { useState, useEffect } from 'react';
import Header from './Header';

const SearchBar = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm, handleSearch]);

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search restaurants..."
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
};

const NavBar = ({ restaurants }) => {
    const [filterTerm, setFilterTerm] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const handleSearch = (term) => {
        setFilterTerm(term);
    };

    useEffect(() => {
        const filtered = restaurants.filter(
            (restaurant) =>
                restaurant.name.toLowerCase().includes(filterTerm.toLowerCase()) ||
                restaurant.address.toLowerCase().includes(filterTerm.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    }, [restaurants, filterTerm]);

    return (
        <div className="navbar">
            <SearchBar handleSearch={handleSearch} />
            <ul>
                {filteredRestaurants.map((restaurant, index) => (
                    <li key={index}>
                        <span>{restaurant.name}</span>
                    </li>
                ))}
            </ul>
        </div>
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
