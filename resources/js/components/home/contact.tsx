import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
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

    return<ContactStyles>
        <div className="container-contact">
            <div className="title">
                <b>CONTACTO</b> <div className="link text-secondary"> Ver contacto</div>
            </div>
            <div className="data-contact">
                <div className="data">
                    <p ><FontAwesomeIcon  icon={faEnvelope}/> <b className="ml-2">ventas@quantumpublicidad.com</b></p>
                    <p ><FontAwesomeIcon  icon={faWhatsapp}/> <b className="ml-2">320 123 4567 - 30 123 4567</b></p>
                    <p ><FontAwesomeIcon  icon={faPhone}/> <b className="ml-2">1234567 - 765432</b></p>
                    <p ><FontAwesomeIcon  icon={faFacebook}/> <b className="ml-2">Quantum publcidad</b></p>
                    <p ><FontAwesomeIcon  icon={faInstagram}/> <b className="ml-2">@quantumpublciidad</b></p>
                    <p ><FontAwesomeIcon  icon={faLocationDot}/> <b className="ml-2">Cra 12b # 12 - 34</b></p>
                </div>
                <div className="map">
                    <img style={{borderRadius:'8px'}} width="100%"
                         src={`
                            https://maps.googleapis.com/maps/api/staticmap?
                            center=7.11483931635512,-73.13061159563954
                            &zoom=13
                            &size=280x280
                            &maptype=roadmap
                            &markers=color:red%7Clabel:Q%7C7.11483931635512,-73.13061159563954
                            &key=${config.maps.apiKey}
                         `}
                         alt="ubicacion mapa google maps"
                    />
                </div>
            </div>

        </div>

    </ContactStyles>
}
