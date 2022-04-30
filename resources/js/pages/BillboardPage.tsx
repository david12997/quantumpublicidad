import React, { useEffect } from 'react';
import { SearchBillboard } from '../components/billboard/search-billboard';

const BillboardPage = () => {

    useEffect(()=>{

        window.scrollTo(0,0);
        document.title = 'Vallas'

    },[]);

    return<>
        <SearchBillboard></SearchBillboard>

    </>;
}

export default BillboardPage;

