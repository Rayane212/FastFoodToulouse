import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const Filter = ({ onFilterChange }) => {
    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [selectedOrigin, setSelectedOrigin] = useState('');

    const handleSpecialtyChange = (event) => {
        const specialty = event.target.value;
        setSelectedSpecialty(specialty);
        onFilterChange({ specialty, origin: selectedOrigin });
    };

    const handleOriginChange = (event) => {
        const origin = event.target.value;
        setSelectedOrigin(origin);
        onFilterChange({ specialty: selectedSpecialty, origin });
    };

    const handleReset = () => {
        setSelectedSpecialty('');
        setSelectedOrigin('');
        onFilterChange({ specialty: '', origin: '' });
    };

    const specialties = [
         "Pizzas", "Pâtes", "Kebabs", "Salades", "Burgers", "Sushi", "Tapas", "Sandwiches", "Couscous", "Tajines", "Pâtisseries", "Baguettes", "Wok", "Nouilles", "Makis", "Frites"
    ];

    const origins = [
         "Italienne", "Libanaise", "Française", "Japonaise", "Espagnole", "Turque", "Marocaine", "Chinoise", "Américaine"
    ];

    return (
        <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
            <FormControl fullWidth>
                <InputLabel id="specialty-label">Spécialité</InputLabel>
                <Select
                    labelId="specialty-label"
                    value={selectedSpecialty}
                    label="Spécialité"
                    onChange={handleSpecialtyChange}
                >
                    {specialties.map((specialty, index) => (
                        <MenuItem key={index} value={specialty}>
                            {specialty}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="origin-label">Origine</InputLabel>
                <Select
                    labelId="origin-label"
                    value={selectedOrigin}
                    label="Origine"
                    onChange={handleOriginChange}
                >
                    {origins.map((origin, index) => (
                        <MenuItem key={index} value={origin}>
                            {origin}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Button variant="contained" color="primary" onClick={handleReset} fullWidth>
                Réinitialiser
            </Button>
        </Box>
    );
};

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
