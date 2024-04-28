import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 7%;
  background-color: var(--white);
`;

export const Hamburguer = styled.div`
  width: 50px;
  height: 50px;
  display: none;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  z-index: 2;

  @media (max-width: 880px) {
    display: flex;
  }
`;

export const Line = styled.span`
  width: 40px;
  height: 2px;
  background-color: var(--red);
  &:nth-child(1) {
    position: ${({ isOpenMenu }) => (isOpenMenu ? "absolute" : "static")};
    transform: ${({ isOpenMenu }) =>
      isOpenMenu ? "rotate(45deg)" : "rotate(0deg)"};
    transition: ${({ isOpenMenu }) => (isOpenMenu ? ".6s" : "")};
  }
  &:nth-child(2) {
    position: ${({ isOpenMenu }) => (isOpenMenu ? "absolute" : "static")};
    transition: ${({ isOpenMenu }) => (isOpenMenu ? ".6s" : "")};
    opacity: ${({ isOpenMenu }) => (isOpenMenu ? "0" : "1")};
  }
  &:nth-child(3) {
    position: ${({ isOpenMenu }) => (isOpenMenu ? "absolute" : "static")};
    transform: ${({ isOpenMenu }) =>
      isOpenMenu ? "rotate(-45deg)" : "rotate(0deg)"};
    transition: ${({ isOpenMenu }) => (isOpenMenu ? ".6s" : "")};
  }
`;

export const Logo = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--black);
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 540px) {
    font-size: clamp(1.2rem, 1.6rem, 1.7rem);
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 880px) {
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100vh;
    background-color: var(--white);
    top: 0;
    left: ${({ isOpenMenu }) => (isOpenMenu ? "0%" : "-100%")};
    transition: ${({ isOpenMenu }) => (isOpenMenu ? ".6s" : "")};
    z-index: 1;
  }
`;

export const Link = styled.a`
  font-size: 1.1rem;
  color: var(--dark-grey);
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: var(--red);
    transition: 0.4s;
  }
`;

export const Button = styled.button`
  background: var(--red);
  color: var(--white);
  border: none;
  font-size: 1.1rem;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: var(--second-color);
  }

  @media (max-width: 880px) {
  padding: 10px;
  font-size: .9rem;
  }
`;
