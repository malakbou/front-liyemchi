import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Calendar from '../components/Calendrier/Calendar';
import './index.css'; 
import axios from 'axios';

const HomePage = () => {
    return (
        <Container maxWidth="lg">
            <Calendar />
        </Container>
    );
};

export default HomePage;
