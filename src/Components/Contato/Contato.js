import React from 'react'
import styles from './Contato.module.css'

const Contato = () => {
  return (
    <div id="contato" className={`${styles.container}`}>
        <h1>Contato</h1>
        <div className={`${styles.text}`}>
            <p>Para propostas ou duvidas entre em contato.</p>
            
            <p><b>Email:</b> nathan.fe.dias@gmail.com<br/>
            <a href="https://www.linkedin.com/in/nathanzd/"><b>Linkedin</b> Nathan Ferreira</a><br/>
            <b>Celular:</b> 11 913487423
            </p>
            
            

        </div>
        
    </div>
  )
}

export default Contato