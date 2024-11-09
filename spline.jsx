// Import necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Spline from '@splinetool/react-spline'; // Use default import

// Define the Spline component
const SplineComponent = (props) => {
    const { scene } = props;
    return (
        <div style={{ width: "120%", height: "100%" }}>
            <Spline scene={scene} /> {/* Use the imported Spline component */}
        </div>
    );
};

// Render the Spline scene
const renderSpline = () => {
    ReactDOM.render(
        <SplineComponent scene="https://prod.spline.design/QG6scwysfAKNR5zC/scene.splinecode" />,
        document.querySelector('.spline-container')
    );
};

// Wait for the DOM to load before rendering
window.onload = renderSpline;
