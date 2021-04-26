import styled from 'styled-components';



export const StarLogo = styled.div`
        
        font-family: 'JetBrains Mono';
        height: max-content;
        width: 250px;

        h3 {
            margin: 0 auto; 
            letter-spacing: 5px;
            text-align: center;
            font-size: 2.4em;
            color: yellow;
            text-shadow: 0.1px 0.1px 1.1px red, 0.1px 0.1px 1.1px red, 0.1px 0.1px 1.1px red, 0.1px 0.1px 1.1px red;
        }


        .tripleStar {
            display: flex;
            width: 40%;
            height: 20%;
            margin: 0 auto;
            justify-content: space-around;
                        svg {
                                height: 100%;
                                width: 40px;
                                position: relative;
                                filter: brightness(8) contrast(4) drop-shadow(0px 0px 1px rgb(255, 0, 0, 0.5));
            
        }
    }
`