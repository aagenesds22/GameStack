import styled from 'styled-components';



export const NavigationBar = styled.div`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        height: 10em;
        justify-content: space-around;
        
        
        background-color: rgb(46, 46, 45);
        z-index: 4;

        @media (max-width: 850px) {
                flex-direction: column;
                justify-content: space-around;
                min-height: 14em;
        }

`

export const NavigationMenu = styled.div`

        width: max-content;
        height: 35px;
        font-family: 'JetBrains Mono';
        font-weight: 900;

        ul {
                margin: 0 auto;
                height: inherit;
        }

        li {
                max-width: 155px;
                width: auto;
                height: 100%;
                display: flex;
                align-items: center;
                
                background-color: yellow;
                border-radius: 6px;
                margin: 6px;
                color: black;
        }

        li svg {
                height: 25px;
                width: 30px;
                margin: 4px;
        }

        span {
                margin-right: 3.5px;
        }

        @media (max-width: 850px) {
                
                width: 100%;

                ul {
                        justify-content: space-between;
                        width: max-content;
                }
        }

`


