import React, { JSXElementConstructor, ReactComponentElement, ReactElement } from 'react';
import {globalState} from '../reducer/reducer';
import {connect, ConnectedProps} from 'react-redux';





/* const connector = connect(mapState) */
/* 
type PropsFromRedux = ConnectedProps<typeof connector>
 */
type Props = {
    idGame: {
        data: {
            name:string;
            genres:{id: number; name: string}[];
            background_image:string;
            description:string;
            released:string;
            rating:number;
            platforms:[];
        }
    }
}




function LoadGameStandard(props:Partial<globalState>):JSX.Element {

    
    return !props.idGame?.hasOwnProperty('data') ? (
                        <div style={{
                                    width: '100%', 
                                    height: '100vh', 
                                    backgroundColor: 'black'}}>
                                <h1 style={{
                                    margin: '0 auto', 
                                    color: 'white'}}>Unable to find game ID.</h1>
                                <img style={{
                                    width: '20%', 
                                    height: '40%'}} 
                                    src="http://assets.stickpng.com/images/5a81af7d9123fa7bcc9b0793.png"/>

                        </div>) : 
                        
                         (
                            <div className="mainContainerDetail">
                                
                                    <div className="gameContainerDetail">
                                        <div className="gameImgDiv">
                                            <div>
                                            <h1>{props.idGame.data?.name}</h1>
                                            <img src={`${props.idGame.data?.background_image}`} />
                                            </div>
                                      

                                    </div>
                                    <div className="gameTextDiv">
                                        <td style={{marginTop: '17px'}} dangerouslySetInnerHTML={{__html: props.idGame.data?.description || 'unable to reach API'}} />
                                        <h4><span style={{color: 'yellow'}}>RELEASED:</span> {props.idGame.data?.released}</h4>
                                                <div>
                                                    <h4 style={{color: 'yellow'}}>GENRES:</h4>
                                                    <ul>
                                                        {props.idGame.data?.genres.map((elem:{id: number, name: string}) => (
                                                            <li style={{width: 'max-content'}}>{elem.name}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                    <h4><span style={{color: 'yellow'}}>Rating:</span> {props.idGame.data?.rating}</h4>
                                                    <h4><span style={{color: 'yellow'}}>Platforms:</span> {props.idGame.data?.platforms.toString()}</h4>
                                    </div>
            </div>
        </div>
    ) 

}



const mapStateToProps = (state:Partial<globalState>) => {
    return {
        idGame: state.idGame,
    }
}



export default connect(mapStateToProps)(LoadGameStandard)

/* 
{
	"resource": "/home/aagenesds/PI-Videogames/client/src/Components/GameDetailRender.tsx",
	"owner": "typescript",
	"code": "2345",
	"severity": 8,
	"message": "Argument of type '(props: Props) => Element' is not assignable to parameter of type 
                'ComponentType<Matching<{ 
                    idGame: { data?: { 
                            name: string; 
                            genres: { 
                                id: number; 
                                name: string; }[]; 
                            background_image: string; 
                            description: string; 
                            released: string; 
                            rating: number; 
                            platforms: []; } | undefined; } | undefined; } & 
                            DispatchProp<...>, Props>>'.\n  
                            
                            Type '(props: Props) => Element' is not assignable to type 'FunctionComponent<Matching<{ 
                                idGame: { data?: { 
                                    name: string; 
                                    genres: { id: number; name: string; }[]; 
                                    background_image: string; 
                                    description: string; 
                                    released: string; 
                                    rating: number; 
                                    platforms: []; } | undefined; } | undefined; } & 
                                    DispatchProp<...>, Props>>'.\n    
                                    
                            Types of parameters 'props' and 'props' are incompatible.\n      
                            
                            Type 'PropsWithChildren<Matching<{ 
                                idGame: { 
                                    data?: { 
                                        name: string; 
                                        genres: { id: number; name: string; }[]; 
                                        background_image: string; 
                                        description: string; 
                                        released: string; 
                                        rating: number; 
                                        platforms: []; } | undefined; } | undefined; } & 
                                        
                                        DispatchProp<...>, Props>>' is not assignable to type 'Props'.\n        Types of property 'idGame' are incompatible.\n          Type '{ data?: { name: string; genres: { id: number; name: string; }[]; background_image: string; description: string; released: string; rating: number; platforms: []; } | undefined; } | undefined' is not assignable to type '{ data: { name: string; genres: { id: number; name: string; }[]; background_image: string; description: string; released: string; rating: number; platforms: []; }; }'.\n            Type 'undefined' is not assignable to type '{ data: { name: string; genres: { id: number; name: string; }[]; background_image: string; description: string; released: string; rating: number; platforms: []; }; }'.",
	"source": "ts",
	"startLineNumber": 90,
	"startColumn": 41,
	"endLineNumber": 90,
	"endColumn": 57
} */