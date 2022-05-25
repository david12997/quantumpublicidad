import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

import { config } from "../../env";
import { DataApi } from "../../services/DataApi";
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
        cursor:pointer ;
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

type PropsSuccessStorie = {

    modal:any,

}
export const SuccessStories = (props:PropsSuccessStorie):JSX.Element =>{

    const [storie, setStorie] = useState<null | any[]>(null);
    const Navigate = useNavigate();

    useEffect(()=>{

        const DataStories = new DataApi(config.api.key,config.domain);
        DataStories.GetStories().then(response=>{

            (response.data.data !== null || response.data.data !== undefined)
            ?
            setStorie(response.data.data.filter((item:any,indice:number)=> item.highlight === 'true' && item))
            :
            setStorie(null);
        })
        .catch((error:any)=>console.log(error));

        return()=>{

            setStorie(null);
        }

    },[]);


    const PrintSuccessStorie = (item:any):void=>{

        const modal = props.modal.current;
        const close = modal.children[0].childNodes[0].childNodes[0];

        const description = modal.children[0].childNodes[1].childNodes[2].childNodes[1];
        const title =modal.children[0].childNodes[1].childNodes[0].childNodes[0];
        const img = modal.children[0].childNodes[1].childNodes[2].childNodes[0].childNodes[0];

        const media = JSON.parse(item.media);

        close.addEventListener('click',()=>modal.classList.add('d-none'));

        description.innerHTML = item.description;
        title.innerHTML = item.name;
        img.src=media[0].images.foto1;

        modal.classList.remove('d-none');


    }

    return<SuccessStoriesStyles>


        <div className="container-stories">
            <div className="title">
                <b>CASOS DE EXITO </b> <div onClick={()=>Navigate('/casos')} className="link text-secondary"> Ver campañas</div>
            </div>
            <div className="stories">
                {
                    (storie === null || storie === undefined)
                    ?
                    <div style={{width:'100%'}} className="d-flex justify-content-center align-items-center">
                        <div style={{width:'250px',height:'250px'}} className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    storie.map((item:any,index:number)=>{

                        const img = JSON.parse(item.media)[0].images.foto1
                        return<span  key={index} onClick={()=>PrintSuccessStorie(item)}>
                                <CardStory img={img} alt="imagen caso de exito" text="Ver ahora" />
                            </span>
                    })

                }


            </div>
        </div>

    </SuccessStoriesStyles>
}



