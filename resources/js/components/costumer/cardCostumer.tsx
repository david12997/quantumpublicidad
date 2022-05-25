import React from "react";
import styled from "styled-components";

const StylesCard = styled.div`

    width: 255px;
    height:261px;
    background:${({theme})=>theme.colors.white} ;
    border-radius:8px ;
    margin-bottom:25px ;
    cursor:pointer ;


    & .name{

        display:flex ;
        justify-content:center ;
        align-items:center ;
        color:${({theme})=>theme.colors.orange}  ;
    }

    & .img, img{

        border-top-right-radius:8px ;
        border-top-left-radius:8px ;
    }
`;

type PropsCardCostumer = {

    case:any,
    img:string
}

export const CardCostumer = (props:PropsCardCostumer):JSX.Element =>{

    return<StylesCard>

        <div className="img">
            <img width='100%' src={props.img} alt={'imagen '+ props.case.name}  />
        </div>
        <br></br>
        <div className="name"> <b> {props.case.name}</b></div>

    </StylesCard>
}
