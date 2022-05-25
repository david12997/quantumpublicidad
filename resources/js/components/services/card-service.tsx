import React from "react";
import styled from "styled-components";

const CardServiceStyle = styled.div`


    width:90%;
    margin-left:5%;
    margin-bottom:40px ;


    & .container-service{

        background-color: ${({theme})=>theme.colors.white};
        border-radius:8px;
        padding:20px ;
        color: ${({theme})=>theme.colors.gray_black};
        display:flex;
        justify-content:space-around;
        align-items:center ;
        flex-wrap:wrap ;
        font-size:17px ;
    }

    & .container-service > .img-mobile{

        width:100%;
        display:block ;
    }

    & .container-service > .img-desktop{

        display:none;
    }

    & .container-service > .text-btn{

        width:100%;
    }

    @media(min-width:800px){

        width:70%;
        margin-left:15%;

        & .container-service{

            padding:25px ;
        }

        & .container-service > .img-mobile{

            display:none ;
        }

        & .container-service > .img-desktop{

            width: 40%;
            display:block ;
        }

        & .container-service > .text-btn{

            width:50%;
        }


    }
`;

type PropsCardService = {

    service:any
}
export const CardService = (props:PropsCardService): JSX.Element =>{

    const img = JSON.parse(props.service.media)[0].images.foto1;
    const message = `Hola estoy interesad@ en el servicio ${props.service.name} de la pagina de quantumpublicidad.com`;

    return<CardServiceStyle>

        <div className="container-service">
            <div className="img-mobile">
                <img width="100%" src={img} alt="imagen servico quantum publicidad" />
            </div>
            <div className="text-btn">
                <p style={{marginTop:"7px"}}>{props.service.description}</p>
                <div className="d-grid gap-2">
                    <a href={`https://api.whatsapp.com/send/?phone=573012543817&text=${message}`} style={{fontSize:"18px"}} className="btn btn-primary"> Contactar con ventas </a>
                </div>

            </div>
            <div className="img-desktop">
                <img width="100%" src={img} alt="imagen servico quantum publicidad" />
            </div>
        </div>
    </CardServiceStyle>
}
