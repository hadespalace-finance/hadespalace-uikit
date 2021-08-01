import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { MenuEntry as MenuEntryType } from "./types";

interface Props {
  isPushed: boolean;
  links: Array<MenuEntryType>;
}

const Container = styled.div`
  display: none;
  overflow-y: auto;
  overflow-x: hidden;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HeaderMenu: React.FC<Props> = ({ isPushed, links }) => {
  const location = useLocation();

  return (
    <Container>
      {links.map((entry) => {
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass} hideShadow>
            <MenuLink href={entry.href}>
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default HeaderMenu;
