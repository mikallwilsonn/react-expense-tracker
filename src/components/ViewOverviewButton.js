// ----
// Dependencies
import React from 'react';


// ----
// ViewOverviewButton functional component
export const ViewOverviewButton = () => {

    const handleViewOverview = () => {
        document.querySelector( '#RightPanel' ).classList.add( 'slide-in' );
    }

    return (
        <button
            id="ViewOverviewButton"
            className="bg-blue-gradient text-white text-uppercase text-shadow font-regular"
            onClick={() => handleViewOverview() }
        >
            View Overview
        </button>
    );

}
