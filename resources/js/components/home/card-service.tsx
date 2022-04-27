import React from "react";
import styled from "styled-components";

const CardServiceStyles = styled.div`

    width:300px;
    height:386px;
    background-color:${({theme})=>theme.colors.white} ;
    border-radius:8px ;
    margin-top:10px;
    margin-bottom:10px ;
    margin-left:0.5% ;
    margin-right:0.5% ;

    & .img-service{

        width:100%;
    }

    & .title{

        width:100% ;
        display:flex ;
        justify-content:center;
        align-items:center ;
        color:${({theme})=>theme.colors.black} ;
        margin-top:10px ;

    }

    & .text{
        width:90% ;
        margin-top:10px ;
        color:#6a6a6a;
        height:112px;
        margin-left:5%;
        overflow-y:scroll;


    }

    @media(min-width:800px){
        width:250px;
    height:370px;
    }
`;

type PropsCardService = {

    img:string,
    alt:string,
    title:string,
    text:string
}

export const CardService = (props:PropsCardService): JSX.Element =>{

    return<CardServiceStyles>
        <div className="img-service">
            <img width="100%" src={props.img} alt={props.alt} />
        </div>
       <div className="title">
           <b>{props.title}</b>
       </div>
       <div className="text">
           {props.text}
       </div>
    </CardServiceStyles>
}
