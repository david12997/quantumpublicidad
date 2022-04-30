import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { config } from "../../env";
import { DataApi } from "../../services/DataApi";
import { Maps } from "../../services/Maps";


import { Btn1 } from "../common/btn1";


const SearchBillboardStyles = styled.div`

    width: 100%;
    height:calc(100vh - 100px) ;
    grid-area:search ;
    position:relative ;

    & .mobile{
        display:block ;
        width:100% ;
        height:100%;
    }

    & .desktop{
        display:none ;
    }

    & .mobile > .btn-search{

        position:absolute;
        width:100% ;
        bottom:0% ;
        z-index:999999;
    }

    & .mobile > .map{

        width:100%;
        height:95% ;
        background-color:${({theme})=>theme.colors.white};
        box-shadow:0px 0px 8px rgba(0,0,0,0.3);

    }

    & .mobile > .title-search{

        font-size:22px;
    }

    & .mobile > .search-options{

        width:100%;
        height:92%;
        background-color:${({theme})=>theme.colors.white};
        position:absolute ;
        animation-duration:1s;
        overflow-y:scroll ;
        padding-bottom:20px ;
        z-index:99999;

    }
    @keyframes open-search{

        0%{ bottom:-850px}
        100%{bottom:49px;}
    }

    @keyframes close-search{

        0%{bottom:49px}
        100%{bottom:-850px}
    }

    & .mobile > .search-options > .close-search{

        width:100%;
        height:31px;
    }

    & .mobile > .search-options > .close-search > .icon-close{

        width:50px;
        height:50px;
        display:flex ;
        justify-content:center ;
        align-items:center ;
        font-size:22px ;
        color:${({theme})=>theme.colors.purple};
    }

    & .mobile > .search-options > .choose-btn-place{

        width:80%;
        margin-left:10%;
        height:334px;
        overflow-y:scroll ;
    }

    & .mobile > .search-options > .choose-directions-place{
        width:80%;
        margin-left:10%;
    }

    select{

        height:45px;
        border-radius:5px ;
        box-shadow:0px 0px 7px rgba(0,0,0,0.3);
        width:100% ;
        background-color:white ;
    }

    .label-maps{

        background: ${({theme})=>theme.colors.white};
        color:black;
        box-shadow:0px 0px 7px rgba(0,0,0,0.4);
        padding:5px ;
        margin-top:-65px ;
        font-weight:bold ;
    }



    @media(min-width:800px){
        & .mobile{
            display:none ;
        }

        & .desktop{

            display:flex;
            width:100% ;
            height:100% ;
            justify-content:space-around;
            align-items:center;
            margin-top:-10px ;
        }

        & .desktop > .map{

            width:65%;
            height:94%;
            border-radius:8px;
            box-shadow:0px 0px 8px rgba(0,0,0,0.3) ;
        }

        & .desktop > .search-billboard{

            width:25%;
            height:94%;
            background: ${({theme})=>theme.colors.white};
            border-radius:8px;
            overflow-y:scroll ;
            padding-bottom:10px ;
        }

        & .desktop > .search-billboard > .choose-btn-place{

            height:290px;
            overflow-y:scroll ;
        }

    }

`;

export const SearchBillboard = (): JSX.Element =>{

    const MapElement =useRef<Array<HTMLDivElement | any>>([]);
    const SearchElement = useRef(null);
    const BtnsPlace = useRef<Array<HTMLDivElement | null>>([]);
    const BtnsPlaceDesktop = useRef<Array<HTMLDivElement | null>>([]);


    const [search, setSearch] = useState<boolean>(false);
    const [textBtnBillboard, setTextBtnBillboard] = useState<string>('Abrir buscador de vallas');
    const [places, setPlaces] = useState<any[] | null>(null);
    const [selectPlace, setSelectPlace] = useState<string | null>(null);
    const [allPlaces, setAllPlaces] = useState<any[] | null>(null);
    const [directionPlaces, setDirectionPlaces] = useState<any[] | undefined>(undefined);




    useEffect(()=>{

        const data = new DataApi(config.api.key,config.domain);

        data.GetBillboards().then(response=>{

            const configMap = {
                center:{

                    lat:6.9974621542397015,
                    lng:-73.05063439298283,

                },
                zoom:10
            }

            MapState(configMap,MapElement,response.data.data);

        }).catch(error=>console.log(error));


        data.GetPlaces().then(response=> setPlaces(response.data.data))
            .catch(error=>console.log(error));


        data.GetPlaceBillboards().then(response=> setAllPlaces(response.data.data))
            .catch(error=>console.log(error));

        return()=>{

            setPlaces(null);
            setAllPlaces(null);

        }

    },[MapElement]);


    const MapState = (configMap:any, MapElement:any,marker:any[]|null):void =>{

        if(MapElement.current !== null){

            for(let i=0; i < MapElement.current.length;i++){

                const Map = new Maps(config.maps.apiKey,MapElement.current[i],configMap);
                Map.RenderMap();

                marker !== null  && marker.map((item:any,index:number)=>{

                    type marker ={
                        position:{
                            lng:number,
                            lat:number
                        },
                        icon:string
                    }
                    const Marker:marker = {
                        position:{
                            lng:parseFloat(item.longitude),
                            lat:parseFloat(item.latitude)
                        },
                        icon:'images/marker-map.png'
                    }

                    Map.AddMarker(Marker,item);

                });

            }

        }
    }

    const ToogleSearch = (element:HTMLElement | null ):void =>{

        element === null && alert('Element can not be null at search-billboard.tsx ToogleSearch function');

        if( element !== null){

            search === true ? setSearch(false): setSearch(true);

            textBtnBillboard === 'Abrir buscador de vallas'
            ? setTextBtnBillboard('Buscar vallas')
            : setTextBtnBillboard('Abrir buscador de vallas');
        }


        if(element !== null && search === false){

            element.style.bottom = '-850px';
            element.classList.remove('d-none');
            element.style.animationName = 'open-search';
            setTimeout(()=>{
                element.style.bottom = '49px';
            },850)

        }

        if(element !== null && search === true){

            element.style.animationName = 'close-search';
            setTimeout(()=>{
                element.style.bottom = '-850px';
                element.classList.add('d-none');
            },850)

        }


    }


    const GetBillboardPlace = (place:any,btnPlace:HTMLElement,position:number):void =>{

        //mobile
        btnPlace.classList.remove('btn-mygray');
        btnPlace.classList.add('btn-primary');


        for(let i=0; i<BtnsPlace.current.length;i++){

            if( i !== position){

                BtnsPlace.current[i]?.classList.remove('btn-primary');
                BtnsPlace.current[i]?.classList.add('btn-mygray');

                //desktop
                BtnsPlaceDesktop.current[i]?.classList.remove('btn-primary');
                BtnsPlaceDesktop.current[i]?.classList.add('btn-mygray');
            }
        }


        setSelectPlace(place.name);
        RenderOption(place);

    }

    const RenderOption = (place:any):void=>{


        const placeFiltered:any | null = allPlaces !== null
        ?
        allPlaces?.filter((item:any,index:number)=>place.id_place === item.id_place  && item)
        :
        undefined;

        setDirectionPlaces(placeFiltered);

        const configMap = {
            center:{

                lat: (placeFiltered !== null && placeFiltered !== undefined) && parseFloat(placeFiltered[0].latitude),
                lng:(placeFiltered !== null && placeFiltered !== undefined) && parseFloat(placeFiltered[0].longitude),

            },
            zoom:12
        }
        MapState(configMap,MapElement,placeFiltered);
    }

    const ViwAllBillboard = (element:HTMLElement | null): void =>{

        const configMap = {
            center:{

                lat:6.9974621542397015,
                lng:-73.05063439298283,

            },
            zoom:10
        }
        MapState(configMap,MapElement,allPlaces);
        ToogleSearch(element);

        for(let i=0; i< BtnsPlace.current.length;i++){

            BtnsPlace.current[i]?.classList.remove('btn-primary');
            BtnsPlace.current[i]?.classList.add('btn-mygray');

            //desktop
            BtnsPlaceDesktop.current[i]?.classList.remove('btn-primary');
            BtnsPlaceDesktop.current[i]?.classList.add('btn-mygray');
        }

        setDirectionPlaces(undefined);
        setSelectPlace('------');

    }

    const JustDirection = (element:any):void =>{

        const value = element.target.value;

        if(value.trim() !== 'Primero elige un lugar' && value.trim() !== 'Elige una opción'){

            const lng = parseFloat(element.target.selectedOptions[0].attributes['data-longitude'].value);
            const lat = parseFloat(element.target.selectedOptions[0].attributes['data-latitude'].value);

            const mapOptions = {
                center:{

                    lat:lat,
                    lng:lng
                },
                zoom:10
            }

            const MarkerPlace = allPlaces?.filter((item:any,index:number)=>item.address === value && item );

            MarkerPlace !== undefined && MapState(mapOptions,MapElement,MarkerPlace);
        }
    }

    return<SearchBillboardStyles>

        <div className="mobile">
            <span onClick={()=>ToogleSearch(SearchElement.current)} className="btn-search">
                <Btn1 width="100%" height="50px" text={textBtnBillboard}/>
            </span>

            <div className="title-search d-flex justify-content-center p-3 align-items-center">
                <b>Buscador de vallas</b>
            </div>
            <div ref={element=>MapElement.current[0] = element} id="google-maps" className="map"></div>

            <div ref={SearchElement} className="search-options d-none">
                <div className="close-search d-flex justify-content-end algin-items-center">

                    <span onClick={()=>ToogleSearch(SearchElement.current)} className="icon-close">
                        <FontAwesomeIcon icon={faTimes} />
                    </span>

                </div>
                <div className="choose-btn-place ">

                    <div className="d-grid gap-4">
                        <b className="d-gird text-gray">Elige una lugar: </b>
                        {
                            places === null
                            ?
                            <div style={{width:'100%'}} className="d-flex justify-content-center align-items-center">
                                <div style={{width:'150px',height:'150px'}} className="spinner-grow text-secondary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            :
                            places?.map((item:any,index:number)=>(

                                <div ref={element=>BtnsPlace.current[index] = element }
                                     onClick={(e)=>GetBillboardPlace(item,e.currentTarget,index)}
                                     key={index} className="btn btn-mygray text-white"
                                >
                                    { item.name}
                                </div>
                            ))
                        }
                        <div onClick={()=>ViwAllBillboard(SearchElement.current)} className="btn btn-secondary"> Ver todas las vallas</div>
                    </div>

                </div>
                <hr></hr>
                <div className="choose-directions-place">
                    <div className="d-grid gap-2">
                        <b className="text-gray">Vallas disponibles en:</b>
                        <b className="text-primary"> { selectPlace === null ? '-------' : selectPlace } </b>
                        <select onChange={(e)=>JustDirection(e)} className="select-direction">
                                <option value='Elige una opción'>Elige una opción</option>
                            {
                                directionPlaces === undefined
                                ?
                                <option value='Primero elige un lugar'>Primero elige un lugar</option>
                                :
                                directionPlaces.map((item:any,index:number)=>
                                <option data-latitude={item.latitude} data-longitude={item.longitude} key={index} value={item.address}>{item.address}</option>)
                            }
                        </select>
                    </div>
                </div>

            </div>

        </div>

        <div className="desktop">

            <div className="search-billboard">

                <div className="d-flex justify-content-center align-items-center m-2">
                    <b style={{fontSize:'18px'}}>Buscador de vallas</b>
                </div>

                <div className="choose-btn-place ">

                    <div className="d-grid gap-2 m-4">
                        <b className="d-gird text-gray">Elige una lugar: </b>
                        {
                            places === null
                            ?
                            <div style={{width:'100%'}} className="d-flex justify-content-center align-items-center">
                                <div style={{width:'150px',height:'150px'}} className="spinner-grow text-secondary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            :
                            places?.map((item:any,index:number)=>(

                                <div ref={element=>BtnsPlaceDesktop.current[index] = element }
                                    onClick={(e)=>GetBillboardPlace(item,e.currentTarget,index)}
                                    key={index} className="btn btn-mygray text-white"
                                >
                                    { item.name}
                                </div>
                            ))
                        }
                        <div onClick={()=>ViwAllBillboard(SearchElement.current)} className="btn btn-secondary"> Ver todas las vallas</div>
                    </div>

                </div>
                <hr></hr>
                <div className="valla-disponible  m-4">

                    <div className="d-grid gap-2">
                        <b className="text-gray">Vallas disponibles en:</b>
                        <b className="text-primary"> { selectPlace === null ? '-------' : selectPlace } </b>
                        <select onChange={(e)=>JustDirection(e)} className="select-direction">
                                <option value='Elige una opción'>Elige una opción</option>
                            {
                                directionPlaces === undefined
                                ?
                                <option value='Primero elige un lugar'>Primero elige un lugar</option>
                                :
                                directionPlaces.map((item:any,index:number)=>
                                <option  data-latitude={item.latitude} data-longitude={item.longitude} key={index} value={item.address}>
                                    {item.address}
                                </option>)
                            }
                        </select>
                    </div>

                </div>


            </div>

            <div ref={element=>MapElement.current[1] = element} className="map" id="google-maps-2"></div>
        </div>

    </SearchBillboardStyles>

}
