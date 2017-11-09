import React from 'react';
import styled from 'styled-components';

import Grid from './Grid';
import Select from './Select';
import LiveSelect from './LiveSelect';

const Container = styled.main`
  max-width: 30em;
  margin: 0 auto;
`;

const options = ['Tattooine', 'Alderaan', 'Naboo'];

export default () => (
  <Container>
    <Grid>
      {/* <Select options={options} /> */}
      <LiveSelect options={options} label="Planet" />
    </Grid>
  </Container>
);
