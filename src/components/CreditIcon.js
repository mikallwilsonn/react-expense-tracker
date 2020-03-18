import React from 'react';

export const CreditIcon = () => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="518" 
            height="418" 
            viewBox="0 0 518 418"
        >
            <defs>
                <filter 
                    id="credit-card" 
                    x="0" 
                    y="0" 
                    width="518" 
                    height="418" 
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset 
                        dy="3" 
                        input="SourceAlpha"
                    />

                    <feGaussianBlur 
                        stdDeviation="3" 
                        result="blur"
                    />
                    
                    <feFlood floodOpacity="0.098"/>

                    <feComposite 
                        operator="in" 
                        in2="blur"
                    />
                    
                    <feComposite in="SourceGraphic"/>
                </filter>
            </defs>

            <g 
                transform="matrix(1, 0, 0, 1, 0, 0)" 
                filter="url(#credit-card)"
            >
                <path 
                    id="credit-card-2" 
                    data-name="credit-card" 
                    d="M458.333,32A41.789,41.789,0,0,1,500,73.667V390.333A41.789,41.789,0,0,1,458.333,432H41.667A41.789,41.789,0,0,1,0,390.333V73.667A41.789,41.789,0,0,1,41.667,32ZM41.667,65.333a8.568,8.568,0,0,0-8.333,8.333V132H466.667V73.667a8.568,8.568,0,0,0-8.333-8.333ZM458.333,398.667a8.568,8.568,0,0,0,8.333-8.333V232H33.333V390.333a8.568,8.568,0,0,0,8.333,8.333ZM66.667,365.333V332h66.667v33.333Zm100,0V332h100v33.333Z" 
                    transform="translate(9 -26)" 
                    fill="#fff"
                />
            </g>
        </svg>
    );
}
