import { FC } from 'react';
import { FaHome } from 'react-icons/fa';

import {
  Nav,
  NavLink,
  Bars,
  NavMenuLeft,
  NavMenuRight,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import Toggle from '../Toggle';

interface Props {
  toggleChecked: boolean;
  themeToggler: () => void;
}

const Navbar: FC<Props> = ({ toggleChecked, themeToggler }) => {
  return (
    <Nav>
      <Bars />

      <NavMenuLeft>
        <NavBtnLink to="/">
          <FaHome />
        </NavBtnLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/annual">Annual Report</NavLink>
        <NavLink to="/team">Teams</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
      </NavMenuLeft>
      <NavMenuRight>
        <NavBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <Toggle checked={toggleChecked} toggleTheme={themeToggler} />
        </NavBtn>
      </NavMenuRight>
    </Nav>
  );
};

export default Navbar;
