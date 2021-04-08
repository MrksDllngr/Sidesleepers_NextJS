import Link from "next/link";

import styled from "styled-components";

const MenuWrapper = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  align-items: center;
  height: 100%;
`;

const MenuButton = styled.li`
  font-family: ${(props) => props.theme.fonts.main2};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.main1};
  font-size: 1rem;
  text-transform: uppercase;
  background-color: none;
  background: none;
  border: none;
  transition: 0.4s;
  margin: 0 20px;

  &:hover {
    color: ${(props) => props.theme.colors.main2};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

function Navigation() {
  return (
    <nav>
      <MenuWrapper>
        <Link href="/">
          <MenuButton>home</MenuButton>
        </Link>
        <Link href="/live">
          <MenuButton>live</MenuButton>
        </Link>
        <Link href="/news">
          <MenuButton>news</MenuButton>
        </Link>
        <Link href="/music">
          <MenuButton>music</MenuButton>
        </Link>
        <Link href="/downloads">
          <MenuButton>downloads</MenuButton>
        </Link>
        <Link href="/contact">
          <MenuButton>contact</MenuButton>
        </Link>
        <a href="https://shop.spreadshirt.at/sidesleepers">
          <MenuButton>shop</MenuButton>
        </a>
      </MenuWrapper>
    </nav>
  );
}

export default Navigation;
