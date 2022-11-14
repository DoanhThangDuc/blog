import styled from "styled-components";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

export const FooterStyled = styled.div`
  display: inline-flex;
  width: 100vw;
  position: absolute;
  bottom: 0;
  height: 4rem;
  background-color: #f0f0f0;
  color: #000000;
`;
export const PrivacyContainer = styled.div`
  display: inline-flex;
  flex: 1;
  align-items: center;
`;
export const Socials = styled.div`
  display: inline-flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding-right: 9rem;
`;
export const SocialContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 8.7rem;
`;
export const Terms = styled.a`
  padding-left: 9.5rem;
  text-decoration: none;
  cursor: pointer;
`;

export const Privacy = styled.a`
  padding-left: 1rem;
  text-decoration: none;
  cursor: pointer;
`;
export const FacebookIcon = styled(FaFacebookF)`
  color: #626262;
  cursor: pointer;
`;
export const TwitterIcon = styled(FaTwitter)`
  color: #626262;
  cursor: pointer;
`;
export const InstagramIcon = styled(CiInstagram)`
  color: #626262;
  cursor: pointer;
`;
export const Icons = styled.div`
  width: 5rem;
  display: inline-flex;
  justify-content: space-between;
`;
