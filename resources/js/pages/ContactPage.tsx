import React, { useEffect } from "react";
import { Footer } from "../components/common/footer";
import { Header } from "../components/contact/header";
import { Message } from "../components/contact/message";
import { Contact } from "../components/home/contact";

export const ContactPage = (): JSX.Element =>{

    useEffect(()=>{

        window.scrollTo(0,0);
        document.title = 'Contacto';
    },[]);

    return<>
    <Header></Header>
    <Message></Message>
    <Contact></Contact>
    <Footer></Footer>
    </>
}
