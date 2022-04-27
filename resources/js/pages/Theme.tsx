import React, {useState, useEffect} from "react";
import styled , {css} from "styled-components";

import { Nav } from "../components/common/nav";
import { NavMobile } from "../components/common/nav-mobile";

export const theme = {

    colors:{

        red:'#AC0F0C',
        purple:'#4A0083',
        yellow:'#FFB900',
        gray:'#EBEBEB',
        orange:'#CB4F08',
        white:'white',
        black:'black'

    },
    areas_home:`
            "navbar navbar"
            "image image"
            "about about"
            "cases cases"
            "services services"
            "contact contact"
            "footer footer"
    `,
    areas_billboard:`
            "navbar navbar"
            "search search"

    `,
}


interface PropsPageStyle{

    page:string
}
const PageStyles = styled.div<PropsPageStyle>`

    width:100%;
    overflow-x:hidden;
    display: grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:100px;

    ${(props)=>{

        switch(props.page){

            case 'home': return css`

                grid-template-areas:${ ({theme})=>theme.areas_home};
            `;
            case 'billboard': return css`
                grid-template-areas:${ ({theme})=>theme.areas_billboard};
                overflow-y:hidden ;

            `;
        }
    }}




`;

type PropsPage = {

    page:string,
    children:any
}
export const Page = (props:PropsPage):JSX.Element=>{

    const [navMobile, setNavMobile] = useState<boolean>(false);
    const ref = React.createRef();

    useEffect(()=>{

        return()=>{

            setNavMobile(false);
        }
    },[])


    return<PageStyles page={props.page}>

        <NavMobile page={props.page} ref={ref} status={navMobile} setNavMobile={setNavMobile}></NavMobile>
        <Nav page={props.page} screenMobile={ref} status={navMobile} setNavMobile={setNavMobile}></Nav>
        {props.children}
    </PageStyles>
}
