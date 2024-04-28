import styled from "styled-components";

export const NewsContainerBlock = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 7%;
  gap: 55px;
`;

export const NewsTitle = styled.h2`
  font-size: 3rem;
  text-align: center;

  @media (max-width: 540px){
    font-size: clamp(2.2rem,9vw,2.5rem);
  }
`;

export const NewsCards = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NewsCardsBig = styled.section`
  display: flex;
  flex-direction: row;
  gap:20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const NewsCardsSmall = styled.section`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const NewsCard = styled.a`
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 20px;
  cursor: pointer;
`;

export const NewsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover{
    transform: scale(1.1);
    transition: .5s;
  }
`;

export const AbsoluteText = styled.footer`
  position: absolute;
  bottom: 25px;
  left: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AbsoluteTitle = styled.h3`
  color: var(--white);
  font-size: clamp(1.2rem, 2vw, 1.7rem);

  @media (max-width: 540px){
    font-size: clamp(1rem,5vw,1.3rem);
  }
`;

export const NormalText = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 15px;;
`;

export const NormalFirstBlock = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NormalTitle = styled.h3`
  font-size: clamp(1.2rem, 2vw, 1.7rem);
  color: var(--black);

  @media (max-width: 540px){
    font-size: clamp(1rem,5vw,1.3rem);
  }
`;

export const NormalDate = styled.span`
  font-weight: 700;
  word-spacing: 5px;
  color: var(--black);

  @media (max-width: 540px){
    font-size: .7rem;
  }
`;

export const CardLabel = styled.span`
  color: var(--white);
  letter-spacing: 1px;
  font-size: 0.8rem;
  background: var(--blue);
  border-radius: 4px;
  padding: 5px;
  font-weight: 700;

  ${(props) =>
    props.redAbsolute &&
    `
    background: var(--red);
    margin-right: auto;

  `}

  ${(props) =>
    props.blackLabel === 3 &&
    `
    background: black;
  `}

@media (max-width: 540px){
    font-size: .5rem;
  }
`;
