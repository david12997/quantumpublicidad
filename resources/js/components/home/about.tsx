import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { config } from "../../env";
import { Btn1 } from "../common/btn1";

const AboutStyles = styled.div`

    grid-area:about;
    width:100%;
    margin-top:50px ;


    & .container-about{

        width:90%;
        margin-left:5%;
        margin-top:28px ;
    }

    & .container-about > .title{
        width:100%;
        color:#6a6a6a;
        font-size:20px ;

    }

    & .container-about > .content{

        width: 100%;
        border-radius: 8px;
        background: ${({theme})=>theme.colors.white};
        padding:20px ;
        display:flex ;
        flex-wrap:wrap ;
        justify-content:space-between ;
    }
    & .container-about > .content > .texts-btn{

        width:100%;
        font-size:17px ;
        color:#6a6a6a;
    }
    & .container-about > .content > .logo{

        width:100%;
    }

    @media(min-width:800px){

        margin-top: 40px;

        & .container-about{

            width:80%;
            margin-left:10%;
            margin-top:35px ;
        }
            & .container-about > .content > .texts-btn{

            width:50%;
        }
        & .container-about > .content > .logo{

            width:24%;
            margin-left:5%
        }
    }
`;


export const About = ():JSX.Element =>{

    const Navigate = useNavigate();

    return<AboutStyles>
        <div className="container-about">
            <div className="title"><b>SOBRE QUANTUM PUBLICIDAD</b></div>
            <div className="content">
                <div className="logo">
                    <img width="100%" src={ config.domain+"/images/logo-background.png"} alt="logo quantum publiidad" />
                </div>
                <div className="texts-btn">
                    <p>
                        Nuestra empresa te ofrece servicios de
                        <span className="text-primary"> impresion digital </span>
                        y espacios con geo-referencias influyentes, ampliamente demandados
                        a precios muy comodos y lo mejor de todo
                        <span className="text-primary"> ¡Sin intermediarios!</span>
                    </p>
                    <p>
                        Visita nuestro buscador de
                        <span className="text-primary"> vallas publicitarias</span> con georeferencias
                        en tiempo real
                    </p>
                   <span  onClick={()=>Navigate('/vallas')}><Btn1 text="BUSCAR  VALLAS" width='300px' height='50px'/></span>
                </div>

            </div>
        </div>
    </AboutStyles>
}
