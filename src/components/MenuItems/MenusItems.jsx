import {
  MenuContainer,
  MenuContainerItems,
  MenuCard,
  MenuImg,
  MenuTextContainer,
  MenuTextTitleContainer,
  MenuTitle,
  MenuPrice,
  MenuPriceDiscount,
  MenuRatingContainer,
  MenuRatingText,
  MenuIconsContainer,
  MenuStarIcon,
  MenuReview,
  MenuMainTitle,
} from "./StyledMenu/StyledMenu";
import { MenuData } from "./MenuData/MenuData";

function MenuItems() {
  return (
    <MenuContainer>
      <MenuMainTitle>Special Menus</MenuMainTitle>
      <MenuContainerItems>
        {MenuData.map((menuCard) => (
          <MenuCard key={menuCard.id}>
            <MenuImg src={menuCard.src}></MenuImg>
            <MenuTextContainer>
              <MenuTextTitleContainer>
                <MenuTitle>{menuCard.title}</MenuTitle>
                {menuCard.discount && (
                  <MenuPriceDiscount>{menuCard.discount}</MenuPriceDiscount>
                )}
                <MenuPrice>{menuCard.price}</MenuPrice>
              </MenuTextTitleContainer>
              <MenuRatingContainer>
                <MenuRatingText>{menuCard.rating}</MenuRatingText>
                <MenuIconsContainer>
                  <MenuStarIcon>{menuCard.ratingicons}</MenuStarIcon>
                </MenuIconsContainer>
                <MenuReview>{menuCard.review}</MenuReview>
              </MenuRatingContainer>
            </MenuTextContainer>
          </MenuCard>
        ))}
      </MenuContainerItems>
    </MenuContainer>
  );
}

export default MenuItems;
