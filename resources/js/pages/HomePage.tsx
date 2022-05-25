import React, { useEffect } from 'react';
import { Footer } from '../components/common/footer';
import { About } from '../components/home/about';
import { Contact } from '../components/home/contact';
import { MainImg } from '../components/home/main-img';
import { Ofice } from '../components/home/ofice';
import { Services } from '../components/home/services';
import { SuccessStories } from '../components/home/success-stories';
import { ViewStorie } from '../components/home/view-storie';



const HomePage = ():JSX.Element => {

    const ref = React.createRef();

    useEffect(()=>{
        window.scrollTo(0,0);
        document.title = 'Inicio';


    },[])

    return<>
    <ViewStorie ref={ref}></ViewStorie>
    <MainImg></MainImg>
    <About></About>
    <SuccessStories modal={ref}></SuccessStories>
    <Services></Services>
    <Ofice></Ofice>
    <Contact></Contact>
    <Footer></Footer>
    </>
}

export default HomePage;

