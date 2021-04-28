import styled from 'styled-components';



export const VideogameDetail = styled.div`
        width: 100%;
        min-height: 100vh;
        margin: 0 auto;
        background-color: black;
        font-family: 'JetBrains Mono';

        .mainContainerDetail {
                
                width: 100%;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                color: white;
                background-color: black;

                @media (max-width: 768px) {
                        height: max-content;
                }
        }

        .gameContainerDetail {
                width: 100%;
                height: 100%;
                display: flex;
                font-weight: 800;
                @media (max-width: 768px) {
                        flex-direction: column;
                }
        }

        .gameImgDiv {
                width: 50%;
                height: max-content;

                @media (max-width: 768px){
                        width: 85%;
                        margin: 0 auto;
                }
        }

        .gameImgDiv img {
                width: 80%; 
                object-fit: cover;
        }

        .gameTextDiv {
                width: 45%;
                height: max-content;
                margin-top: 48px;
                text-align: justify;
                letter-spacing: -0.5px;
                @media (max-width: 768px) {
                        width: 85%;
                        margin: 0 auto;
                }
        }

`