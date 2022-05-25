import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { config } from "../../env";

const FooterStyles = styled.div`

    grid-area:footer;
    width:100%;
    height:810px;
    background-color:${({theme})=>theme.colors.white};
    margin-top:40px ;
    display:flex;
    justify-content:center;
    flex-wrap:wrap ;
    padding:20px ;
    font-size:17px ;
    color:#6a6a6a ;

    & .mapa-del-sitio{

        width: 100% ;
        padding-left:20px ;
        cursor: pointer;
    }
    & .quantum{

        width: 100% ;
        padding-left:20px ;
        cursor: pointer;
    }
    & .logo{

        width: 77% ;
    }

    @media(min-width:800px){

        height:310px ;
        justify-content:space-around;
        margin-top:131px ;
        padding-top:30px ;

        & .mapa-del-sitio{

            width: 30% ;
        }

        & .quantum{

            width: 30% ;
        }
        & .logo{

            width: 17% ;
            margin-top:-27px ;
        }
    }
`;

export const Footer = (): JSX.Element =>{

    const Navigate = useNavigate();

    return <FooterStyles>
        <div className="mapa-del-sitio">
            <p className="text-primary">Mapa del sitio</p>
            <p onClick={()=>Navigate('/')}>Inicio</p>
            <p onClick={()=>Navigate('/servicios')}>Servicios</p>
            <p onClick={()=>Navigate('/casos')}>Casos</p>
            <p onClick={()=>Navigate('/contacto')}>Contacto</p>
            <p onClick={()=>Navigate('/vallas')} className="text-secondary">Buscador de vallas</p>
        </div>
        <div className="quantum">
            <p className="text-primary">Quantum</p>
            <p>Carrera 56 #51-06</p>
            <p>ventas@quantumpublicidad.com</p>
            <p>Términos y condiciones</p>
        </div>
        <div className="logo">
            <img width="100%" src={ config.domain+"/images/logo-background.png"} alt="logo quantum publicidad"/>
        </div>
    </FooterStyles>
}
