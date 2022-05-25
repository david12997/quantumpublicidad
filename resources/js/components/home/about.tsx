import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { config } from "../../env";
import { Btn1 } from "../common/btn1";
import { Mision } from "./mision";
import { Vision } from "./vision";

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

    }

    & .container-about > .content > .about{

        display:flex ;
        flex-wrap:wrap ;
        justify-content:space-between ;
    }

    & .container-about > .content > .mision, .vision{

        width:100%;
    }


    & .container-about > .content > .about > .texts-btn{

        width:100%;
        font-size:17px ;
        color:#6a6a6a;
    }
    & .container-about > .content > .about > .logo{

        width:100%;
    }

    @media(min-width:800px){

        margin-top: 40px;

        & .container-about{

            width:80%;
            margin-left:10%;
            margin-top:35px ;
        }
        & .container-about > .content > .about > .texts-btn{

            width:50%;
        }
        & .container-about > .content > .about > .logo{

            width:35%;
            margin-left:3%
        }

    }
`;


export const About = ():JSX.Element =>{

    const Navigate = useNavigate();

    return<AboutStyles>
        <div className="container-about">
            <div className="title"><b>SOBRE QUANTUM PUBLICIDAD</b></div>
            <div className="content">
                <div className="about">

                    <div className="logo">
                        <img width="100%" src={ config.domain+"/images/logo-background.png"} alt="logo quantum publiidad" />
                    </div>
                    <div className="texts-btn">
                        <p>
                        En <span className="text-primary">Quantum</span> ofrecemos servicio especializado en
                        <span className="text-primary">PUBLICIDAD EXTERIOR/ INTERIOR</span>,
                        liderando, comercializando y cumpliendo con elevados estándares de calidad para
                        satisfacer los requerimientos y necesidades de nuestros clientes.
                        Nuestras <span className="text-primary">vallas publicitarias</span> se encuentran
                        en la región de Santander,
                        en los principales municipios del departamento, ubicadas en los mejores
                        puntos visuales a nivel exterior, en las avenidas más transitadas y <span className="text-primary">puntos
                        de enfoque estratégicos</span> para la exhibición de su publicidad.


                        </p>
                        <p>
                            Visita nuestro buscador de
                            <span className="text-primary"> vallas publicitarias</span> con georeferencias
                            en tiempo real
                        </p>
                        <span  onClick={()=>Navigate('/vallas')}><Btn1 text="BUSCAR  VALLAS" width='300px' height='50px'/></span>
                    </div>

                </div>
                <br></br>
                <hr></hr>
                <br></br>
                <div className="mision">
                    <Mision></Mision>
                </div>
                <br></br>
                <hr></hr>
                <br></br>
                <div className="vision">
                    <Vision></Vision>
                </div>


            </div>
        </div>
    </AboutStyles>
}
