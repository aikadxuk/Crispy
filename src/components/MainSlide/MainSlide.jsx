import {
  MainBackground,
  VideoBackground,
  MainText,
  MainTitle,
  RatingContainer,
  Rating,
  RatingStars,
  FaRegStarIcon,
  FaStarIcon,
  RatingText,
  CardsSection,
  CardSection,
  CardImg,
  SlideImg,
  LocationText,
  RatingTitle,
  LocationIcon,
  RatingSlideContainer,
  RatingPrice,
  ArrowsContainer,
  LeftArrow,
  RightArrow,
} from "./StyledMain/StyledMain";
import MainImages from "./MainItems/MainImages";
import MainVideo from './../../assets/production_ID_3769033.mp4'
import { useState } from "react";

function MainSlide() {
  const [slideValue, setSlideValue] = useState(0);
  const LeftSlide = () => {
    if(slideValue < 0){
      setSlideValue(slideValue + 100);
    }
  };

  const RightSlide = () => {
    const maxSlideValue = -(MainImages.length - 1) * 100
    if(slideValue > maxSlideValue){
      setSlideValue(slideValue - 100);
    }
  };

  return (
    <MainBackground>
      <VideoBackground
        src={MainVideo}
        autoPlay
        loop
      ></VideoBackground>
      <MainText>
        <MainTitle>Delicious Steaks</MainTitle>
        <RatingContainer>
          <Rating>4.4/5</Rating>
          <RatingStars>
            <FaStarIcon></FaStarIcon>
            <FaStarIcon></FaStarIcon>
            <FaStarIcon></FaStarIcon>
            <FaStarIcon></FaStarIcon>
            <FaRegStarIcon></FaRegStarIcon>
          </RatingStars>
        </RatingContainer>
        <RatingText>
          From <b>1,206+</b> Customers Reviews
        </RatingText>
      </MainText>
      <CardsSection>
        <CardSection slideValue={slideValue}>
          {MainImages.map((card, index) => (
            <CardImg key={card.id}>
              <SlideImg src={card.src}></SlideImg>
              {card.location && (
                <LocationText>
                  <LocationIcon></LocationIcon>
                  {card.location}
                </LocationText>
              )}
              <RatingSlideContainer>
                {card.title && <RatingTitle>{card.title}</RatingTitle>}
                {card.price && <RatingPrice>{card.price}</RatingPrice>}
              </RatingSlideContainer>
              {(index === 1 || index === 2) && (
                <RatingContainer>
                  {card.rating && <Rating>{card.rating}</Rating>}
                  <RatingStars>
                    <FaStarIcon></FaStarIcon>
                    <FaStarIcon></FaStarIcon>
                    <FaStarIcon></FaStarIcon>
                    <FaStarIcon></FaStarIcon>
                    <FaRegStarIcon></FaRegStarIcon>
                  </RatingStars>
                </RatingContainer>
              )}
            </CardImg>
          ))}
        </CardSection>
        <ArrowsContainer>
          <LeftArrow onClick={LeftSlide}></LeftArrow>
          <RightArrow onClick={RightSlide}></RightArrow>
        </ArrowsContainer>
      </CardsSection>
    </MainBackground>
  );
}

export default MainSlide;
