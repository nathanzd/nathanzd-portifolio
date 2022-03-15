import ReactDOM from 'react-dom';
import React from 'react';
import styled from 'styled-components'

//Importando o css
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

export const App=()=>{

    return(
        <React.Fragment>
                <BrowserRouter>
                    <Header/>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                        </Routes>
                        
                </BrowserRouter>
        </React.Fragment>
        
        
    )
}



export default App