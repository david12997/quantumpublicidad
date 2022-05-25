import React, { useEffect } from "react";
import { Footer } from "../components/common/footer";
import { Cases } from "../components/costumer/cases";
import { HeaderCostumer } from "../components/costumer/header";
import { ViewStorie } from "../components/home/view-storie";


export const CostumerPage = (): JSX.Element =>{

    const ref = React.createRef();

    useEffect(()=>{

        window.scrollTo(0,0);
        document.title = 'Casos';


    },[]);

    return<>
        <ViewStorie ref={ref}></ViewStorie>
        <HeaderCostumer></HeaderCostumer>
        <Cases modal={ref}></Cases>
        <Footer></Footer>
    </>
}
