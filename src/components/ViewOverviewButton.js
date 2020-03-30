// ----
// Dependencies
import React from 'react';


// ----
// ViewOverviewButton functional component
export const ViewOverviewButton = () => {

    // Adding a class to display overview panel when button is clicked
    const handleViewOverview = () => {
        document.querySelector( '#RightPanel' ).classList.add( 'slide-in' );
    }

    // Rendering the component
    return (
        <button
            id="ViewOverviewButton"
            className="bg-blue-gradient text-white text-uppercase text-shadow font-regular"
            onClick={() => handleViewOverview() }
            tabIndex={ 0 }
            aria-label="View transaction overview"
        >
            View Overview
        </button>
    );
}
