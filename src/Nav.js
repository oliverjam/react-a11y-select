import styled from 'styled-components';

export const Nav = styled.nav`
  margin-left: auto;
`;

export const NavList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  & > * + * {
    margin-left: 1rem;
  }
`;
