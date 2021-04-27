import styled from 'styled-components';


export const InputDiv = styled.div`
        width: ${props => props.width < 800 ? '85%' : '30%'};
        height: 100%;
        margin: 0 auto;
        color: white;
        background-color: transparent;
        font-family: 'JetBrains Mono';
        

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
    
        .slideContainer {
            margin-bottom: 22px;
          
               
        }

   

        .genreBlock {
            
            height: 6em;
            margin-top: 9px;
            border: 1px solid yellow;
            display: flex;
            flexWrap: wrap;
            width: 100%;
            background-color: transparent;
            margin-bottom: 22px;
        }
`