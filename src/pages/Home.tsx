import React from 'react';
import Banner from '../components/Banner';
import ReviewSlider from '../components/ReviewSlider';
// import Team from '../components/Team';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="pt-16"> {/* Account for fixed header */}
      <Banner />
      <ReviewSlider />
      {/* <Team /> */}
      <CTA />
    </div>
  );
};

export default Home;