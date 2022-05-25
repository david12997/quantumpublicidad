import { faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { config } from "../../env";
import { DataApi } from "../../services/DataApi";
import { CardService } from "./card-service";

const ServicesStyles = styled.div`

    grid-area:service ;
    & .title{
        margin-left:5%;
        width:90% ;
        font-size:22px ;
        margin-bottom:25px ;
        margin-top:40px ;
        display:block ;
        color:${({theme})=>theme.colors.gray_black};
    }
    & .title > .btn-outline-secondary, .btn-outline-primary{

        font-size:17px ;
    }

    & .service-close{
        margin-left:5%;
        width:90% ;
    }

    & b{

        width:100%;
        display:block ;
    }

    @media(min-width:800px){
        & .title{
            margin-left:15%;
            width:70% ;
            display:flex ;
            justify-content: space-between;
            flex-wrap:wrap ;

        }

        & b{

            width:75%;
            display:flex ;
        }

        & .service-close{
            margin-left:15%;
            width:70% ;
        }


    }

`;

export const Services = ():JSX.Element =>{

    const [services, setServices] = useState<any[] | null>(null);
    const Elements = useRef<Array<HTMLDivElement | any>>([]);
    const BtnClose = useRef<Array<HTMLDivElement | any>>([]);
    const BtnOpen = useRef<Array<HTMLDivElement | any>>([]);


    useEffect(()=>{

        const data = new DataApi(config.api.key,config.domain);
        data.GetServices().then(response=>{

            setServices(response.data.data);
        })
        .catch((error:any)=>console.log(error));

        return()=>{

            setServices(null);

        }

    },[]);

    const ToggleService = (index:number,stateToggle:string,item:any) =>{

        const content = Elements.current[index];
        const btnClose = BtnClose.current[index];
        const btnSee = BtnOpen.current[index]

        if( stateToggle === 'open'){


            content.classList.remove('d-none');
            btnClose.classList.remove('d-none');
            btnSee.classList.add('d-none');

        }else{

            content.classList.add('d-none');
            btnClose.classList.add('d-none');
            btnSee.classList.remove('d-none');


        }


    }


    return<ServicesStyles>
        {
            (services === null || services === undefined)
            ?
            <div  style={{width:'100%'}} className="d-flex justify-content-center align-items-center">
                <div style={{width:'250px',height:'250px'}} className="spinner-grow text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            :
            services.map((item:any,index:number)=> <div key={index}>
            <div className="title">
                <b>{item.name.toUpperCase()}</b>
                <div  ref={element=>BtnOpen.current[index] = element}onClick={()=>ToggleService(index,'open',item)}  className="btn btn-outline-secondary">
                    Ver ahora <FontAwesomeIcon icon={faEye} />
                </div>
                <div  ref={element=>BtnClose.current[index] = element} onClick={()=>ToggleService(index,'close',item)}  className="btn btn-outline-primary d-none">
                    Cerrar <FontAwesomeIcon icon={faTimes} />
                </div>

            </div>

            <span  ref={element=>Elements.current[index] = element} className="d-none"><CardService key={index} service={item}></CardService></span>
            <div className="service-close">
                <hr></hr>
             </div>
            </div>  )
        }
    </ServicesStyles>
}
