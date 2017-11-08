import React from 'react';
import styled from 'styled-components';

import Select from './Select';

const Container = styled.main`
  max-width: 30em;
  margin: 0 auto;
  padding: 1em;
`;

const options = ['test1', 'test2', 'test3'];

export default () => (
  <Container>
    <Select options={options} />
  </Container>
);
