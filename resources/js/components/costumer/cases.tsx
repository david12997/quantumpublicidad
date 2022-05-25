import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DataApi } from "../../services/DataApi";
import { config } from "../../env";
import { CardCostumer } from "./cardCostumer";


const StyleCases = styled.div`

    grid-area:costumer ;
    display:flex ;
    justify-content:space-around;
    align-items:center ;
    flex-wrap:wrap ;

    @media(min-width:800px){

        width:85%;
        margin-left:8%;
        padding:10px;

    }

`;

type PropsCases = {

    modal:any
}
export const Cases = (props:PropsCases): JSX.Element =>{

    const [storie, setStorie] = useState<null | any[]>(null);

    useEffect(()=>{

        const DataStories = new DataApi(config.api.key,config.domain);
        DataStories.GetStories().then(response=>{

            setStorie(response.data.data.filter((item:any,indice:number)=> item.highlight === 'false' && item));

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


    return<StyleCases>

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
                return<span key={index} onClick={()=>PrintSuccessStorie(item)}>
                    <CardCostumer  case={item} img={img}></CardCostumer>
                </span>
            })

        }



    </StyleCases>
}
