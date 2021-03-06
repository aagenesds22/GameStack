import styled from 'styled-components';

export const AnimatedCardGame = styled.div`
    position: relative;
    display: inherit;
    flex-wrap: inherit;
    background-color: transparent;
    height: 51.2vh;
    width: 24em;
    
    box-shadow: 3px 8px 18px 1px white;
    margin-top: 3em;
    margin-bottom: 3em;

    .errorMessage{
           width: 90%;
    }
    .mainContainerGrid {
       width: 100%;
       display: inherit;
       flex-direction: column;
       background-color: rgb(0,0,25, 0.85);
       padding-bottom: 4em;
    }
    
    
    .container {
       display: flex; 
       height: 100%
    }

    .genreDiv {
       position: absolute;
       font-family: 'JetBrains Mono';
       top: 14%;
       border: 1px solid black;
       border-top-right-radius: 8px;
       border-bottom-right-radius: 8px;
       background-color: rgb(0,0,0,0.6);
       padding-left: 4px; 
       border-left: none;
    }

    .genreDiv span {
       font-weight: 800;
       color: yellow;
    }

    .genreUnorderedList {
       list-style-type: none;
       padding: 0;
       display: flex;
       flex-direction: column;
       flex-wrap: wrap;
       margin: 0 auto;
    }

    .genreUnorderedList li {
       position: relative;
       font-size: 9.9px;
       color: white;
       font-family: 'JetBrains Mono';
       margin: 0 auto;
    }

   
    .link {
       width: 100%;
       height: 100%;
       display: flex;
       flex-direction: column;
       justify-content: center;
       opacity: 0;
       animation: smoothApp 0.8s ease-in forwards 0.2s;
    }

    .link img {
           position: relative;
           height: 100%;
           width: 100%;
           object-fit: cover;
           image-rendering: crisp-edges;
           transform: scale(1, 0.95);
           
           
    }

    .link h5 {
           position: absolute;
           display: block;
           top: 0;
           background-color: rgb(0,0,0,0.86);
           border-bottom: 2px solid yellow;
           box-shadow: 0px 2px 2px 0.5px black;
           width: 100%;
           left: 50%;
           font-family: 'JetBrains Mono';
           font-size: 100%;
           transform: translate3d(-50%, 0, 0);
           color: white;
           text-decoration: none;
           margin-top: 0;
           margin-bottom: 5px;
    }


   


    &:hover {
           z-index: 3;
           position: relative;
           background-color: rgb(12,0,0, 1);
           transform: perspective(400px) translateZ(45px);
           transition-duration: 0.25s;
           transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
           animation-play-state: paused;
           img {
              
              box-shadow: 0px 1px 25px 12px yellow;
           }
           
           
           
           
    }

    @media (max-width: 500px) {
           width: 90%;
           margin-bottom: 12em;
    }

    @keyframes smoothApp {
           from {opacity: 0;}
           to {opacity: 1;}
    }


    @keyframes slideImg {
       0% {
              transform: scale(0.8, 0.75);
       }
       100% {
              transform: scale(0.9, 0.85)}
    }


`