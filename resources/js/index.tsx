import React from 'react';
import ReactDOM from 'react-dom';

import  { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import BillboardPage from './pages/BillboardPage';

import HomePage from './pages/HomePage';
import { Page, theme } from './pages/Theme';

function App() {
    return<>
       <BrowserRouter>

            <ThemeProvider theme={theme}>

                <Routes>
                    <Route path='/' element={ /**/ <Page page='home'> <HomePage/> </Page> /**/}></Route>
                    <Route path='/vallas' element={ /**/ <Page page='billboard'> <BillboardPage/> </Page> /**/}></Route>
                </Routes>

            </ThemeProvider>


       </BrowserRouter>
    </>;
}

export default App;


if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
