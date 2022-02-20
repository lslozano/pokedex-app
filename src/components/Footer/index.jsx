import React from 'react';
// Assets
import LinkedinLogo from '../../assets/linkedinLogo.png';
import GithubLogo from '../../assets/githubLogo.png';

const Footer = () => {
  return (
    <div>
      <h3>Luis Lozano</h3>
      <img src={LinkedinLogo} alt="linkedin-logo" />
      <img src={GithubLogo} alt="github-logo" />
    </div>
  )
}

export default Footer;
