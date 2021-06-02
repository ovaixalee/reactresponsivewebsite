import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
import {animateScroll as scroll } from 'react-scroll'
import {FooterContainer, 
    FooterWrap, 
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
}   from './FooterElements'



const Footer = () => {
  const toggleHome =() => {
    scroll.scrollToTop();
  }
    return (
         <FooterContainer>
          <FooterWrap>
            <FooterLinksContainer>
             <FooterLinksWrapper>
              <FooterLinkItems> 
               <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Services</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems> 
               <FooterLinkTitle>Our Services</FooterLinkTitle>
                <FooterLink to="/">Web Design</FooterLink>
                <FooterLink to="/">App Development</FooterLink>
                <FooterLink to="/">Social media marketing</FooterLink>
                <FooterLink to="/">Graphic Designing</FooterLink>
              </FooterLinkItems>
             </FooterLinksWrapper>
             <FooterLinksWrapper>
              <FooterLinkItems> 
               <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Support</FooterLink>
                <FooterLink to="/">Destination</FooterLink>
                <FooterLink to="/">Sponsorship</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems> 
               <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
              </FooterLinkItems>
             </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
             <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>
               Alees
              </SocialLogo>
              <WebsiteRights>Alees &copy; Copyright {new Date().getFullYear()} All rights reserved.</WebsiteRights>
              <SocialIcons>
               <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
               <FaFacebook />
               </SocialIconLink>
               <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Twitter">
               <FaTwitter />
               </SocialIconLink>
               <SocialIconLink href="/" target="_blank" aria-label="Youtube">
               <FaYoutube />
               </SocialIconLink>
               <SocialIconLink href="/" target="_blank" aria-label="Instagram">
               <FaInstagram />
               </SocialIconLink>
              </SocialIcons>
             </SocialMediaWrap>
            </SocialMedia>
          </FooterWrap> 
         </FooterContainer>
    )
}

export default Footer
