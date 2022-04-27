import React ,{ useEffect, useState} from "react";
import styled from "styled-components";

import { DataApi } from "../../services/DataApi";
import { config } from "../../env";
import { CardService } from "./card-service";
const ServicesStyle = styled.div`

    grid-area:services;
    width:100%;

    & .container-servicios{
        width:90%;
        margin-left:5%;
        margin-top:50px ;
    }

    & .container-servicios > .title{

        width:100%;
        display:flex;
        color: #6a6a6a;
        font-size:20px ;
    }

    & .container-servicios > .title > .link{

        font-size:16px;
        margin-top:5px ;
        margin-left:5px ;
    }

    & .container-servicios > .servicios{
        width:100%;
        display:flex;
        justify-content:center ;
        flex-wrap:wrap;

    }

    @media(min-width:800px){

        & .container-servicios{

            width:80%;
            margin-left:10%;
            margin-top:65px ;
        }

        & .container-servicios > .servicios{
            width:100%;
            display:flex;
            justify-content:space-around ;
            flex-wrap:wrap;

        }

    }



`;

export const Services = ():JSX.Element =>{

    const [service, setService] = useState<null | any[]>(null);
    const images:string[] = [
        'images/service-4.png',
        'images/service-2.png',
        'images/service-3.png',
        'images/service-1.png'
    ];

    useEffect(()=>{

        const DataServices = new DataApi('36963',config.domain);
        DataServices.GetServices().then(response=>{

            setService(response.data.data.filter((item:any,index:number)=>item.id_service > 4 && item))

        }).catch(error=>{

            console.log(error);
        });


        return()=>{

            setService(null);
        }

    },[])

    return<ServicesStyle>
        <div className="container-servicios">
            <div className="title">
                <b>SERVICIOS</b> <div className="link text-secondary"> Ver servicios</div>
            </div>
            <div className="servicios">
                {
                    service === null
                    ?
                    <div style={{width:'100%'}} className="d-flex justify-content-center align-items-center">
                        <div style={{width:'250px',height:'250px'}} className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    service.map((item:any,index:number)=>{

                        item.media=images[index];
                        return<CardService
                            key={index}
                            img={item.media}
                            alt="servicios quantum publicidad"
                            text={item.description}
                            title={item.name}

                        />
                    })
                }
            </div>
        </div>
    </ServicesStyle>
}
