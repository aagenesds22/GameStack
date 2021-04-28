import styled from 'styled-components';


export const SuccessMessage = styled.div`

        position: fixed; 
        width: 100%; 
        height: 100%;
        z-index: 5;

        .backgroundFixed {
            position: absolute;
            height: 100%;
            width: 100vw; 
            background-color: rgb(0,0,0,0.8);
            color: white;
        }

        .messageContainer {
            position: absolute;
            height: 20%;
            left: 50%;
            transform: translateX(-50%);
            top: 50%;
            display: flex;
            background-color: black;
            color: yellow;
        }

        .messageContainer button {
            height: min-content;
            background-color: red;
            border: 1px solid black;
            border-radius: 15px;
            width: 12%;
        }
`