import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 0;
`;

const blue = 'rgba(0, 50, 150, 0.2)';

const btnReset = css`
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  background: #fff;
`;

const focus = css`
  outline: 4px dotted ${blue};
  outline-offset: 4px;
`;

export const Button = styled.button`
  ${btnReset};
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0.5em 1rem;
  border: 1px solid;
  border-radius: 6px;
  text-align: left;
  &::after {
    content: '⌄';
    position: relative;
    top: -2px;
    margin-left: auto;
    font-size: 2em;
    line-height: 1;
  }
  &:focus {
    ${focus};
  }
`;

export const List = styled.div`
  margin-top: 1em;
  border: 1px solid;
  border-radius: 6px;
  background-color: #fff;
  &:focus {
    ${focus};
  }
`;

export const Option = styled.div`
  padding: 1em;
  transition: background-color 0.1s ease-out;
  &:not(:first-child) {
    border-top: 1px solid;
  }
  ${p => p.highlighted && `background-color: ${blue};`};
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
`;
