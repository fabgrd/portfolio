import React from 'react';
import Button from '@/components/atoms/Button';

const Footer = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/fabien-giraudier-62baa3205/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/votre-profil', '_blank');
  };

  return (
    <footer className="text-secondary-light mt-32 mb-5">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-2 md:space-y-0 md:flex-row-reverse">
        <div className="flex space-x-2 mb-2 md:mb-0">
          <Button onClick={handleLinkedInClick} variant="primary">
            LinkedIn
          </Button>
          <Button onClick={handleGitHubClick} variant="primary">
            GitHub
          </Button>
        </div>
        <p className="text-center md:text-left">
          © COPYRIGHT 2024 - ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
