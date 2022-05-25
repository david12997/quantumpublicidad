import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { config } from "../../env";

const OficeStyles = styled.div`

    grid-area:ofice;
    width:100%;

    & .container-ofice{

        width:90%;
        margin-left:5%;
        margin-top:40px ;
    }

    & .container-ofice > .title{

        width:100%;
        display:flex;
        color: #6a6a6a;
        font-size:20px ;
        cursor: pointer;
    }

    & .container-ofice > .title >.link{

        font-size:16px;
        margin-top:5px ;
        margin-left:5px ;
    }

    & .container-ofice > .data-ofice{

        width:100%;
        border-radius:8px;
        background-color:${({theme})=>theme.colors.white} ;
        display:flex;
        justify-content:center;
        flex-wrap:wrap ;
        color:#6a6a6a ;
        font-size:16px ;
        padding:10px ;

    }

    & .container-ofice > .data-ofice > .map{

        width:100%;
    }

    & .container-ofice > .data-ofice > .img-ofice{

        width:100%;
        margin-bottom:25px ;
    }
    & .container-ofice > .data-ofice > .map > .img-map{

        width:100%;
        margin-bottom:10px ;
    }

    & .container-ofice > .data-ofice > .map > .data > .title-desktop{

        display:none ;
    }

    & .container-ofice > .data-ofice > .title-mobile{

        display:block ;
    }

    @media(min-width:800px){

        & .container-ofice{

            width:80%;
            margin-left:10%;
            margin-top:55px ;
        }

        & .container-ofice > .data-ofice{

            justify-content:space-between;
            flex-wrap:wrap ;
            font-size:18px ;
            padding:25px ;
        }
        & .container-ofice > .data-ofice > .map{

            width:40%;

        }

        & .container-ofice > .data-ofice > .map > .img-map{

            width:70%;
        }

        & .container-ofice > .data-ofice > .img-ofice{

            width:40% ;
        }

        & .container-ofice > .data-ofice > .map > .data > .title-desktop{

            display:block ;
        }

        & .container-ofice > .data-ofice > .title-mobile{

            display:none ;
        }

    }


`;

export const Ofice = ():JSX.Element =>{

    return<OficeStyles>
        <div className="container-ofice">
            <div className="title">
                <b>NUESTRAS OFICINAS</b>
            </div>
            <div className="data-ofice">
                <p className="text-primary title-mobile">
                    <FontAwesomeIcon  icon={faLocationDot}/> <b className="ml-2">Nuestras oficinas</b>
                </p>

                <div className="img-ofice">
                    <img width="100%" src={config.domain+'/images/oficina.png'} alt="oficina quantum publicidad" />
                </div>
                <div className="map">
                    <div className="data">
                        <p className="text-primary title-desktop"><FontAwesomeIcon  icon={faLocationDot}/> <b className="ml-2">Nuestras oficionas</b></p>
                        <p><b className="ml-2"> Cra 56 #51-06</b></p>
                        <p><b className="ml-2"> Pan de azúcar bajos - Segundo piso</b></p>
                        <p><b className="ml-2"> Bucaramanga - Santander</b></p>
                        <p ><FontAwesomeIcon  icon={faWhatsapp}/> <b className="ml-2">301 254 3817</b></p>

                    </div>
                    <img className="img-map" style={{borderRadius:'8px'}}
                         src={`
                            https://maps.googleapis.com/maps/api/staticmap?
                            center=7.1172019,-73.1011253
                            &zoom=15
                            &size=280x280
                            &maptype=roadmap
                            &markers=color:red%7Clabel:Q%7C7.1172019,-73.1011253
                            &key=${config.maps.apiKey}
                         `}
                         alt="ubicacion mapa google maps"
                    />
                </div>
            </div>

        </div>

    </OficeStyles>
}
