import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const theme = useTheme();
    
    const footerStyle = {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: theme.palette.primary.main, 
        color: theme.palette.primary.contrastText, 
        textAlign: 'center',
        padding: '10px 0'
    };

    return (
        <footer style={footerStyle}>
            <Typography variant="body2" style={{ color: 'inherit' }}>
                &copy; 2024 Fast Food Toulouse
            </Typography>
        </footer>
    );
};

export default Footer;
