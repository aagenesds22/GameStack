import axios from 'axios';
import React,{useState, useEffect, useRef} from 'react';
import NavBar from './NavBar.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getGenres, queryContent} from '../actions/actions';
import {InputDiv} from '../StyledComponents/InputForm';
import {Footer} from '../StyledComponents/Footer';
import {SuccessMessage} from '../StyledComponents/SucessAdd';


export function AddVideogames (props) {
    
    const {getGenres} = props;
    const [data, setData] = useState({
      name: "",
      description: "",
      releaseDate: "",
      rating: 5.0,
      genres: [],
      platforms: [],
    })

    const [width, setWidth] = useState(window.innerWidth);
    const [addedGame, setAddedGame] = useState(false);
    
    


    useEffect(() => {
        window.addEventListener('resize', changeWidth);
        
        return () => window.removeEventListener('resize', changeWidth)
    }, [])


    useEffect(() => {
        props.genres.length < 1 && getGenres();
    })

    const nameRef = useRef(null);
    const platformRef = useRef(null);
    const changeWidth = () => {
        setWidth(window.innerWidth);
        return;
    }


    const handleChange = (e) => {
        setData(prevVal => {
            return {
            ...prevVal,
            [e.target.name]: e.target.name === 'rating' ? parseFloat(e.target.value) : e.target.value,
            }
        })
    }

    const handleCheckbox = (e) => {
        setData(prevState => {
            const exists = prevState.platforms.indexOf(e.target.value);
            return {...prevState,
            platforms: prevState.platforms.includes(e.target.value) ? 
                            prevState.platforms.slice(0, exists).concat(prevState.platforms.slice(exists+1)) :
                                [...prevState.platforms, e.target.value],
            }
        })
        return;
    }


    const handleSubmit = (e) => {
        console.log(e);

        const {name, description, releaseDate, rating, genres, platforms} = data;
        let savedBorder;
        if(/[_+",.$#/!°]|^\s{1,}/g.test(name)) {
            e.preventDefault();
            alert('Invalid name. Special characters not allowed.')
            savedBorder = nameRef.current.style.border;
            nameRef.current.scrollIntoView({behavior: 'smooth'});
            nameRef.current.style.border = '2px solid red';
            nameRef.current.disabled=true;
            nameRef.current.placeholder = 'Please insert a valid name'
            nameRef.current.background = 'transparent';
            setTimeout(()=> {
                nameRef.current.disabled=false; 
                nameRef.current.style.border = savedBorder;
                nameRef.current.backgroundColor = 'rgb(255, 255, 255. 0.5)';
                nameRef.current.placeholder = 'Enter a valid name...';
                setData(prevVal => {return {
                    ...prevVal,
                    name: '',
                }})
                return;}, 1500);
                console.log('yes, it has a _')
            return;
        }

        if(platforms.length < 1) {
            e.preventDefault();
            alert("You must choose at least one game platform first!");
            savedBorder = platformRef.current.style.border;
            platformRef.current.style.border = "2px solid red";
            
            setTimeout(() => {
                platformRef.current.style.border = savedBorder;
                return;
            }, 1500);
            console.log('yes, you must choose a platform');
          return;
        }

        if(/[_+",.$#/!°]|^\s{1,}/g.test(description)) {
            e.preventDefault();
            alert('Add a valid description');
            return;
        }

        if(genres.length < 1) {
            e.preventDefault();
            alert('You must select at least 1 genre');
            return;
        }

        
        
        axios({
            method: 'post',
            url: 'http://localhost:3001/videogame',
            data: {
                name,
                description,
                releaseDate,
                rating,
                genres: genres.map(elem => elem.id),
                platforms: platforms,
            }}).then(res => {
                            
                            setAddedGame(true);
                            return;
            })
            e.preventDefault();
            return;
        
        
    }

    return (
        <div style={{minHeight: '100vh', backgroundColor: 'black', height: 'max-content', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <NavBar />
            <div className="mainContainer" style={{
            width: '100%',
            height: 'max-content',
            display: 'flex',
            flexDirection: `${width < 800 ? 'column' : 'row'}`,
            paddingBottom: '2em',
            }}>
                <div style={{
                        width: `${width < 800 ? '100%' : '65%'}`,
                        color: 'white',
                        height: `${width < 800 ? '60vh' : 'fit-content'}`,
                        fontFamily: 'JetBrains Mono'
                    }}>
                            <h1>SUBMIT YOUR GAMES</h1>
                            <br></br>
                            <br></br>
                            <p style={{
                                width: '70%', 
                                margin: '0 auto'}}>Have you got any game that you need to save or post online for reviews and sharing? You can 
                post it right here! Just fill the form {width > '700' ? 'on your right' : 'below'}. We will store it safely in our database, carefully
                programmed and optimized by experienced developers. In this game library, you will never loose your data.

            </p>
        </div>
        <InputDiv width={width}>
        <form onSubmit={(e)=> handleSubmit(e)} className="formCol" >
          
            
                <div>
                    <label>
                        
                        Name
                        <span className="mandatoryInput">*</span>
                        </label>
            <input  ref={nameRef}    
                    type='text'
                    value={data.name}
                    onChange={handleChange}
                    name="name" 
                    className="normalInput"
                    required
                ></input>
                </div>
                <div>
                    <label>
                        
                        Description
                        <span className="mandatoryInput">*</span>
                        </label>
            <textarea 
                
                onChange={handleChange}
                name="description" 
                style={{
                    height: '6em',
                    width: `100%`,
                }}
                rows={4}
                required
                ></textarea></div>
                <div>
                    <label>
                        
                        Release Date
                        
                        </label>
            <input type="date"
                onChange={handleChange}
                name="releaseDate" 
                
                className="normalInput"
                value={data.releaseDate}
    
                ></input></div>
                
        <div>
        <label>
            
            Genres
            
            </label>
            <span className="mandatoryInput">*</span>
                <select 
                    type="text" 
                    className="normalInput genreInput"
                    required
                    onChange={(e) => {
                            const idNro = parseInt(e.target.value.match(/\d{1,}/g).join(''));
                            const genreName = e.target.value.match(/\D{1,}/g).join('');
                            
                            
                            console.log(e.target);
                            ![...data.genres.map(elem=> elem.id)]
                                                    .includes(idNro) && 
                                                                    setData(prevVal => {
                                                                                    return {
                                                                                            ...prevVal,
                                                                                            genres: [...prevVal.genres, {
                                                                                                                id: idNro,
                                                                                                                name: genreName,
                                                                                                                                }]
                                                                                            }
                                                                                            });
                            
                            return;
                        }}>
                            {props.genres.map((elem, index) => (
                                                    <option 
                                                            key={index} 
                                                            value={`${elem.name}${elem.id}`}>{elem.name}
                                                    </option>
                            ))}
                    </select>
        <div className="genreBlock">
            {data.genres.map((elem, index) => (
                <div key={index} style={{
                                        width: 'max-content',
                                        display: 'flex',
                                        height: 'min-content'
                }}>
                    <span>{elem.name}</span>
                    <button onClick={(e) => {
                                            e.preventDefault();   
                                            setData(prevVal => {
                                                                return {
                                                                        ...prevVal, 
                                                                        genres: prevVal.genres.filter(element => element.id !== elem.id),
                                                                        }});
                                                                }}>
                    X
                </button>
                </div>
            ))}
        </div>

        </div>

        {/* releaseDate */}

        <div className="slideContainer">
        <label>
            
            Rating
            
            </label>
            <span style={{marginLeft: '15px', color: 'yellow', fontWeight: '800'}}>{data.rating}</span>
                <input  type="range" 
                        onChange={handleChange} 
                        value={data.rating} 
                        name="rating"
                        className="slider normalInput"
                        min={1} 
                        max={10} 
                        step={0.1}></input>
            </div>
        
    

        <div ref={platformRef}>
        <label>Platforms<span className="mandatoryInput">*</span></label>
            <div className="platformInput">
                {['macOS', 'Windows', 'PS5', 'PS4', 'PS3', 'PS2', 'XBOX', 'PS1', 'Wii', 'Nintendo64'].map((elem,index) => (
                        <div key={index+40} style={{display: 'flex', width: '25%', justifyContent: 'center', fontSize: '15px', fontWeight: '800', margin: '6px'}}>
                            <label>{elem}</label>
                        <input 
                                type="checkbox" 
                                value={elem}
                        
                                onChange={handleCheckbox}></input>
                        </div>
                    ))}
        </div>
        </div >

    

        <div style={{
            margin: '1.2em',
        }}>
            <input type="submit" value="Add Game"></input>
        </div>
        
        
        
    </form>
    </InputDiv>

    </div>

    <Footer />
    {addedGame && (
    
        <SuccessMessage>
            <div className="backgroundFixed">
                <div className="messageContainer">
                    <button onClick={()=> {
                        setAddedGame(false)
                        props.queryContent()
                        return;}}>X</button>
                    <h3>{data.name} successfully added!</h3>
                </div>
            </div>
            </SuccessMessage>)}
    </div>
    )
}


const mapStateToProps = (state) => {

    return {
        genres: state.genres,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getGenres, queryContent}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(AddVideogames);