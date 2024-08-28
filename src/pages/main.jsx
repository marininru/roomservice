import React from 'react';
import { Typography } from '@mui/material';

import Schedule from '../components/schedule/index';

const MainPage = () => {
  return (
    <>
      <Typography variant="h3" component="h3" sx={{ mb: 1 }}>
        Best Western Kapotnya Luxury Village
      </Typography>
      <Schedule />
    </>
  );
};

export default MainPage;
