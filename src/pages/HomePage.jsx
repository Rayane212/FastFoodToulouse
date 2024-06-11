import React, { useState, useRef } from 'react';
import { useToggle } from '../context/ToggleContext';
import Filter from '../components/Filter';
import { Grid, Container, Box, Pagination } from '@mui/material';
import RestaurantList from '../components/RestaurantList';

const ITEMS_PER_PAGE = 8;

const HomePage = () => {
    const { restaurants } = useToggle();
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({ specialty: '', origin: '' });
    const contentRef = useRef(null);

    const handleFilterChange = (filters) => {
        setFilters(filters);
        setPage(1);
    };

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const paginatedRestaurants = restaurants.filter(restaurant =>
        (!filters.specialty || restaurant.specialties.includes(filters.specialty)) &&
        (!filters.origin || restaurant.origins.includes(filters.origin))
    ).slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

 
    return (
        <Container style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Box mt={4} mb={4} display="flex" flexDirection="column" alignItems="center" flexGrow={1} ref={contentRef}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                        <Filter onFilterChange={handleFilterChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <RestaurantList restaurants={paginatedRestaurants} />
                        </Grid>
                    </Grid>
                </Grid>
                <Box mt={2} display="flex" justifyContent="center">
                    <Pagination
                        count={Math.ceil(restaurants.length / ITEMS_PER_PAGE)}
                        page={page}
                        onChange={handleChangePage}
                        color="primary"
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default HomePage;
