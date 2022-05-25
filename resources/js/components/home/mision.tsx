import React from "react";
import styled from "styled-components";
import { config } from "../../env";

const StyleMison = styled.div`

        display:flex ;
        justify-content:space-between;
        align-items:center ;
        font-size:17px;
        flex-wrap:wrap ;
        color: ${({theme})=>theme.colors.gray_black};

        & .content > .img-mision-mobile, .title-mision-mobile{

            display:block;
            width:100% ;
            display:flex ;
            justify-content:center;
            align-items:center;
            font-size:20px ;
            color:${({theme})=>theme.colors.black} ;
            margin-bottom:15px ;
        }

        & .img-mision-desktop, .title-mision{

            display:none ;
        }

    @media(min-width:800px){

        & .content > .img-mision-mobile, .title-mision-mobile{

            display:none;
        }

        & .img-mision-desktop, .title-mision{

            display:block ;
        }

        & .img-mision-desktop{

            width:40%;
        }

        & .content{

            width:50%;
        }

        & .content > .text-mision > .title-mision{

            color:${({theme})=>theme.colors.black} ;
            font-size:20px ;
        }

    }

`;

export const Mision = ():JSX.Element=>{


    return<StyleMison>

        <div className="content">
            <div className="title-mision-mobile">
                <b>MISIÓN</b>
            </div>
            <div className="img-mision-mobile">
                <img width="100%" src={ config.domain+"/images/mision-mobile.png"}></img>
            </div>
            <div className="text-mision">
                <div className="title-mision">
                    <b >MISIÓN</b>
                </div>
                <p>
                    Liderar como  <span className="text-primary">aliado estratégico</span> a nivel regional,
                    departamental y nacional la prestación de <span className="text-primary">servicios y
                    soluciones</span> integrales en <span className="text-primary"> publicidad visual </span>
                    mediante:
                    vallas e impresión a gran formato, material pop, con
                    <span className="text-primary"> innovación </span>
                    de productos y  <span className="text-primary">tecnología </span> para el servicio de nuestros clientes.
                </p>
            </div>

        </div>

        <div className="img-mision-desktop">
            <img width="100%" src={ config.domain+"/images/mision-desktop.png"}></img>
        </div>

    </StyleMison>
}
