import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { Box } from '@mui/material';
import SearchBar from './SearchBar';
import { useToggle } from '../context/ToggleContext';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const { checked, toggleChecked, lastPage } = useToggle();
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    toggleChecked(location.pathname);
    navigate(checked ? lastPage : '/form');
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'center', position: 'relative' }}>
        <Box position="absolute" left={0}>
          <Switch color="default" onClick={handleToggle} />
          <Typography variant="button" noWrap>
            {checked ? 'Admin' : 'User'}
          </Typography>
        </Box>
        <Typography variant="h6" noWrap>
          FastFood - Toulouse FFT
        </Typography>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
}
