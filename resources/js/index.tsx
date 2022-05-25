import React from 'react';
import ReactDOM from 'react-dom';

import  { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import BillboardPage from './pages/BillboardPage';
import { CostumerPage } from './pages/Costumer';
import { ContactPage } from './pages/ContactPage';

import HomePage from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { Page, theme } from './pages/Theme';

function App() {

    return<>
       <BrowserRouter>

            <ThemeProvider theme={theme}>

                <Routes>
                    <Route path='/' element={ /**/ <Page page='home'> <HomePage/> </Page> /**/}></Route>

                    <Route path='/vallas' element={ /**/ <Page page='billboard'> <BillboardPage/> </Page> /**/}></Route>

                    <Route path='/servicios' element={ /**/ <Page page='service'> <ServicePage/> </Page> /**/}></Route>

                    <Route path='/casos' element={ /**/ <Page page='costumer'> <CostumerPage/> </Page> /**/}></Route>

                    <Route path='/contacto' element={ /**/ <Page page='contact'> <ContactPage/> </Page> /**/}></Route>
                </Routes>

            </ThemeProvider>


       </BrowserRouter>
    </>;
}

export default App;


if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
