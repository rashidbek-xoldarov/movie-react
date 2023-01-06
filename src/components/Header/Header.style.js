import React from "react";
import {
  ActiveLink,
  Container,
  Header,
  HeaderInner,
  LinkItem,
  LoginImg,
  LogoImg,
  NavItem,
  NavList,
  SmsImg,
  Wrapper,
} from "./Header.component";

const HeaderMain = () => {
  return (
    <Header>
      <Container>
        <HeaderInner>
          <LinkItem to="/">
            <LogoImg />
          </LinkItem>
          <NavList>
            <NavItem>
              <ActiveLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
              >
                Home
              </ActiveLink>
            </NavItem>
            <NavItem>
              <ActiveLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/top-rated"
              >
                Top Rated
              </ActiveLink>
            </NavItem>
            <NavItem>
              <ActiveLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/upcoming"
              >
                Upcoming
              </ActiveLink>
            </NavItem>
          </NavList>
          <Wrapper>
            <SmsImg />
            <LoginImg />
          </Wrapper>
        </HeaderInner>
      </Container>
    </Header>
  );
};

export default HeaderMain;
