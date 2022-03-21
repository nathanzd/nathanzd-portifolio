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
import gitfoto from "../src/Assets/git.jpg"
import Projetos from './Components/Projetos/Projetos';
import projectImg from '../src/Assets/dark-mode.jpg'
import projectImg2 from '../src/Assets/spotify.jpg'
import projectImg3 from '../src/Assets/print.png'
import Contato from './Components/Contato/Contato';
import Main from './Components/Main/Main';



export const App=()=>{
    let textHome1="Dedicado a tecnologia e inovação sempre busco soluções criativas e eficientes. Com constância e persistência nenhum desafio é grande demais."
    let textHome2="Atualmente trabalho com desenvolvimento web front-end utilizando Javascript, HTML, CSS e frameworks como ReactJS."
    let textHomeGit="Entende de codigo ? Visite minha pagina no Github e conheça alguns de meus repositorios"

    let textProjetos1='Dashboard para ecommerce com sales analytics, menu responsivo e light/dark mode. Desenvolvido utilizando HTML, CSS e Javascript Puro'
    let textProjetos2='UI Clone do spotify com player funcional e responsivo. O principal desafio foi desenvolver um player funcional utilizando apenas HTML, CSS e Javascript'
    let textProjetos3='Neste projeto foi utilizado ReactJS para gerar estados reativos, todas as imagens de filmes, descrições, pontuação e etc foram fornecidos pela API do Themoviedb.org.'
    
    
    return(
        <React.Fragment>
                <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Main/>}/>
                        </Routes>
                </BrowserRouter>
        </React.Fragment>
        
        
    )
}



export default App