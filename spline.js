// Import necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Spline from '@splinetool/react-spline'; // Spline component
import './style.css'; // Your styles

// Define the SplineComponent
const SplineComponent = ({ scene }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Spline scene={scene} />
    </div>
  );
};

// Render the Spline scene when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SplineComponent scene="https://prod.spline.design/AhgFcEKaeq5FjyiQ/scene.splinecode" />,
    document.querySelector('.spline-container')
  );
});
