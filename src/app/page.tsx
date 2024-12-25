import { ArabicCurriculumn, BlogSection, DeliverResult, HomeHero, StudentReviews, StudentStrugglingBanner, TeachersSlider } from '@/components/homepage';
import React from 'react';

const HomePage = () => {
  return (
    <React.Fragment>
      <HomeHero />
      <ArabicCurriculumn />
      <StudentStrugglingBanner />
      <TeachersSlider />
      <DeliverResult />
      <BlogSection />
      <StudentReviews />
    </React.Fragment>
  );
};

export default HomePage;
