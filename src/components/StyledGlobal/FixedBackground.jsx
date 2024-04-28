import styled from "styled-components";
import Background from "./../../assets/alex-haney-CAhjZmVk5H4-unsplash.jpg";

export const FixedBackground = () => {
  const BackgroundImg = styled.div`
    background-image: url(${Background});
    background-size: cover;
    background-attachment: fixed;
    height: 500px;
    width: 100%;
  `;
  return <BackgroundImg></BackgroundImg>;
};
