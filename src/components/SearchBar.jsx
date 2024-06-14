import React, { useState } from 'react';
import { InputBase, Paper, ClickAwayListener, List, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useToggle } from '../context/ToggleContext';



const SearchBar = () => {
    const { restaurants } = useToggle();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleClose = () => {
        setQuery('');
        setResults([]);
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value) {
            const filteredResults = restaurants.filter((restaurant) =>
                restaurant.name.toLowerCase().includes(value.toLowerCase())
            );
            setResults(filteredResults);
        } else {
            setResults([]);
        }
    };
    const handleClick = (id) => {
        navigate(`/address/${id}`);
        handleClose();
    };

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
                <Paper
                    elevation={1}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px',
                        width: '100%'
                    }}
                >
                    <SearchIcon style={{ marginRight: '10px' }} />
                    <InputBase
                        placeholder="Rechercher..."
                        value={query}
                        onChange={handleSearch}
                        style={{ width: '100%' }}
                    />
                </Paper>
                {results.length > 0 && (
                    <Paper
                        elevation={1}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            zIndex: 1,
                            marginTop: '5px',
                            maxHeight: '200px', 
                            overflowY: 'auto' 
                        }}
                    >
                        <List>
                            {results.map((result) => (
                                <ListItem key={result.id} button onClick={() => handleClick(result.id)}>
                                    <ListItemText primary={result.name} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                )}
            </div>
        </ClickAwayListener>
    );
};

export default SearchBar;