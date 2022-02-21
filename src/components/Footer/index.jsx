import React from 'react';
// Assets
import LinkedinLogo from '../../assets/linkedinLogo.png';
import GithubLogo from '../../assets/githubLogo.png';
// Styles
import { Container, Text, LinksContainer, IconLink } from './styles';

const Footer = () => {
  return (
    <Container>
      <Text>Luis Lozano</Text>
      <LinksContainer>
        <IconLink href="https://www.linkedin.com/in/lslozano">
          <img src={LinkedinLogo} alt="linkedin-logo" />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/lslozano">
          <img src={GithubLogo} alt="github-logo" />
        </IconLink>
      </LinksContainer>
    </Container>
  )
}

export default Footer;
