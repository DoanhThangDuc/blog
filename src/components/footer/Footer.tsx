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
  Icons
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
          <Icons>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </Icons>
        </SocialContainer>
      </Socials>
    </FooterStyled>
  );
}

export default Footer;
