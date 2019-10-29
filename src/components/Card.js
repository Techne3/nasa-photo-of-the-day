import React from 'react'
import styled from "styled-components";
import {Card, CardBody,Button, CardTitle, CardText, CardImg } from 'reactstrap';
import ModalExample from './Modal';


const InnerCard =styled.p `

  color:#000;
  font-size: 44px;
  margin-top:20px;
  background-color:none;

`

const CardSpot = (props) => {
  return (
      <div>
      {/* <Inner>choose a date</Inner> */}
        {/* <img src="../images/images.png" alt='logo'/> */}
          <InnerCard>Welcome to<span className="nasa"> NASA </span> Photo of the Day</InnerCard>
      <InnerCard className='CardBody'>
        <CardImg top width="80%" src={props.url} alt="Card image cap" />
        <CardBody>
          <CardText className="innerTitle">{props.title}</CardText>
          {/* <CardText>{props.explanation}</CardText> */}
          <CardText>
            <small className="text-muted">{props.date}</small>
          </CardText>
        </CardBody>
      <ModalExample
         explanation={props.explanation}
         title={props.title}
      />
      </InnerCard>
    </div>
  );
};


export default CardSpot