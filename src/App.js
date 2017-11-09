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
      <article>
        <h2 style={{ marginBottom: '1em' }}>Using aria-activedescendant</h2>
        <Select options={options} label="destination" />
      </article>
      <article>
        <h2 style={{ marginBottom: '1em' }}>Using aria-live</h2>
        <LiveSelect options={options} label="destination" />
      </article>
    </Grid>
  </Container>
);
