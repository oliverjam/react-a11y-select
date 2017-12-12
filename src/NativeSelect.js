import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  &::after {
    grid-column: 12 / 12;
    grid-row: 1 / 1;
    position: relative;
    top: -4px;
    display: flex;
    align-items: center;
    font-size: 2em;
    line-height: 1;
    content: '⌄';
    height: 100%;
    pointer-events: none;
  }
`;

const blue = 'rgba(0, 50, 150, 0.2)';

const focus = css`
  outline: 0;
  outline: 4px dashed ${blue};
  outline-offset: 6px;
`;

const Select = styled.select`
  grid-column: 1 / -1;
  grid-row: 1 / 1;
  display: inline-block;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0.5rem 1rem;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  line-height: 1.5;
  background-color: #fff;
  border: 1px solid;
  border-radius: 6px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    ${focus};
  }
`;

const Label = styled.div`
  font-size: 1.25em;
  margin-bottom: 0.5em;
`;

const NativeSelect = ({ options, label }) => (
  <div>
    <Label>Choose your {label}</Label>
    <Wrapper>
      <Select>
        {options.map((option, i) => (
          <option key={`${option}-${i}`} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Wrapper>
  </div>
);

export default NativeSelect;
