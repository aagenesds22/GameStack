import React,{useState} from 'react';
import NavBar from './NavBar.jsx';

export default function AddVideogames () {
    
    
    const [data, setData] = useState({
      name: "any",
      description: "WTF15252",
      releaseDate: "27122019",
      rating: 9.5,
      genres: [4, 6],
      platforms: "PS3, PS4, PC, XBOX"
    })

    const handleChange = () => {
        
    }
    return (
        <div>
        <NavBar>
            
        </NavBar>
        <div style={{
            width: '50%',
            
        }}>
        <form onSubmit={()=>{}} style={{
            display: 'flex',
            flexDirection: 'column',
            height: '16em',
        }}>

            {["name", "description", "releaseDate"].map(elem => (
            <input type={
                elem !== "descrption" && 'text'}
                name={elem}
    
                ></input>))}
        
        {/* name */}

        
        {/* //description */}

        
        {/* releaseDate */}
        <input></input>
        {/* rating */}
        <input></input>
        {/* platforms */}
        
    </form>
    </div>
    </div>
    )
}