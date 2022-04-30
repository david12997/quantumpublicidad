import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { config } from "../../env";
import { StoreMessage } from "../../services/StoreMessage";
import { Btn1 } from "../common/btn1";

const MessageStyles = styled.div`

    grid-area:form;
    width:90%;
    margin-left:5% ;
    color:${ ({theme})=>theme.colors.gray_black} ;
    font-size:18px ;

    & .title{

        width:100%;
        font-size:20px ;
        color:${ ({theme})=>theme.colors.gray_black} ;
        margin-bottom:6px ;
    }

    & .my-container-cards{

        width:100%;
        display:flex ;
        justify-content:space-between ;
        flex-wrap:wrap ;
    }

    & .my-container-cards > .my-card-banner{

        width:100%;
        background-color:${ ({theme})=>theme.colors.white} ;
        border-radius :8px ;
        padding:20px ;

    }

    & .my-container-cards > .my-card-form{

        width:100%;
        background-color:${ ({theme})=>theme.colors.white} ;
        border-radius :8px ;
        padding:20px ;
        margin-top:25px ;

    }

    & input{

        background-color:white ;
        box-shadow:0px 0px 7px rgba(0,0,0,0.3);
        width:99% ;
        border-radius:5px;
        margin:5px ;
        height:40px ;

    }

    & input::placeholder{

        font-size:16px ;
        color: #bcbcbc;
    }

    @media(min-width:800px){

        width:80% ;
        margin-left:10%;

        & .my-container-cards > .my-card-banner{

            width:60%;
            padding:30px ;

        }

        & .my-container-cards > .my-card-form{

            width:35%;
            padding:30px ;
            margin-top:0px;
        }

    }

`;

export const Message = ():JSX.Element =>{

    const form = useRef<HTMLFormElement | null>(null);
    const loader = useRef<HTMLDivElement | null>(null);
    const [title, setTitle] = useState<string>('Déjanos tu mensaje aquí');

    useEffect(()=>{
        return()=>{
            setTitle('Déjanos tu mensaje aquí');
        }
    },[]);

    const SendMessage = (e:any):void =>{

        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const message = e.target[2].value;

        const DataMessage = new FormData();
        DataMessage.append('name_costumer',name);
        DataMessage.append('email_costumer',email);
        DataMessage.append('message_costumer',message);

        form.current?.classList.add('d-none');
        loader.current?.classList.remove('d-none');
        loader.current?.classList.add('d-flex');
        setTitle('Enviando mensaje ...');

        StoreMessage(DataMessage).then(res=>{

            if(res.status == 200 && res.data.response === 'insert success'){

                e.target[0].value = "";
                e.target[1].value = "";
                e.target[2].value = "";
                form.current?.classList.remove('d-none');
                loader.current?.classList.remove('d-flex');
                loader.current?.classList.add('d-none');
                setTitle('Mensaje enviado');
                setTimeout(()=>setTitle('Déjanos tu mensaje aquí'),1800);


            }else{

                form.current?.classList.remove('d-none');
                loader.current?.classList.remove('d-flex');
                loader.current?.classList.add('d-none');
                setTitle('Upss algio anda mal intentalo de nuevo');
            }
        })
        .catch((error:any)=>console.log(error));
    }

    return<MessageStyles>
        <div className="title">
            <b>¿NECESITAS ATENCIÓN PERSONALIZADA?</b>
        </div>
        <div className="my-container-cards">
            <div className="my-card-banner">
                <p>
                    ¿Necesitas <span className="text-primary">atención personalizada</span>? Si deseas
                    que nos contactemos contigo <span className="text-primary">déjanos un mensaje </span>,
                    asi podremos ayudarte y adaptarnos a tus necesidades;
                    en quantum publicidad estamos para hacer <span className="text-primary">crecer</span> tus negocios e ideas
                </p>
                <p style={{width:"100%"}} className="d-flex justify-content-center align-items-center">
                    <b style={{fontSize:"20px"}}><FontAwesomeIcon style={{fontSize:"25px"}} icon={faWhatsapp}/> 320 123 4567 - 320 123 4567</b>
                </p>
                <br></br>
                <div className="img">
                    <img width="100%" src={ config.domain+"/images/contact-img.png"}/>
                </div>

            </div>

            <div className="my-card-form">
                <p style={{width:"100%"}} className="d-flex justify-content-center align-items-center">
                    <b className="text-primary"> {title} </b>
                </p>
                <div ref={loader} style={{width:'100%'}} className="d-none justify-content-center align-items-center">
                        <div style={{width:'250px',height:'250px'}} className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                <form ref={form} onSubmit={(e)=>SendMessage(e)}>

                    <label>Nombre:</label>
                    <br></br>
                    <input type="text" placeholder="   Ej:   Juan Díaz" required/>

                    <br></br>
                    <br></br>

                    <label>Correo electronico:</label>
                    <br></br>
                    <input type="email" placeholder="   Ej:   email@email.com" required/>

                    <br></br>
                    <br></br>

                    <label>Mensaje:</label>
                    <br></br>
                    <input type="text" placeholder="   Ej:   Quiero saber mas sobre las vallas..." required/>

                    <br></br>
                    <br></br>
                    <button style={{width:"100%",background:"transparent"}} type="submit">
                        <Btn1 width="100%" height="50px" text="ENVIAR MENSAJE"></Btn1>
                    </button>


                </form>
            </div>
        </div>
    </MessageStyles>
}
