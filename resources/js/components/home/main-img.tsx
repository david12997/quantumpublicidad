import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const MainImgStyles = styled.div`

    grid-area:image;
    width:100%;
    margin-bottom:20px ;
    position:relative ;

    & .desktop{

        display:none;
    }

    & .mobile{

        display:block;
    }

    & .select{

        position:absolute;
        width:100%;
        display:flex ;
        justify-content:center ;
        align-items:center ;
        padding-top:15px ;
    }

    @media(min-width:800px){

        margin-top:5px;

        & .desktop{

            display:block;
        }

        & .mobile{

            display:none;
        }

    }

`;


export const MainImg = ():JSX.Element=>{

    const Navigate = useNavigate();


    return<MainImgStyles>

    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">

            <div className="carousel-item active">

                <img onClick={()=> Navigate('/vallas')} className="desktop"  width="100%"
                    src="images/img-main-1.png"
                    alt="vallas publicitarias hasta 20% off ubicadas en lugares estrategicos"
                />
                <img onClick={()=>Navigate('/vallas')} className="mobile"  width="100%"
                    src="images/img-main-mobile-1.png"
                    alt="vallas publicitarias hasta 20% off ubicadas en lugares estrategicos"
                />

            </div>

            <div className="carousel-item ">

                <img  className="desktop"  width="100%"
                    src="images/img-main-2.png"
                    alt="vallas publicitarias hasta 20% off ubicadas en lugares estrategicos"
                />
                <img  className="mobile"  width="100%"
                    src="images/img-main-mobile-2.png"
                    alt="vallas publicitarias hasta 20% off ubicadas en lugares estrategicos"
                />

            </div>
            <div className="carousel-item ">

                <img  className="desktop"  width="100%"
                    src="images/img-main-3.png"
                    alt="vallas publicitarias hasta 20% off ubicadas en lugares estrategicos"
                />
                <img  className="mobile"  width="100%"
                    src="images/img-main-mobile-3.png"
                    alt="vallas publicitarias hasta 20% off ubicadas en lugares estrategicos"
                />

            </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>


    </MainImgStyles>
}
