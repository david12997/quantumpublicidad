import React, { useEffect } from 'react';
import { Footer } from '../components/common/footer';
import { Header } from '../components/services/header';
import { Services } from '../components/services/services';

export const ServicePage = ():JSX.Element =>{

    useEffect(()=>{
        window.scrollTo(0,0);
        document.title = 'Servicios';

    },[])
    return<>
        <Header></Header>
        <Services></Services>
        <Footer></Footer>
    </>
}
