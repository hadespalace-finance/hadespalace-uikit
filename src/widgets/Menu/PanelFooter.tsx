import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon, CogIcon, SvgProps } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import Skeleton from "../../components/Skeleton/Skeleton";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import MenuButton from "./MenuButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  showOnNav?: boolean
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon, LanguageIcon } = Icons;

const Container = styled.div<{ showOnNav?: boolean }>`
  flex: none;
  padding: 8px 4px;
  width: 100%;
  background-color: ${({ showOnNav, theme }) => showOnNav ? "none" : theme.nav.background};
  border-top: ${({ showOnNav }) => showOnNav ? "none" : "solid 2px rgba(133, 133, 133, 0.1)"};

  ${({ theme }) => theme.mediaQueries.nav} {
    padding: 0;
    overflow-x: hidden;
    width: ${({ showOnNav, theme }) => showOnNav ? "200px" : '100%'};
  }
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const SocialWrapper = styled(Flex) <{ showOnNav?: boolean }>`
  display: ${({ showOnNav }) => showOnNav ? "none" : "flex"};

  ${({ theme }) => theme.mediaQueries.nav} {
    display: flex;
  }
`

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  cakePriceUsd,
  priceLink,
  showOnNav
}) => {
  if (!isPushed && !showOnNav) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container showOnNav={showOnNav}>
      <SocialEntry>
        {cakePriceUsd ? (
          <PriceLink href={priceLink} target="_blank">
            <PancakeRoundIcon width="24px" height="24px" mr="8px" />
            <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24} />
        )}
        <SocialWrapper showOnNav={showOnNav}>
          {socials.map((social, index) => {
            const Icon = Icons[social.icon];
            const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
            const mr = index < socials.length - 1 ? "8px" : 0;
            return (
              <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                <Icon {...iconProps} />
              </Link>
            );
          })}
        </SocialWrapper>
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;
