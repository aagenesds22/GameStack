import styled from 'styled-components';



export const ResponsiveBar = styled.div `

        display: flex;
        flex-direction: column;
        width: 100%;
        height: max-content;
        color: yellow;
        

        .childContainer {
            width: max-content;
            display: flex;
            
            align-items: center;
            margin: 0 auto;
            z-index: 6;
        }

        .childContainer span {
            margin: 16px;
        }



        .filterContainer {
            
            background-color: rgb(0,0,0,0.8);
            width: 100%;
            position: absolute;
            height: 50%;
            z-index: 5;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            div {
                margin: 0 auto;
            }
        }
`