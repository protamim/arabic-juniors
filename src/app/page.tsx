import { ArabicCurriculumn, DeliverResult, HomeHero, StudentStrugglingBanner, TeachersSlider } from '@/components/homepage';
import React from 'react';

const HomePage = () => {
  return (
    <React.Fragment>
      <HomeHero />
      <ArabicCurriculumn />
      <StudentStrugglingBanner />
      <TeachersSlider />
      <DeliverResult />
    </React.Fragment>
  );
};

export default HomePage;
