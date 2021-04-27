import React from 'react';
import styled from 'styled-components';



export const NavigationBar = styled.div`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        height: 7em;
        justify-content: space-evenly;
        background-color: rgb(46, 46, 45);
        z-index: 4;

`

export const NavigationMenu = styled.div`

        width: max-content;
        height: min-content;
        
        li {
            min-width: max-content;
            width: 8vw;
            background-color: yellow;
            border-radius: 6px;
            margin: 1px;
            color: black;
        }

`


