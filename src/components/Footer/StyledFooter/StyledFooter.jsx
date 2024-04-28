import styled from "styled-components";
import FooterImg from "./../../../assets/daan-evers-tKN1WXrzQ3s-unsplash.jpg";

export const FooterContainer = styled.footer`
  background-image: url(${FooterImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 600px;
  position: relative;
  display: grid;
  z-index: 0;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 7%;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent -50%, var(--black) 100%);
    z-index: -1;
  }

  @media (max-width: 914px){
    grid-template-columns: 2fr;
  }
`;

export const LocationSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const FooterTitle = styled.h2`
  color: var(--white);
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
`;

export const LocationBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FooterSubtitle = styled.h5`
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 2px;
`;

export const FooterText = styled.p`
  --white: #ffffff90;
  color: var(--white);
  font-weight: light;
  letter-spacing: 2px;
  font-size: 1rem;
`;
export const LocationButton = styled.button`
  border-radius: 5px;
  margin-right: auto;
  background: var(--dark-gray);
  font-weight: 600;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--white);
    transition: 0.4s;
  }
`;

export const LocationLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: var(--white);
`;

export const ScheduleSection = styled.section`
  display: flex;
  flex-direction: column;
  transform: translateY(35px);
  gap: 15px;
`;

export const ScheduleBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SocialSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  transform: translateY(15px);
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  color: var(--white);
  font-size: 1.5rem;
  cursor: pointer;

  &:hover{
    color: var(--red);
    transition: .3s;
  }
`;
