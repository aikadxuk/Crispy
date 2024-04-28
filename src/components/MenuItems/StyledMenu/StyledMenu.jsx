import styled from "styled-components";

export const MenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 7%;
  gap: 60px;
`;

export const MenuContainerItems = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const MenuMainTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

export const MenuCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MenuImg = styled.img`
  width: 100%;
  height: auto;
`;

export const MenuTextContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  gap: 5px;
`;

export const MenuTextTitleContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuTitle = styled.h2`
  font-size: clamp(1.4rem, 2vw, 1.7rem);
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  @media (max-width: 540px) {
    font-size: 1.3rem;
    /* font-size: clamp(1.3rem,6vw,1.9rem); */
  }
`;

export const MenuPrice = styled.h5`
  --dark-gray: #21222650;
  color: var(--yellow);
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 25px;
  box-shadow: 0 0 7px var(--dark-gray);
  width: 75px;
  text-align: center;
  padding: 16px 0;
`;

export const MenuPriceDiscount = styled.span`
  --black: #00000070;
  color: var(--black);
  text-decoration: line-through;
  font-weight: 200;
  font-size: 0.8rem;
  @media (max-width: 900px) {
    font-size: 1rem;
  }

  @media (max-width: 540px) {
    font-size: clamp(0.8rem, 3vw, 1rem);
  }
`;

export const MenuRatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const MenuRatingText = styled.h6`
  font-size: 1.3rem;
`;

export const MenuIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const MenuStarIcon = styled.i`
  color: var(--yellow);
  font-size: 1rem;
`;

export const MenuReview = styled.span`
  --black: #00000070;
  color: var(--black);
`;
