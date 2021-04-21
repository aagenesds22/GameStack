import React from 'react';
import styled from 'styled-components';

export const AnimatedCardGame = styled.div`
    position: relative;
    display: inherit;
    flex-wrap: inherit;
    
    height: 36.2vh;
    width: 25vw;
    
    box-shadow: 12px 8px 18px 1px black;
    margin-bottom: 3em;

    .link {
       width: 100%;
       height: 100%;
       display: flex;
       flex-direction: column;
    }

    .link img {
           position: relative;
           height: 100%;
           width: 100%;
           object-fit: cover;
           image-rendering: crisp-edges;
           transform: scale(0.8, 0.75);



    }


    img:hover {
           
       box-shadow: -6px 1px 15px 52px rgb(115, 155, 255, 0.4);
    }


    &:hover {
           z-index: 3;
           position: relative;
           background-color: rgb(0,0,0, 0.3);
           
    }

    @keyframes appear {
           0% {bottom: -1000vh; display: none;}
           60% {transform: skew(0deg, 165deg);}
           62% {transform: skew(0deg, 170deg);}
           64% {transform: skew(0deg, 170deg); opacity: 1;}
           70% {transform: skew(0deg, 170deg); opacity: 0.2;}
           78% {transform: skew(0deg, 140deg); opacity: 0;}
           89% { transform: skew(0deg, -70deg); opacity: 0;}
           90% {transform: skew(0deg, -135deg); opacity: 0;}
           91% {transform: skew(0deg, -150deg); opacity: 0; display: flex;}
           94% {opacity: 0.3;}
           95% {opacity: 0.5;}
           99% {opacity: 0.6;}
           100% {bottom: 0; transform: skew(0, -176deg); opacity: 1; display: flex;}
    }

    @keyframes floating {
           0% {top: 0px;}
           100% {top: 15px;}
    }


`