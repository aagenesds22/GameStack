import styled from 'styled-components';


export const CreateGamePage = styled.div`

.mainContainer {
    
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: row;
        padding-bottom: 2em;

        @media (max-width: 800px) {
            flex-direction: column;
        }
}
`