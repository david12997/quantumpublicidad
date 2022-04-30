import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { config } from "../../env";

interface PropsViesStorieStyles{

    ref:any
}
const ViewStorieStyles = styled.div<PropsViesStorieStyles>`

    position: fixed;
    z-index:99999;
    width:100vw;
    height:100vh;
    background-color:rgba(0,0,0,0.5);
    display:flex;
    justify-content:center ;
    align-items:center ;

    & .content-storie{

        width:90%;
        height:80%;
        background-color:${({theme})=>theme.colors.white} ;
        overflow-x:hidden ;
        overflow-y:scroll ;
        border-radius:8px ;
        font-size:17px ;
    }

    & .content-storie > .storie{

        width:90%;
        margin-left:5% ;
    }

    & .content-storie > .storie > .container-info > .img-storie{

        width:100%;
    }

    @media(min-width:800px){

        & .content-storie{

            width:60%;
            height:75%;
            border-radius:10px ;

        }

         & .content-storie > .storie > .container-info > .img-storie{

            width:530px;
        }
    }


`;

export const ViewStorie = React.forwardRef((props,ref)=>{


    return<ViewStorieStyles className="d-none" ref={ref}>

        <div className="content-storie">

            <div className="d-flex justify-content-end align-items-center ">
                <span  style={{fontSize:'20px',cursor:'pointer'}} className="text-secondary icon-close m-2">
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </div>

            <div className="storie">

                <div className="d-flex justify-content-center align-items-center">
                    <b>Title case</b>
                </div>
                <hr></hr>
                <div className="m-2 container-info">
                    <div className="img-storie">
                        <img width="100%" src={config.domain+"/images/storie-1.png"}/>
                    </div>
                    <div className="text-mygray mt-4 mb-3">
                        <b>text here</b>
                    </div>

                </div>

            </div>

        </div>
    </ViewStorieStyles>

})
