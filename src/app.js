import ReactDOM from 'react-dom';
import React from 'react';
import styled from 'styled-components'

//Importando o css
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import foto from "../src/Assets/avatar1.png"
import foto2 from "../src/Assets/react2.png"

export const App=()=>{
    let textHome1="Afcionado por tecnologia e inovação sempre busco soluções criativas e eficientes. Com constância e persistência nenhum problema é grande demais."
    let textHome2="Atualmente trabalho com desenvolvimento web front-end utilizando javascript, HTML, CSS e frameworks como ReactJS."

    return(
        <React.Fragment>
                <BrowserRouter>
                    <Header/>
                        <Routes>
                            <Route path='/' element={<Home text={textHome1}  foto={foto} title="Sobre"/>}/>
                            
                        </Routes>
                    <Home row={true} text={textHome2} foto={foto2} title="Tecnologias" />
                </BrowserRouter>
        </React.Fragment>
        
        
    )
}



export default App