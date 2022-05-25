import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { config } from "../../env";
import { Btn1 } from "./btn1";
import { ToggleNavMobile } from "./nav-mobile";

const NavStyle = styled.div`

    grid-area:navbar;
    width:100% ;
    background:${({theme})=>theme.colors.white};
    box-shadow:0px 4px 4px rgba(0,0,0,0.2) ;
    height:70px;
    position:relative;
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    position:fixed ;
    z-index:999;

    & .logo{

        width:170px;
        margin-top:-9px ;
        cursor: pointer;


    }

    & .mobile{
        display:flex ;
        margin-right:24px ;
        font-size:35px;
        cursor: pointer;
    }

    & .desktop{
        display:none ;
    }


    @media(min-width:800px){

        height:80px;

        & .logo{

            width: 200px;
        }

        & .mobile{
            display:none ;
        }

        & .desktop{

            width:690px ;
            display:flex;
            justify-content: space-around ;
            align-items:center ;

        }
        & .desktop > .option-nav{

            font-size:17px;
            color:gray;
            cursor:pointer ;
        }
    }


`;

type PropsNav = {

    status:boolean,
    setNavMobile:any,
    screenMobile:any,
    page:string
}

export const Nav = (props:PropsNav):JSX.Element =>{

    const Navigate = useNavigate();

    return<NavStyle>

        <div className="logo">
            <img onClick={()=>Navigate('/')} width="100%" src={config.domain+"/images/logo-name-2.png"} alt="logo quantum publicidad" />
        </div>

        <div className="mobile">

            <div onClick={()=>ToggleNavMobile(props.screenMobile,props.setNavMobile,props.status)} className="icon-bars">
                <FontAwesomeIcon icon={faBars} />
            </div>

        </div>

        <div className="desktop">
            <div onClick={()=>Navigate('/')} className={props.page === 'home' ? 'text-dark option-nav' : 'option-nav'}>
                <b>Inicio</b>
            </div>
            <div  onClick={()=>Navigate('/servicios')} className={props.page === 'service' ? 'text-dark option-nav' : 'option-nav'}>
                <b>Servicios</b>
            </div>
            <div  onClick={()=>Navigate('/casos')} className={props.page === 'costumer' ? 'text-dark option-nav' : 'option-nav'}>
                <b>Casos</b>
            </div>
            <div  onClick={()=>Navigate('/contacto')} className={props.page === 'contact' ? 'text-dark option-nav' : 'option-nav'} >
                <b>Contacto</b>
            </div>
            <span onClick={()=>Navigate('/vallas')}>
                <Btn1 text="VALLAS PUBLICITARIAS" width='250px' height='50px'/>
            </span>

        </div>
    </NavStyle>
}
