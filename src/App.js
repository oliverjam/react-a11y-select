import React from 'react';
import styled from 'styled-components';

import Grid from './Grid';
import Select from './Select';
import LiveSelect from './LiveSelect';
import NativeSelect from './NativeSelect';
import FocusSelect from './FocusSelect';
import { Nav, NavList } from './Nav';

const Container = styled.main`
  width: 25rem;
`;

const options = ['Tattooine', 'Alderaan', 'Naboo'];

const renderLocation = location => {
  switch (location) {
    case 'activedescendant':
      return (
        <article>
          <h2 style={{ marginBottom: '1em' }}>Using aria-activedescendant</h2>
          <Select options={options} label="destination" />
        </article>
      );
    case 'focus':
      return (
        <article>
          <h2 style={{ marginBottom: '1em' }}>Using focus</h2>
          <FocusSelect options={options} label="destination" />
        </article>
      );
    case 'live':
      return (
        <article>
          <h2 style={{ marginBottom: '1em' }}>Using aria-live</h2>
          <LiveSelect options={options} label="destination" />
        </article>
      );
    default:
      return (
        <article>
          <h2 style={{ marginBottom: '1em' }}>Native HTML</h2>
          <NativeSelect options={options} label="destination" />
        </article>
      );
  }
};

export default class extends React.Component {
  state = { location: 'native' };
  render() {
    return (
      <Grid>
        <Nav>
          <NavList>
            <li>
              <a
                href="#native"
                onClick={() => this.setState({ location: 'native' })}
              >
                Native HTML
              </a>
            </li>
            <li>
              <a
                href="#focus"
                onClick={() => this.setState({ location: 'focus' })}
              >
                Using focus
              </a>
            </li>
            <li>
              <a
                href="#activedescendant"
                onClick={() => this.setState({ location: 'activedescendant' })}
              >
                Using activedescendant
              </a>
            </li>
            <li>
              <a
                href="#live"
                onClick={() => this.setState({ location: 'live' })}
              >
                Using live regions
              </a>
            </li>
          </NavList>
        </Nav>
        <Container>{renderLocation(this.state.location)}</Container>
      </Grid>
    );
  }
}
