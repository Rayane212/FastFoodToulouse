import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onFilterChange }) => {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [selectedOrigin, setSelectedOrigin] = useState('');

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
        onFilterChange({ location, specialty: selectedSpecialty, origin: selectedOrigin });
    };

    const handleSpecialtyChange = (specialty) => {
        setSelectedSpecialty(specialty);
        onFilterChange({ location: selectedLocation, specialty, origin: selectedOrigin });
    };

    const handleOriginChange = (origin) => {
        setSelectedOrigin(origin);
        onFilterChange({ location: selectedLocation, specialty: selectedSpecialty, origin });
    };

    return (
        <div>
            <div>
                <button
                    onClick={() => handleLocationChange('centre-ville')}
                    className={selectedLocation === 'centre-ville' ? 'active' : ''}
                >
                    Centre Ville
                </button>
                <button
                    onClick={() => handleLocationChange('peripherie')}
                    className={selectedLocation === 'peripherie' ? 'active' : ''}
                >
                    Périphérie
                </button>
            </div>

            <div>
                <button
                    onClick={() => handleSpecialtyChange('burgers')}
                    className={selectedSpecialty === 'burgers' ? 'active' : ''}
                >
                    Burgers
                </button>
                <button
                    onClick={() => handleSpecialtyChange('kebabs')}
                    className={selectedSpecialty === 'kebabs' ? 'active' : ''}
                >
                    Kebabs
                </button>
                <button
                    onClick={() => handleSpecialtyChange('pizzas')}
                    className={selectedSpecialty === 'pizzas' ? 'active' : ''}
                >
                    Pizzas
                </button>
            </div>

            <div>
                <button
                    onClick={() => handleOriginChange('italien')}
                    className={selectedOrigin === 'italien' ? 'active' : ''}
                >
                    Italien
                </button>
                <button
                    onClick={() => handleOriginChange('libanais')}
                    className={selectedOrigin === 'libanais' ? 'active' : ''}
                >
                    Libanais
                </button>
                <button
                    onClick={() => handleOriginChange('marocain')}
                    className={selectedOrigin === 'marocain' ? 'active' : ''}
                >
                    Marocain
                </button>
            </div>
        </div>
    );
};

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
};

export default Filter;



