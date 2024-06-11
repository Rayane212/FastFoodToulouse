import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; 
import restaurantData from '../data/restaurantData.json';

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
    ToggleProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    const [checked, setChecked] = useState(false);
    const [lastPage, setLastPage] = useState('/');
    const [restaurants, setRestaurants] = useState(restaurantData);

    const toggleChecked = (currentPage) => {
        setChecked((prev) => !prev);
        if (!checked) {
            setLastPage(currentPage);
        }
    };

    const addRestaurant = (newRestaurant) => {
        setRestaurants([...restaurants, newRestaurant]);
    };

    return (
        <ToggleContext.Provider value={{ checked, toggleChecked, lastPage, restaurants, addRestaurant }}>
            {children}
        </ToggleContext.Provider>
    );
};

export const useToggle = () => useContext(ToggleContext);
