import styled from 'styled-components';


export const BarStyled = styled.div`
    
        width: max-content;
        display: flex;
        font-family: 'JetBrains Mono' !important;

        span {
            font-size: 15px;
            color: white;
            font-family: 'JetBrains Mono';
            margin-right: 6px;
        }

        .formSearching {
            width: max-content;
            display: flex;
            

        }

        .formSearching input {
            font-family: 'JetBrains Mono';
            font-weight: 900;
            font-size: 14px;
            
            text-shadow: 0.1px 0.1px 0.4px black;
        }

        .formOrdering {
            
            width:  min-content;
            display: flex;
            font-family: 'JetBrains Mono';

        }

        .formOrdering form {
            width: 25%;
        }

        .deployable {
            background-color: black;
            font-weight: 800;
            border: 1px solid yellow;
            outline: none;
            color: white;
            border-radius: 4px;
            font-family: 'JetBrains Mono';
        }

        .applyButton {
            margin-left: 12px;
            background-color: transparent;
            color: yellow;
            border-radius: 4px;
            border: 1px solid yellow;
            font-family: 'JetBrains Mono';
        }
`


export const CreatorBar = styled.div`
            display: flex;
            width: 150px;
            
            .containerButton {
                    width: 40%;

                    }

            .filterButton {
                    width: max-content;
                    border-radius: 7px;
                    font-family: 'JetBrains Mono';
                    font-weight: 600;
                    border: none;
                    font-size: 15px;
                    }

            .filterButton:disabled {
                background-color: yellow;
                color: black;
                font-weight: 800;
            }
`