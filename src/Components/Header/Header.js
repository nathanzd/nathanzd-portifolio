import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../Assets/logo.png'

const Header = () => {
    
    const[scrollY,setScrollY]=React.useState(window.scrollY)
  
  return (
    <header>
        <div className={`${styles.header_container}`}>
            <div className={`${styles.logo}`}>
                <div className={`${styles.logo_img}`}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={`${styles.nome}`}>
                    <p className={`${styles.nome_text}`}>Nathan <span style={{color:'black'}}>Ferreira</span></p>
                    <p className={`${styles.nome_small}`}>Front-End Developer</p>
                </div>
            </div>
            <div className={`${styles.menu}`}>
                <a className={`${styles.menu_btn}`} href="#sobre">Sobre</a>
                <a className={`${styles.menu_btn}`} href="#projetos" >Projetos</a>
                <a className={`${styles.menu_btn}`} href="#contato" >Contato</a>
            </div>
        </div>
    </header>
  )
}

export default Header