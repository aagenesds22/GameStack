import axios from 'axios';
import React,{useState, useEffect, useRef, useLayoutEffect} from 'react';
import NavBar from './NavBar.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getGenres} from '../actions/actions';
import {InputDiv} from '../StyledComponents/InputForm';
import {Footer} from '../StyledComponents/Footer';

function AddVideogames (props) {
    
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
    
    /* const [selectedGenres, setSelectedGenres] = useState([]); */


    useEffect(() => {
        window.addEventListener('resize', changeWidth);
        
        return () => window.removeEventListener('resize', changeWidth)
    }, [])

    useEffect(() => {
        props.genres.length < 1 && getGenres();
    }, [])

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
            [e.target.name]: e.target.name == 'rating' ? parseFloat(e.target.value) : e.target.value,
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

        console.log('no _', name)
        axios({
            method: 'post',
            url: 'http://localhost:3001/videogame',
            data: {
                name,
                description,
                releaseDate,
                rating,
                genres: genres.map(elem => elem.id),
                platforms: Array.from(platforms),
            }});
        e.preventDefault();
        
    }

    return (
        <div style={{minHeight: '100vh', backgroundColor: 'black', height: 'max-content', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <NavBar>
            
        </NavBar>
        <div style={{
            width: '100%',
            height: 'max-content',
            display: 'flex',
            flexDirection: `${width < 800 ? 'column' : 'row'}`,
            
            paddingBottom: '2em',
            
            
        }}>
        <div style={{
            width: `${width < 800 ? '100%' : '65%'}`,
            color: 'white',
            height: `${width < 800 ? '100vh' : 'fit-content'}`,
            fontFamily: 'JetBrains Mono'
        }}>
            <h1>SUBMIT YOUR GAMES</h1>
            <p style={{width: '70%', margin: '0 auto'}}>Have you got any game that you need to save or post online for reviews and sharing? You can 
                post it right here! Just fill the form {width > '700' ? 'on your right' : 'below'}.
            </p>
        </div>
        <InputDiv width={width}>
        <form onSubmit={(e)=> handleSubmit(e)} className="formCol" >
          
            
                <div style={{
                    width: '100%'
                }}>
                    <label>
                        
                        Name
                        <span style={{color: 'red', fontWeight: '900'}}>*</span>
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
                <div style={{
                    width: '100%'
                }}>
                    <label>
                        
                        Description
                        <span style={{color: 'red', fontWeight: '900'}}>*</span>
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
                <div style={{
                    width: '100%'
                }}>
                    <label>
                        
                        Release Date
                        
                        </label>
            <input type="date"
                onChange={handleChange}
                name="releaseDate" 
                
                className="normalInput"
                value={data.releaseDate}
    
                ></input></div>
                
        <div style={{
                    width: '100%'
                }}>
        <label>
            
            Genres
            
            </label>
            <span style={{color: 'red', fontWeight: '900'}}>*</span>
        <select 
            type="text" 
            style={{
                    height: `2em`,
                    width: `100%`,
                }} 
            required
            onChange={(e) => {
                    const idNro = parseInt(e.target.value.match(/\d{1,}/g).join(''));
                    const genreName = e.target.value.match(/\D{1,}/g).join('');
                    
                    /*console.log('ID-Genre', idNro);
                    console.log('Name-Genre', genreName);*/
                    console.log(e.target);
                    ![...data.genres.map(elem=> elem.id)].includes(idNro) && setData(prevVal => {
                        return {
                            ...prevVal,
                            genres: [...prevVal.genres, {
                                id: idNro,
                                name: genreName,
                            }]
                        }
                    });
                    /* 
                    console.log(e.target.value);


                    !selectedGenres.includes(genreName) && setSelectedGenres(prevVal => [...prevVal, genreName])  */
                    return;
                }}>
                    {props.genres.map((elem, index) => (
                        <option key={index} value={`${elem.name}${elem.id}`}>{elem.name}</option>
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

                    }
                }
                    );

                console.log(data.genres);

                /* setSelectedGenres(prevVal => {
                        console.log(prevVal);
                        return [...prevVal].filter(element => element !== elem)
                    
                    }) */
                }
                }>
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
                className="slider"
                min={1} 
                max={10} 
                step={0.1} style={{
                    height: `2em`,
                    width: `100%`,
                }}></input>
        </div>
        
    

        <div ref={platformRef} style={{
                    width: '100%'
                }}>
        <label>Platforms<span style={{color: 'red', fontWeight: '900'}}>*</span></label>
            <div style={{display: 'flex', color: 'white', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                {['PC', 'PS5', 'PS4', 'PS3', 'PS2', 'XBOX', 'PS1', 'Wii', 'Nintendo64'].map(elem => (
                        <div style={{display: 'flex', width: '25%', justifyContent: 'center'}}>
                            <label>{elem}</label>
                        <input 
                                type="checkbox" 
                                value={elem}
                        
                                onChange={handleCheckbox}></input>
                        </div>
                    ))}
               {/*  <div style={{display: 'flex', width: '25%'}}>
                    
                <label>PC</label>
                <input 
                        type="checkbox" 
                        required
                        
                        onChange={handleChange}></input>
                </div>
                <div style={{display: 'flex', width: '25%'}}>
                    <label>PS5</label>
                        <input 
                                type="checkbox" 
                                required
                        
                                onChange={handleChange}></input>
                    </div>
                <div style={{display: 'flex', width: '25%'}}>
                    <label>PS4</label>
                        <input 
                                type="checkbox" 
                                required
                        
                                onChange={handleChange}></input>
                    </div>
                <div style={{display: 'flex', width: '25%'}}>
                    <label>PS3</label>
                        <input 
                                type="checkbox" 
                                required
                        
                                onChange={handleChange}></input>
                    </div>
                <div style={{display: 'flex', width: '25%'}}>
                    <label>XBOX</label>
                        <input 
                                type="checkbox" 
                                required
                        
                                onChange={handleChange}></input>
                    </div>
                <div style={{display: 'flex', width: '25%'}}>
                    <label>PS2</label>
                        <input 
                                type="checkbox" 
                                required
                        
                                onChange={handleChange}></input>
                    </div> */}
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
    </div>
    )
}


const mapStateToProps = (state) => {

    return {
        genres: state.genres,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getGenres}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(AddVideogames);