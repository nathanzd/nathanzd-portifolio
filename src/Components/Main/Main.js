import React from 'react'

import Header from '../Header/Header';
import Home from '../Home/Home';
import foto from "../../Assets/avatar1.png"
import foto2 from "../../Assets/react2.png"
import gitfoto from "../../Assets/git.jpg"
import Projetos from '../Projetos/Projetos';
import projectImg from '../../Assets/dark-mode.jpg'
import projectImg2 from '../../Assets/spotify.jpg'
import projectImg3 from '../../Assets/print.png'
import Contato from '../Contato/Contato'



const Main = () => {

    let textHome1="Dedicado a tecnologia e inovação sempre busco soluções criativas e eficientes. Com constância e persistência nenhum desafio é grande demais."
    let textHome2="Atualmente trabalho com desenvolvimento web front-end utilizando Javascript, HTML, CSS e frameworks como ReactJS."
    let textHomeGit="Entende de codigo ? Visite minha pagina no Github e conheça alguns de meus repositorios"

    let textProjetos1='Dashboard para ecommerce com sales analytics, menu responsivo e light/dark mode. Desenvolvido utilizando HTML, CSS e Javascript Puro'
    let textProjetos2='UI Clone do spotify com player funcional e responsivo. O principal desafio foi desenvolver um player funcional utilizando apenas HTML, CSS e Javascript'
    let textProjetos3='Neste projeto foi utilizado ReactJS para gerar estados reativos, todas as imagens de filmes, descrições, pontuação e etc foram fornecidos pela API do Themoviedb.org.'
    


  return (
    <React.Fragment>
        <Header/>
        <Home text={textHome1}  foto={foto} title="Sobre"/>            
        <Home row={true} text={textHome2} foto={foto2} title="Tecnologias" />
        <Home  text={textHomeGit} foto={gitfoto} title="Visite meu GitHub" link="https://github.com/nathanzd" />
        <Projetos row={true} img={projectImg} text={textProjetos1} title="Projetos" project="Dashboard" link="https://nathanzd.github.io/admin-painel/"/>
        <Projetos row={false} img={projectImg2} text={textProjetos2}  project="Spotify" link="https://nathanzd.github.io/music-app-clone/"/>
        <Projetos row={true} img={projectImg3} text={textProjetos3}  project="App de Streaming" link=""/>
        <Contato/>
    </React.Fragment>
  )
}

export default Main