import styled from "styled-components";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const MainBackground = styled.main`
  max-width: 100%;
  height: 86.8vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7%;

  &::before {
    --black: #00000090;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--black);
    z-index: -4;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    height: 100vh;
  }
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  z-index: -10;
  object-fit: cover;
`;

export const MainText = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const MainTitle = styled.h1`
  color: var(--white);
  font-size: 4.7rem;
  font-weight: 700;
  max-width: 400px;
  line-height: 80px;
  margin-bottom: 70px;

  @media (max-width: 1000px) {
    max-width: 100%;
    margin-bottom: 25px;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 12px;
`;

export const Rating = styled.span`
  color: var(--white);
  font-size: 1.9rem;
  font-weight: 600;

  @media (max-width: 540px){
    font-size: 1rem;
  }
  `;

export const RatingStars = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  `;

export const FaStarIcon = styled(FaStar)`
  color: var(--yellow);
  font-size: 1.2rem;

  @media (max-width: 540px){
    font-size:.8rem;
  }
  `;
export const FaRegStarIcon = styled(FaRegStar)`
  color: var(--yellow);
  font-size: 1.2rem;

  @media (max-width: 540px){
    font-size:.8rem;
  }
`;

export const RatingText = styled.p`
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const CardsSection = styled.section`
  max-width: 55%;
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1000px) {
    max-width: 80%;
    height: 800px;
  }

  @media (max-width: 700px) {
    max-width: 100%;
    height: 800px;
  }

  @media (max-width: 580px) {
    height: 400px;
  }
`;

export const CardSection = styled.div`
  position: absolute;
  top: 0;
  left: ${({ slideValue }) => `${slideValue}%`};
  display: flex;
  align-items: center;
  width: 300%;
  height: 100%;
  transition: 0.5s;

  &:before {
    --black: #00000090;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--black);
    z-index: 0;
  }
`;

export const CardImg = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 4% 30px;
`;

export const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0%;
  z-index: -1;
`;

export const LocationText = styled.p`
  color: var(--white);
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 540px) {
    font-size: 0.7rem;
  }
`;
export const RatingTitle = styled.h3`
  color: var(--white);
  font-size: 1.7rem;

  @media (max-width: 540px) {
    font-size: clamp(1.2rem,4vw,1.5rem);
    width: 100%;
  }
`;

export const RatingSlideContainer = styled(RatingStars)`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 540px){
    gap: 0;
  }
`;

export const RatingSlideText = styled.span`
  color: var(--white);
`;

export const RatingPrice = styled.p`
  background: var(--white);
  color: var(--yellow);
  font-size: 1.1rem;
  padding: 3%;
  font-weight: 600;
  border-radius: 50px;

  @media (max-width: 540px){
    font-size: clamp(.9rem, 3vw,1rem);
  }
`;

export const LocationIcon = styled(IoLocationOutline)`
  color: var(--white);
  margin-right: 5px;
`;

export const ArrowsContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const LeftArrow = styled(FaAngleLeft)`
  background-color: var(--yellow);
  color: var(--white);
  font-size: 4rem;
  cursor: pointer;

  &:hover {
    --yellow: #f3af2497;
    background-color: var(--yellow);
    transition: 0.5s;
  }

  @media (max-width:540px){
    font-size: 2rem;
  }
  `;
  
  export const RightArrow = styled(FaAngleRight)`
  background-color: var(--red);
  color: var(--white);
  font-size: 4rem;
  cursor: pointer;
  
  &:hover {
    --red: #dc354590;
    background-color: var(--red);
    transition: 0.5s;
  }
  
  @media (max-width:540px){
    font-size: 2rem;
  }
`;
