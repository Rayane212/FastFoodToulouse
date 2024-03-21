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

    const handleReset = () => {
        setSelectedLocation('');
        setSelectedSpecialty('');
        setSelectedOrigin('');
        onFilterChange({ location: '', specialty: '', origin: '' });
    };

    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    id="centre-ville"
                    checked={selectedLocation === 'centre-ville'}
                    onChange={() => handleLocationChange('centre-ville')}
                />
                <label htmlFor="centre-ville">Centre Ville</label>

                <input
                    type="checkbox"
                    id="peripherie"
                    checked={selectedLocation === 'peripherie'}
                    onChange={() => handleLocationChange('peripherie')}
                />
                <label htmlFor="peripherie">Périphérie</label>
            </div>

            <div>
                <input
                    type="checkbox"
                    id="burgers"
                    checked={selectedSpecialty === 'burgers'}
                    onChange={() => handleSpecialtyChange('burgers')}
                />
                <label htmlFor="burgers">Burgers</label>

                <input
                    type="checkbox"
                    id="kebabs"
                    checked={selectedSpecialty === 'kebabs'}
                    onChange={() => handleSpecialtyChange('kebabs')}
                />
                <label htmlFor="kebabs">Kebabs</label>

                <input
                    type="checkbox"
                    id="pizzas"
                    checked={selectedSpecialty === 'pizzas'}
                    onChange={() => handleSpecialtyChange('pizzas')}
                />
                <label htmlFor="pizzas">Pizzas</label>
            </div>

            <div>
                <input
                    type="checkbox"
                    id="italien"
                    checked={selectedOrigin === 'italien'}
                    onChange={() => handleOriginChange('italien')}
                />
                <label htmlFor="italien">Italien</label>

                <input
                    type="checkbox"
                    id="libanais"
                    checked={selectedOrigin === 'libanais'}
                    onChange={() => handleOriginChange('libanais')}
                />
                <label htmlFor="libanais">Libanais</label>

                <input
                    type="checkbox"
                    id="marocain"
                    checked={selectedOrigin === 'marocain'}
                    onChange={() => handleOriginChange('marocain')}
                />
                <label htmlFor="marocain">Marocain</label>
            </div>

            <button onClick={handleReset}>Réinitialiser</button>
        </div>
    );
};

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
