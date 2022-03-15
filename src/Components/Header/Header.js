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
                    <p className={`${styles.nome_text}`}>Nathan <span style={{color:'black'}}>Ferreira</span></p>
                    <p className={`${styles.nome_small}`}>Front-End Developer</p>
                </div>
            </div>
            <div className={`${styles.menu}`}>
                <NavLink className={`${styles.menu_btn}`} to="/">SOBRE</NavLink>
                <NavLink className={`${styles.menu_btn}`} to="/">PROJETOS</NavLink>
                <NavLink className={`${styles.menu_btn}`} to="/">CURRICULO</NavLink>
                <NavLink className={`${styles.menu_btn}`} to="/">CONTATO</NavLink>
            </div>
        </div>
    </header>
  )
}

export default Header