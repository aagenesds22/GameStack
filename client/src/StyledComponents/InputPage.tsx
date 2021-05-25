import styled from 'styled-components';

interface WidthInt {
    readonly width: number;
}

export const MainContainer = styled.div<WidthInt>`
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: ${props => props.width < 800 && "column"};
        paddingBottom: 2em;
`



export const InputDiv = styled.div<WidthInt>`
        width: ${props => props.width < 800 ? '85%' : '30%'};
        height: 100%;
        margin: 0 auto;
        color: white;
        background-color: transparent;
        font-family: 'JetBrains Mono';

        div {
            width: 100%;
        }

        .formCol {
            display: flex;            
            flex-direction: column;
            justify-content: space-between;
            
            height: inherit;
            
        }

        .normalInput {
            height: ${props => props.width < 800 ? '4vh' : '2em'};
            width: 100%;
            border-radius: 15px;
            border: 3px solid yellow;
            margin-bottom: 22px;
            color: white;
            outline: none;
            background-color: rgb(255,255,255, 0.3);
        
        }

        .platformInput {
            display: flex;
            color: white; 
            flex-wrap: wrap;
            justify-content: space-around;
        }

        .mandatoryInput {
            color: red;
            font-weight: 900;
        }

        .slideContainer {
            margin-bottom: 22px;
          
               
        }

        .genreInput {
            color: black !important;
        }

        .genreBlock {
            
            height: 6em;
            margin-top: 9px;
            border: 1px solid yellow;
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            background-color: transparent;
            margin-bottom: 22px;
        }
`