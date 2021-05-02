import * as React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as YourSvg} from '../assets/svg/star_prototype_Webpage2.svg';
import {MainPage, StarDiv} from '../StyledComponents/Main';



export default function Home(props:object): JSX.Element {


    return (
        <MainPage>
            
            <StarDiv>
            <div>
                <YourSvg className='starOne' style={{height: '35vh', width: '30vw'}} />
            </div>
            <div>
                <YourSvg className='starTwo' style={{height:'35vh',width: '30vw'}} />
            </div>
            <div>
                <YourSvg className='starThree' style={{height:'35vh',width: '30vw'}} />
            </div>
            </StarDiv>
            <div className="container">
            <h1>GameStack</h1>
            <p>Query your favorite game. Save your old games here!</p>
            <Link to='/home' className="link">
              <span className="hoverButton">Enter here</span>
              
            </Link>
            </div>
        </MainPage>
    
    )
}


