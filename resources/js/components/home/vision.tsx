import React from "react";
import styled from "styled-components";
import { config } from "../../env";

const StyleVision = styled.div`

        display:flex ;
        justify-content:space-between;
        align-items:center ;
        flex-wrap:wrap ;
        font-size:17px;
        color: ${({theme})=>theme.colors.gray_black};

        & .content > .img-vision-mobile, .title-vision-mobile{

            display:block;
            width:100% ;
            display:flex ;
            justify-content:center;
            align-items:center;
            font-size:20px ;
            color:${({theme})=>theme.colors.black} ;
            margin-bottom:15px ;
        }

        & .img-vision-desktop, .title-vision{

            display:none ;
        }

            & .content{

            width:100%;
        }

        & .text-vision{

            width:100% ;
        }

    @media(min-width:800px){

        & .content > .img-vision-mobile, .title-vision-mobile{

            display:none;
        }

        & .img-vision-desktop, .title-vision{

            display:block ;
        }


        & .content{

            width:40%;
        }

        & .text-vision{

            width:50% ;
        }

        &  .text-vision > .title-vision{

            color:${({theme})=>theme.colors.black} ;
            font-size:20px ;
        }

    }

`;

export const Vision = ():JSX.Element=>{


    return<StyleVision>

        <div className="content">
            <div className="title-vision-mobile">
                <b>VISIÓN</b>
            </div>
            <div className="img-vision-mobile">
                <img width="100%" src={ config.domain+"/images/vision-mobile.png"}></img>
            </div>

            <div className="img-vision-desktop">
                <img width="100%" src={ config.domain+"/images/vision-desktop.png"}></img>
            </div>
        </div>

        <div className="text-vision">
            <div className="title-vision">
                <b >VISIÓN</b>
            </div>
            <p>
                Prestar un <span className="text-primary">servicio profesional</span> e idóneo,
                para satisfacer las necesidades de nuestros clientes,
                a través de <span className="text-primary">soluciones</span> en la producción, comercialización y
                exhibición de <span className="text-primary"> recursos publicitarios audiovisuales</span> cumpliendo
                con los estándares de calidad, con el propósito de convertirnos
                en un <span className="text-primary">aliado estratégico</span> a nivel regional, departamental y nacional.
            </p>
        </div>



    </StyleVision>
}
