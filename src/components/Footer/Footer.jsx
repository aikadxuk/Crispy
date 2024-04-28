import {
  FooterContainer,
  LocationSection,
  LocationBlock,
  FooterSubtitle,
  FooterText,
  LocationButton,
  LocationLink,
  ScheduleSection,
  ScheduleBlock,
  SocialSection,
  SocialIcons,
  SocialIcon,
  FooterTitle,
} from "./StyledFooter/StyledFooter";
import {
  FaFacebookF,
  FaSquareInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <FooterContainer>
      <LocationSection>
        <FooterTitle>Crispy Kitchen</FooterTitle>
        <LocationBlock>
          <FooterSubtitle>Location</FooterSubtitle>
          <FooterText>
            121 Einstein Loop N, Bronx, NY 10475, United States
          </FooterText>
          <LocationButton>
            <LocationLink>Directions</LocationLink>
          </LocationButton>
        </LocationBlock>
      </LocationSection>
      <ScheduleSection>
        <FooterSubtitle>Opening Hours</FooterSubtitle>
        <ScheduleBlock>
          <FooterText>Monday - Friday</FooterText>
          <FooterText>10:00 AM - 08:00 PM</FooterText>
          <FooterText>Tel: 010-02-0340</FooterText>
        </ScheduleBlock>
      </ScheduleSection>
      <SocialSection>
        <FooterSubtitle>Social</FooterSubtitle>
        <SocialIcons>
          <SocialIcon>
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon>
            <FaSquareInstagram />
          </SocialIcon>
          <SocialIcon>
            <FaTwitter />
          </SocialIcon>
          <SocialIcon>
            <FaYoutube />
          </SocialIcon>
        </SocialIcons>
      </SocialSection>
    </FooterContainer>
  );
}

export default Footer;
