import React from 'react';
import { Footer } from '../components/common/footer';
import { About } from '../components/home/about';
import { Contact } from '../components/home/contact';
import { MainImg } from '../components/home/main-img';
import { Services } from '../components/home/services';
import { SuccessStories } from '../components/home/success-stories';


const HomePage = ():JSX.Element => {


    return<>
    <MainImg></MainImg>
    <About></About>
    <SuccessStories></SuccessStories>
    <Services></Services>
    <Contact></Contact>
    <Footer></Footer>
    </>
}

export default HomePage;

