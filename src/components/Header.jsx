import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { Box } from '@mui/material';

export default function Header() {
    const [checked, setChecked] = React.useState(false);
    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    return (
        <AppBar position="static">
            <Toolbar style={{ justifyContent: 'center', position: 'relative' }}>
                <Box position="absolute" left={0}>
                    <Switch color="default" onClick={toggleChecked} />
                    <Typography variant="button" noWrap>
                        {checked ? 'Admin' : 'User'}
                    </Typography>
                </Box>
                <Typography variant="h6" noWrap>
                    FastFood-Toulouse
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
