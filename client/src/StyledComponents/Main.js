import styled from 'styled-components';

export const MainPage = styled.div`
            display: flex;
            width: 100%;
            height: 100vh;
            background-color: rgb(0, 0, 25, 1);
            animation: backChange 0.6s ease-in-out forwards 2.35s;



    .link{
            text-decoration: none;
            width: min-content;
            margin: 0 auto;
        
    }

    .container {
            width: 100%;
            position: fixed;
            height: 35em;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            left: -100px;
            opacity: 0;
            background-color: transparent;
            animation: move .6s linear forwards 3s;
    }

    h1 {
        
            backdrop-filter: blur(10px);
            margin: 0 auto;
            width: 90%;
            color: white;
            font-size: 12vw;
            letter-spacing: 16px;
            font-family: 'JetBrains Mono';
            font-weight: 800;
            color: yellow;
            filter: drop-shadow(2px 2px 3px rgb(255, 0, 0, 1));
            
            

    }

    .hoverButton {
            width: min-content;
    }

    .hoverButton:hover {
            display: block;
            transform: perspective(100px) translateZ(2.5em);
            transition-duration: 0.2s;
    }

    h1:hover {
        
            transform: perspective(500px) translateZ(1em);
            transition-duration: 0.2s;
        
    }

    @media (max-width: 768px) {

        h1 {
            font-size: 52px;
            letter-spacing: 2px;
            top: 20%;
            position: relative;
        }
    }

    @media (max-width: 400px) {
        top: 40%;
    }

    @keyframes backChange {
        from {background-color: rgb(0,0,25,1);}
        to {background: url("https://wallpaperaccess.com/full/492747.jpg");
            background-size: cover;
            background-position: center;
            }
    }

    @keyframes move {
        0% {
            left: -100px;
        }

        100% {
            
            opacity: 1;
            left: 0;
            
        }
    }

    
`

export const StarDiv = styled.div`
    display: flex;
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    height: max-content;
    width: 90%;
    justify-content: space-between;

    svg {
        height: 960px;
        position: relative;
        top: -1000px;
        
    }
    
    .starOne {
        animation: blink 0.7s forwards ${0.35}s;
        filter: contrast(1.75) brightness(0.1) drop-shadow(2px 2px 14px black);
    }
    
    .starTwo {
        animation: blink 0.9s forwards ${0.9}s;
        filter: contrast(1.75) brightness(0.1) drop-shadow(2px 2px 14px black);
    }
    
    .starThree {
        animation: blink 1.2s forwards ${1.5}s;
        filter: contrast(1.75) brightness(0.1)  drop-shadow(2px 2px 14px black);
    }
    
    @keyframes blink {
        0% {top: -100%; filter: ;}
        15% {
            transform: rotateZ(20deg);
            filter: brightness(0.5);
        }
        40% {
            transform: rotateZ(-19deg);
            top: 0;
            
        }
        50% {
            transform: rotateZ(0deg);
        }
        60% {
            height: 70%;
            width: 70%;
            top: 0;
        }

        70% {
            top: 0;
            height: 80%;
            width: 100%;
            
        }

      
        90% {
            height: 125%;
            width: 100%;
            top: 0;
            filter: blur(1px);
            
        }

        100% {
            height: 100%,
            width: 100%;
            top: 0;
            
            filter: brightness(1.2) blur(0) drop-shadow(2px 2px 15px rgb(255, 0, 0, 0.8));
            
            
        }
    }

    @media (max-height: 350px) {
        position: relative;
    }

  
`