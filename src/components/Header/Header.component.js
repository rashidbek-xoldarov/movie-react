import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import person from "../../assets/images/login-avatar.png";
import sms from "../../assets/images/notification.png";
import { Link, NavLink } from "react-router-dom";

export const Header = styled.header``;

export const Container = styled.div`
  width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const LogoImg = styled.img.attrs({ src: logo })`
  width: 104px;
  height: 24px;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
`;

export const ActiveLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  border-bottom: ${(props) =>
    props.className === "active" ? "2px solid #007aff" : "none"};
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

export const NavItem = styled.li`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: rgba(255, 255, 255, 0.72);

  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export const LoginImg = styled.img.attrs({ src: person })`
  widht: 44px;
  height: 44px;
`;

export const SmsImg = styled.img.attrs({ src: sms })`
  width: 28px;
  height: 28px;
  margin-right: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
