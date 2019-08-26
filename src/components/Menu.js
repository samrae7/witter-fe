import React, { useState } from "react";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "gatsby";

const Item = styled.li`
  color: white;
  border-top: white solid 1px;
  background-color: rebeccapurple;
  padding-left: 1rem;
`;

const StyledLink = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
`;

const StyledMenu = styled.menu`
  list-style: none;
  position: absolute;
  padding-left: 0;
  right: 0;
  width: 100px;
  margin: 0;
  width: 100%;
  font-family: typeface-cousine, monospace;
`;

const IconContainer = styled.div`
  padding: 4px 2px 0 2px;
  border-left: 1px solid white;
  background-color: rebeccapurple;
`;

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <IconContainer onClick={() => setMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <MdClose size={36} color="white" />
        ) : (
          <MdMenu size={36} color="white" />
        )}
      </IconContainer>

      {isMenuOpen && (
        <StyledMenu>
          <Item>
            <StyledLink onClick={() => setMenuOpen(!isMenuOpen)} to="/">
              <div>Home</div>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink onClick={() => setMenuOpen(!isMenuOpen)} to="/about">
              <div>About</div>
            </StyledLink>
          </Item>
        </StyledMenu>
      )}
    </div>
  );
};

export default Menu;
