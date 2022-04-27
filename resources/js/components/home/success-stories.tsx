import React from "react";
import styled from "styled-components";
import { CardStory } from "./card-story";

const SuccessStoriesStyles = styled.div`

    grid-area:cases;
    width:100%;
    margin-top:50px ;

    & .container-stories{

        width:90%;
        margin-left:5%;
        margin-top:28px ;
    }

    & .container-stories > .title{

        width:100%;
        display:flex;
        color: #6a6a6a;
        font-size:20px ;
    }

    & .container-stories > .title >.link{

        font-size:16px;
        margin-top:5px ;
        margin-left:5px ;
    }

    & .container-stories > .stories{

        width:100%;
        display:flex;
        justify-content:center ;
        flex-wrap:wrap;
    }

    @media(min-width:800px){

        margin-top:30px ;
        & .container-stories{

            width:80%;
            margin-left:10%;
            margin-top:35px ;
        }
        & .container-stories > .stories{

            width:100%;
            display:flex;
            justify-content:space-around ;
            flex-wrap:wrap;
        }
    }
`;

export const SuccessStories = ():JSX.Element =>{

    return<SuccessStoriesStyles>
        <div className="container-stories">
            <div className="title">
                <b>CASOS DE EXITO </b> <div className="link text-secondary"> Ver campañas</div>
            </div>
            <div className="stories">
                <CardStory img="images/storie-1.png" alt="imagen caso de exito" text="Ver ahora" />
                <CardStory img="images/storie-2.png" alt="imagen caso de exito" text="Ver ahora" />
                <CardStory img="images/storie-3.png" alt="imagen caso de exito" text="Ver ahora" />
            </div>
        </div>

    </SuccessStoriesStyles>
}
