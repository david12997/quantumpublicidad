import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { config } from "../../env";

const ContactStyles = styled.div`

    grid-area:contact;
    width:100%;

    & .container-contact{

        width:90%;
        margin-left:5%;
        margin-top:40px ;
    }

    & .container-contact > .title{

        width:100%;
        display:flex;
        color: #6a6a6a;
        font-size:20px ;
        cursor: pointer;
    }

    & .container-contact > .title >.link{

        font-size:16px;
        margin-top:5px ;
        margin-left:5px ;
    }

    & .container-contact > .data-contact{

        width:100%;
        height:600px;
        border-radius:8px;
        background-color:${({theme})=>theme.colors.white} ;
        display:flex;
        justify-content:center;
        align-items:center ;
        flex-wrap:wrap ;
        color:#6a6a6a ;
        font-size:16px ;

    }

    & .container-contact > .data-contact > .map{

        width:300px;
        height:300px;
        border-radius:8px ;
    }

    & p{

        cursor: pointer;
    }

    @media(min-width:800px){

        & .container-contact{

            width:80%;
            margin-left:10%;
            margin-top:55px ;
        }

        & .container-contact > .data-contact{

            justify-content:space-between;
            height:380px;
            font-size:18px ;
        }
        & .container-contact > .data-contact > .map{

            width:280px;
            height:280px;
            margin-right:54px ;


        }

        & .container-contact > .data-contact > .data{

            margin-left:7%;
        }
    }


`;

export const Contact = ():JSX.Element =>{

    const Navigate = useNavigate();
    const message = 'Hola estoy interesad@ en los servicios de la pagina quantumpublicidad.com'

    const GoTo = (url:string):void =>{

        window.location.href =url;
    }

    return<ContactStyles>
        <div className="container-contact">
            <div className="title">
                <b>CONTACTO</b> <div onClick={()=>Navigate('/contacto')} className="link text-secondary"> Ver contacto</div>
            </div>
            <div className="data-contact">
                <div className="data">
                    <p ><FontAwesomeIcon  icon={faEnvelope}/> <b className="ml-2">ventas@quantumpublicidad.com</b></p>
                    <p onClick={()=>GoTo(`https://api.whatsapp.com/send/?phone=573012543817&text=${message}`)}><FontAwesomeIcon  icon={faWhatsapp}/> <b className="ml-2">301 254 3817 - 301 254 3817</b></p>
                    <p onClick={()=>GoTo('https://www.facebook.com/Quantum-Publicidad-103990475645854')}><FontAwesomeIcon  icon={faFacebook}/> <b className="ml-2">Quantum publicidad</b></p>
                    <p onClick={()=>GoTo('https://www.instagram.com/publicidadquantum/')} ><FontAwesomeIcon  icon={faInstagram}/> <b className="ml-2">@publicidadquantum</b></p>
                    <p ><FontAwesomeIcon  icon={faLocationDot}/> <b className="ml-2">Carrera 56 #51-06</b></p>
                    <p ><FontAwesomeIcon  icon={faLocationDot}/> <b className="ml-2">Bucaramanga-Santander</b></p>
                </div>
                <div className="map">
                    <img style={{borderRadius:'8px'}} width="100%"
                         src={`
                            https://maps.googleapis.com/maps/api/staticmap?
                            center=7.1176085,-73.1005656
                            &zoom=15
                            &size=280x280
                            &maptype=roadmap
                            &markers=color:red%7Clabel:Q%7C7.1176085,-73.1005656
                            &key=${config.maps.apiKey}
                         `}
                         alt="ubicacion mapa google maps"
                    />
                </div>
            </div>

        </div>

    </ContactStyles>
}
