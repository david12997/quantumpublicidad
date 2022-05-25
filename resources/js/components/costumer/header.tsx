import React from "react";
import styled from "styled-components";
import { config } from "../../env";

const HeaderStyles = styled.div`

    grid-area:header;
    width:100%;
    margin-bottom:50px ;

    & .img-mobile{

        width:100%;
        display:block ;
    }

    & .img-desktop{

        width:100%;
        display:none ;
    }

    @media(min-width:800px){

        & .img-mobile{

            width:100%;
            display:none ;
        }

        & .img-desktop{

            width:100%;
            display:block ;
        }
    }
`;

export const HeaderCostumer = (): JSX.Element =>{

    return<HeaderStyles>
        <img className="img-mobile" src={ config.domain+ "/images/img-main-mobile-cases.png"} alt="portada pagina servicios" />
        <img className="img-desktop" src={ config.domain+ "/images/img-main-cases.png"} alt="portada pagina servicios" />
    </HeaderStyles>
}
