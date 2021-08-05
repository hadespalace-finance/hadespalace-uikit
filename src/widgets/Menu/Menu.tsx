import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import Panel from "./Panel";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT } from "./config";
import Avatar from "./Avatar";
import NavMenu from "./NavMenu";
import PanelFooter from "./PanelFooter";
import { PancakeRoundIcon } from "../../components/Svg";
import { Text } from "../../components/Text";
import { Skeleton } from "../../components/Skeleton";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1320px;
  margin: auto;
`;

const Header = styled.div`
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: top 0.2s;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
  display: none;  

  ${({ theme }) => theme.mediaQueries.nav} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: 0;
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const PriceWrapper = styled.div`
  margin-right: 20px;
  display: none;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`

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

const SlickWrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;
`

const SlickImage = styled.img`
  width: 100%;
  height: auto;
`

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  priceLink,
  profile,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  const slickSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    // speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Wrapper>
      <SlickWrapper>
        <Slider {...slickSettings}>
          <div><SlickImage src="/images/slick/slick-1.png" alt="slide 1" /></div>
          <div><SlickImage src="/images/slick/slick-2.png" alt="slide 2" /></div>
          <div><SlickImage src="/images/slick/slick-3.png" alt="slide 3" /></div>
        </Slider>
      </SlickWrapper>
      <Header>
        <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        <Flex alignItems="center">
          <PriceWrapper>
            {cakePriceUsd ? (
              <PriceLink href={priceLink} target="_blank">
                <PancakeRoundIcon width="24px" height="24px" mr="8px" />
                <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
              </PriceLink>
            ) : (
              <Skeleton width={80} height={24} />
            )}
          </PriceWrapper>
          <UserBlock account={account} login={login} logout={logout} showMenu={showMenu} />
        </Flex>
      </Header>
      <StyledNav showMenu={showMenu}>
        <NavMenu isPushed={isPushed} links={links} />
        <PanelFooter
          showOnNav
          isPushed={isPushed}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          pushNav={setIsPushed}
          links={links}
          priceLink={priceLink} />
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          pushNav={setIsPushed}
          links={links}
          priceLink={priceLink}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
