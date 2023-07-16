import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './Style.module.css';

const StyledNavLink = styled(NavLink)`
  color: black;
  &.active {
    color: orange;
  }
`;

const Header = () => {
  return (
    <nav className={css.header}>
      <StyledNavLink to="/"> Home </StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </nav>
  );
};

export default Header;
