import {
  NewsContainerBlock,
  NewsTitle,
  NewsCards,
  NewsCard,
  NewsImg,
  AbsoluteText,
  NormalText,
  AbsoluteTitle,
  CardLabel,
  NormalTitle,
  NormalFirstBlock,
  NormalDate,
  NewsCardsBig,
  NewsCardsSmall,
} from "./StyledNews/StyledNews";
import CardsData from "./CardsData/CardsData";

export const NewsContainer = () => {
  return (
    <NewsContainerBlock>
      <NewsTitle>News & Events</NewsTitle>
      <NewsCards>
        <NewsCardsBig>
          {CardsData.map(
            (card, index) =>
              (index === 0 || index === 1) && (
                <NewsCard key={card.id}>
                  <NewsImg src={card.src}></NewsImg>
                  <AbsoluteText>
                    <CardLabel redAbsolute>{card.label}</CardLabel>
                    <AbsoluteTitle>{card.title}</AbsoluteTitle>
                  </AbsoluteText>
                </NewsCard>
              )
          )}
        </NewsCardsBig>
        <NewsCardsSmall>
          {CardsData.map(
            (card, index) =>
              (index === 2 || index === 3 || index === 4) && (
                <NewsCard key={card.id}>
                  <NewsImg src={card.src}></NewsImg>
                  <NormalText>
                    <NormalFirstBlock>
                      <CardLabel blackLabel>{card.label}</CardLabel>
                      {card.date && <NormalDate>{card.date}</NormalDate>}
                    </NormalFirstBlock>
                  <NormalTitle>{card.title}</NormalTitle>
                  </NormalText>
                </NewsCard>
              )
          )}
        </NewsCardsSmall>
      </NewsCards>
    </NewsContainerBlock>
  );
};
