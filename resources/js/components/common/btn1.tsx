import React from "react";
import styled from "styled-components";

interface PropsStyle  {
    width:string,
    height:string
}

const Btn1Styles = styled.div<PropsStyle>`

    width: ${(props)=>props.width};
    height:${(props)=>props.height};
    background:linear-gradient(90deg,
                             ${({theme})=>theme.colors.purple},
                            ${({theme})=>theme.colors.red} 70%,
                            ${({theme})=>theme.colors.yellow}
    );
    color: ${({theme})=>theme.colors.white} ;
    border-radius:5px ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    font-size:18px;
    box-shadow:3px 3px 4px rgba(0,0,0,0.2) ;
    cursor:pointer ;


`;

type PropsBtn1 = {

    text:string,
    width:string,
    height:string,
}

export const Btn1 = (props:PropsBtn1):JSX.Element =>{

    return<Btn1Styles width={props.width} height={props.height}>

        <b>{props.text}</b>

    </Btn1Styles>
}
