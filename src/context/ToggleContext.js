import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; 

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
    ToggleProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };
    const [checked, setChecked] = useState(false);
    const [lastPage, setLastPage] = useState('/');
  
    const toggleChecked = (currentPage) => {
      setChecked((prev) => !prev);
      if (!checked) {
        setLastPage(currentPage);
      }
    };
  
    return (
      <ToggleContext.Provider value={{ checked, toggleChecked, lastPage }}>
        {children}
      </ToggleContext.Provider>
    );
  };

export const useToggle = () => useContext(ToggleContext);
