import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Btn1 } from "./btn1";

interface PropsStyle{

    status:any,
    ref:any
}

const NavMobileStyles = styled.div<PropsStyle>`

    display:${(props)=>props.status ? 'block' : 'none'} ;
    position:fixed ;
    width:100vw ;
    height:100vh;
    z-index:99999;
    background-color:${({theme})=>theme.colors.white};
    left:800px;

    & .nav-mobile {
        width:100% ;
        display:flex ;
        justify-content:flex-end ;
        align-items:center ;
    }
    & .nav-mobile > .close{

        font-size:29px;
        color:${({theme})=>theme.colors.purple} ;
        margin-right:43px ;
        margin-top:18px ;
    }

    & .nav-mobile > .close > .icon-close{

            width:100% ;
            height:70px ;
    }

    & .btns{

        width: 80%;
        margin-left:10%;
        margin-top:30px ;

    }
    @keyframes openmenu {

        0%{left:800px}
        100%{left:0px}

    }

    @keyframes closemenu {

        0%{left:0px}
        100%{left:800px}

    }

    @media(min-width:800px){

        display:none ;
    }

`;

type PropsNavMobile = {

    status:boolean,
    setNavMobile:any,
    ref:any,
    page:string
}

export const NavMobile = React.forwardRef((props:PropsNavMobile,ref) :JSX.Element =>{

    const Navigate = useNavigate();

    return<NavMobileStyles ref={ref} status={props.status}>

        <div className="nav-mobile">
            <div className="close">
                <span onClick={()=>ToggleNavMobile(ref,props.setNavMobile,props.status)} className="icon-close">
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </div>
        </div>
        <div className="btns d-grid gap-2">
            <div onClick={()=>{ToggleNavMobile(ref,props.setNavMobile,props.status);Navigate('/')}}
                className={props.page === 'home'? "btn btn-secondary fs-4 mb-4" :"btn btn-primary fs-4 mb-4"}
            >
                <b>Inicio</b>
            </div>

            <div onClick={()=>{ToggleNavMobile(ref,props.setNavMobile,props.status);Navigate('/servicios')}}
                className={props.page === 'service'? "btn btn-secondary fs-4 mb-4" :"btn btn-primary fs-4 mb-4"}
            >
                <b>Servicios</b>
            </div>
            <div onClick={()=>{ToggleNavMobile(ref,props.setNavMobile,props.status);Navigate('/casos')}}
                className={props.page === 'costumer'? "btn btn-secondary fs-4 mb-4" :"btn btn-primary fs-4 mb-4"}
            >
                <b>Casos</b>
            </div>
            <div onClick={()=>{ToggleNavMobile(ref,props.setNavMobile,props.status);Navigate('/contacto')}}
                className={props.page === 'contact'? "btn btn-secondary fs-4 mb-4" :"btn btn-primary fs-4 mb-4"}
            >
                <b>Contacto</b>
            </div>
           <span onClick={()=>{ToggleNavMobile(ref,props.setNavMobile,props.status);Navigate('/vallas')}}>
               <Btn1  text="VALLAS PUBLICITARIAS" width="100%" height="47px"></Btn1>
            </span>
        </div>

    </NavMobileStyles>
});


export const ToggleNavMobile = (element:any, setNavMobile:any, status:boolean)=>{

    const screen = element.current;

    if(status === true){

        screen.style.animationName = "closemenu";
        screen.style.animationDuration ="1s";

        setTimeout(()=>{
            screen.style.left="800px";
            setNavMobile(false);
        },600);

    }else{

        setNavMobile(true);
        screen.style.animationName = "openmenu";
        screen.style.animationDuration ="1s";

        setTimeout(()=>screen.style.left="0px",900)
    }
}
