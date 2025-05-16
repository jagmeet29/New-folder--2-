import React from "react";
import Lottie from 'lottie-react';
import animationData from './assets/loading-animation.json'; // Adjust the path to your animation file

const LoadingScreen = () => (
  <div className="loading-screen">
    <div className="loading-animation" style={{ width: '250px', margin: '0 auto' }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  </div>
);

export default LoadingScreen;
