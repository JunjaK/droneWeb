import React, { ReactElement } from 'react';
import { Container, Typography } from '@material-ui/core';

function Home():ReactElement {
  return (
    <Container>
      <Typography variant='h5'>Real-Time Drone Simulation Info</Typography>
    </Container>
  );
}

export default Home;
