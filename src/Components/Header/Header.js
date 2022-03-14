import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../Assets/logo.png'

const Header = () => {
  return (
    <header>
        <div className={`${styles.header_container}`}>
            <div className={`${styles.logo}`}>
                <div className={`${styles.logo_img}`}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={`${styles.nome}`}>
                    <p className={`${styles.nome_text}`}>Nathan <span style={{color:'#009dff'}}>Ferreira</span></p>
                </div>
            </div>
            <div className={`${styles.menu}`}>
                <NavLink className={`${styles.menu_btn}`} to="/">Sobre</NavLink>
                <NavLink className={`${styles.menu_btn}`} to="/">Projetos</NavLink>
                <NavLink className={`${styles.menu_btn}`} to="/">Curriculo</NavLink>
                <NavLink className={`${styles.menu_btn}`} to="/">Contato</NavLink>
            </div>
        </div>
    </header>
  )
}

export default Header