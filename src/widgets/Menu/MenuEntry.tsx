import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";

export interface Props {
  secondary?: boolean;
  hideShadow?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean }>`
  color: ${({ isPushed, theme }) => (isPushed ? theme.colors.textSubtle : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.text};
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background-color: ${({ secondary, theme }) => (secondary ? theme.colors.background : "transparent")};
  color: ${({ theme }) => theme.colors.textSubtle};
  box-shadow: ${({ isActive, hideShadow, theme }) => (hideShadow || !isActive ? "none" : `inset 4px 0px 0px ${theme.colors.primary}`)};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.text};
  }

  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
    margin-right: 5px;
  }

  &:hover {
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${rainbowAnimation} 5s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;

    a > div {
      color: ${({ theme }) => theme.colors.textSubtle};
    }
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

export { MenuEntry, LinkLabel };
