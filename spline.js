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
