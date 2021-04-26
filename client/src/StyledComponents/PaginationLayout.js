import React from 'react';
import styled from 'styled-components';


export const PaginationLayout = styled.div`

        
        display: flex;
        height: 35px;
        justify-content: center;
        width: 30%;
        margin: 0 auto;
        
        
        
        
        .numbersButton {
            
            opacity: 1;
            
            background-color: transparent;
            color: white;
            font-family: 'JetBrains Mono';
            height: 100%;    
            width: max-content;
            
            border: none;
            
            
        }

       /*  

            
        } */

        .numbersButton:active{
            background-color: yellow;
            font-weight: 900;
            transform-duration: 0.1s;
            color: black;
        }

        .numbersButton:disabled {
            background-color: transparent;
            border-top: 1px solid yellow;
            color: white;
            font-size: 16px;
            font-weight: 900;
        
        }

        


        @keyframes paginationDeploy {
            0% {visibility: visible;}
            100% {opacity: 1; margin-left: 15px; visibility: visible;}
        }

        @keyframes paginationShrink {
            from {
                opacity: 1; margin-left: 15px; visibility: visible;
            }

            to {
                opacity: 0; margin-left: -48px; visibility: hidden;
            }
        }

`