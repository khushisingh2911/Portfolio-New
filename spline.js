
// Import necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Spline from '@splinetool/react-spline'; // Use default import
import './style.css'; // Your styles

// Define the Spline component
const SplineComponent = (props) => {
    const { scene } = props;
    return React.createElement(
        'div',
        { style: { width: "120%", height: "100%" } },
        React.createElement(Spline, { scene: scene }) // Use the imported Spline component
    );
};

// Render the Spline scene
const renderSpline = () => {
window.onload = function() {
    // Define the Spline component using React.createElement
    const SplineComponent = (props) => {
        const { scene } = props;
        return React.createElement(
            'div', 
            { style: { width: '100%', height: '100%' } }, 
            React.createElement(Spline, { scene: scene }) // Spline component
        );
    };

    // Render the Spline scene using ReactDOM.render

    ReactDOM.render(
        React.createElement(SplineComponent, { scene: "https://prod.spline.design/AhgFcEKaeq5FjyiQ/scene.splinecode" }),
        document.querySelector('.spline-container')
    );
};


// Wait for the DOM to load before rendering
window.onload = renderSpline;

