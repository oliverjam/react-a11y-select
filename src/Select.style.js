import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 50px;
  position: relative;
  z-index: 0;
`;

export const Label = styled.div`
  font-size: 1.25em;
  margin-bottom: 0.5em;
`;

const blue = 'rgba(0, 50, 150, 0.2)';

const btnReset = css`
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  background: #fff;
`;

const focus = css`
  outline: 4px dashed ${blue};
  outline-offset: 6px;
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

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1em;
  border: 1px solid;
  border-radius: 6px;
  background-color: #fff;
  &:focus {
    ${focus};
  }
`;

export const Option = styled.li`
  padding: 1em;
  transition: background-color 0.1s ease-out;
  &:not(:first-child) {
    border-top: 1px solid rgba(0, 0, 0, 0.25);
  }
  ${p => p.highlighted && `background-color: ${blue};`};
  &:focus {
    outline: 0;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
`;

export const LiveRegion = styled.div`
  margin-top: 2em;
  /* border: '0';
  clip: 'rect(0 0 0 0)';
  height: '1px';
  marginBottom: '-1px';
  marginRight: '-1px';
  overflow: 'hidden';
  padding: '0';
  position: 'absolute';
  whiteSpace: 'nowrap';
  width: '1px'; */
`;
