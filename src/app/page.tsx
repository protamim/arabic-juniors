import { ArabicCurriculumn, HomeHero, StudentStrugglingBanner } from '@/components/homepage';
import React from 'react';

const HomePage = () => {
  return (
    <React.Fragment>
      <HomeHero />
      <ArabicCurriculumn />
      <StudentStrugglingBanner />
    </React.Fragment>
  );
};

export default HomePage;
