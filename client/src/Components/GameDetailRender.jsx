import React from 'react';


export default function LoadGameStandard(props) {

    
    return props.idGame === 'empty' ? (
                        <div style={{width: '100%', height: '100vh', backgroundColor: 'black'}}>
                                <h1 style={{margin: '0 auto', color: 'white'}}>Unable to find game ID.</h1>
                                <img style={{width: '20%', height: '40%'}} src="http://assets.stickpng.com/images/5a81af7d9123fa7bcc9b0793.png"/>

                        </div>) : 
                        
                        props.idGame.hasOwnProperty('headers') && (
                            <div className="mainContainerDetail">
                                
                                    <div className="gameContainerDetail">
                                        <div className="gameImgDiv">
                                            <div>
                                            <h1 >{props.idGame.data.name}</h1>
                                            <img src={`${props.idGame.data['background_image']}`} />
                                            </div>
                                      

                                    </div>
                                    <div className="gameTextDiv">
                                        <td style={{marginTop: '17px'}} dangerouslySetInnerHTML={{__html: props.idGame.data.description}} />
                                        <h4><span style={{color: 'yellow'}}>RELEASED:</span> {props.idGame.data.released}</h4>
                                                <div>
                                                    <h4 style={{color: 'yellow'}}>GENRES:</h4>
                                                    <ul>
                                                        {props.idGame.data.genres.map(elem => (
                                                            <li style={{width: 'max-content'}}>{elem.name}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                    <h4><span style={{color: 'yellow'}}>Rating:</span> {props.idGame.data.rating}</h4>
                                                    <h4><span style={{color: 'yellow'}}>Platforms:</span> {props.idGame.data.platforms.toString()}</h4>
                                    </div>
            </div>
        </div>
    ) 

}