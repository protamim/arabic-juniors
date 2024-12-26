import { ArabicCurriculumn, BlogSection, DeliverResult, FaqSection, HomeHero, Newsletter, StudentReviews, StudentStrugglingBanner, TeachersSlider } from '@/components/homepage';
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
      <FaqSection />
      <Newsletter />
    </React.Fragment>
  );
};

export default HomePage;
