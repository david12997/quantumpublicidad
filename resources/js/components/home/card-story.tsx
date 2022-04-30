import React from "react";
import styled from "styled-components";

const CardStoryStyles = styled.div`

    width:330px;
    height:230px;
    background-color:${({theme})=>theme.colors.white} ;
    border-radius:8px ;
    margin-top:10px;
    margin-bottom:10px ;
    margin-left:5px ;
    margin-right:5px ;
    cursor: pointer;

    & .img-story{

        width:100% ;
    }

    & .text-story{

        width:100%;
        display:flex;
        justify-content:center ;
        align-items:center ;
        margin-top:10px ;
    }
`;

type PropsCardStory = {

    img:string,
    alt:string,
    text:string,

}

export const CardStory = (props:PropsCardStory):JSX.Element =>{

    return<CardStoryStyles>

        <div className="img-story">
            <img width="100%" src={props.img} alt={props.alt} />
        </div>
        <div className="text-story text-primary">
            <b>{props.text}</b>
        </div>
    </CardStoryStyles>
}
