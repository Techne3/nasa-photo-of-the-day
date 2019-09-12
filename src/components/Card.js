import React from 'react'
import styled from "styled-components";
import {Card, CardBody,Button, CardTitle, CardText, CardImg } from 'reactstrap';
// import {Buttons, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';






const CardSpot = (props) => {
  return (
    <div>
        {/* <img src="../images/images.png" alt='logo'/> */}
          <CardTitle className='TitleCard'>Welcome to<span className="nasa"> NASA </span> Photo of the Day</CardTitle>
      <Card className='CardBody'>
        <CardImg top width="80%" src={props.url} alt="Card image cap" />
        <CardBody>
          <CardText className="innerTitle">{props.title}</CardText>
          <CardText>{props.explanation}</CardText>
          <CardText>
            <small className="text-muted">{props.date}</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};


    // export default ModalExample;


// export default Example;




// function Card() {
//     return (
//         <div>
//             {/* <img  src="/src/images/images.png"alt="logo"></img> */}
//             <h1 className='header'>Welcome to<span className="nasa"> NASA</span>  Photo of the Day</h1>
//             <h2 className="title">{props.title}</h2>
//             <h3 className="date">{props.date}</h3>
//             <img className="photo-img" src={props.url} alt="space"/>
//             <p className='App-link'>{props.url}</p>
//             <p className="info">{props.explanation}</p>
          
//         </div>
//     )
// }

export default CardSpot