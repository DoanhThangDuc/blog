import React from "react";
import {
  FooterStyled,
  PrivacyContainer,
  Socials,
  Terms,
  Privacy,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  SocialContainer,
} from "./Footer.styled";

function Footer() {
  return (
    <FooterStyled>
      <PrivacyContainer>
        <Terms>Term and conditions</Terms>
        <Privacy>Privacy</Privacy>
      </PrivacyContainer>
      <Socials>
        <SocialContainer>
          <p>Follow</p>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </SocialContainer>
      </Socials>
    </FooterStyled>
  );
}

export default Footer;
