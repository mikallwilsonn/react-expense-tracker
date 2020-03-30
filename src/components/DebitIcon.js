// ----
// Dependencies
import React from 'react';


// ----
// DebitIcon functional component
export const DebitIcon = () => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg"  
            width="518" 
            height="318" 
            viewBox="0 0 518 318"
            role="img"
        >
            <defs>
                <filter 
                    id="money-bill-alt-regular" 
                    x="0" 
                    y="0" 
                    width="518" 
                    height="318" 
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
                filter="url(#money-bill-alt-regular)"
            >
                <path 
                    id="money-bill-alt-regular-2" 
                    data-name="money-bill-alt-regular" 
                    d="M250,126.5c-41.422,0-75,39.172-75,87.5s33.578,87.5,75,87.5c41.406,0,75-39.164,75-87.5S291.422,126.5,250,126.5Zm31.25,131.25A6.248,6.248,0,0,1,275,264H225a6.248,6.248,0,0,1-6.25-6.25v-12.5A6.248,6.248,0,0,1,225,239h12.5V195.688l-.367.242a6.244,6.244,0,0,1-8.664-1.734l-6.938-10.4a6.244,6.244,0,0,1,1.734-8.664l11.977-7.984a18.742,18.742,0,0,1,10.4-3.148H256.25a6.248,6.248,0,0,1,6.25,6.25V239H275a6.248,6.248,0,0,1,6.25,6.25ZM475,64H25A25,25,0,0,0,0,89V339a25,25,0,0,0,25,25H475a25,25,0,0,0,25-25V89A25,25,0,0,0,475,64ZM462.5,276.5a50,50,0,0,0-50,50H87.5a50,50,0,0,0-50-50v-125a50,50,0,0,0,50-50h325a50,50,0,0,0,50,50Z" 
                    transform="translate(9 -58)" 
                    fill="#fff"
                />
            </g>
        </svg>
    );
}
