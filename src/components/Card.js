import React from 'react'



function Card(props) {
    return (
        <div>
            {/* <img className="App-logo" src="../../public/images/images.png"alt="logo"></img> */}
            <h1 className='header'>Welcome to<span className="nasa"> NASA</span>  Photo of the Day</h1>
            <h2 className="title">{props.title}</h2>
            <h3>{props.date}</h3>
            <img className="photo-img" src={props.url} alt="space"/>
            <p className='App-link'>{props.url}</p>
            <p className="info">{props.explanation}</p>
        </div>
    )
}

export default Card