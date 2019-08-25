import React, { useState } from "react";
import styled from "styled-components";
import { MdMenu } from "react-icons/md";

const Item = styled.li`
  color: white;
  border-top: white solid 1px;
  background-color: rebeccapurple;
`;

const StyledMenu = styled.menu`
  list-style: none;
  position: absolute;
  right: 0;
  width: 100px;
  margin: 0;
  width: 100%;
`;

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <MdMenu
        size={48}
        color="white"
        onClick={() => setMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && (
        <StyledMenu>
          <Item>About</Item>
        </StyledMenu>
      )}
    </div>
  );
};

export default Menu;
