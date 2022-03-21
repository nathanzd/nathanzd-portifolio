import React from 'react'
import styles from './Contato.module.css'
import phone from "../../Assets/contato/telefone.png"
import email from "../../Assets/contato/o-email.png"
import linkedin from '../../Assets/contato/linkedin.png'
import github from '../../Assets/contato/github.png'

const Contato = () => {
  return (
    <div id="contato" className={`${styles.contato} ${styles.animeLeft}`}>
        <h1>Contato</h1>
        <div className={`${styles.container}`}>
              <div className={`${styles.contactContainer}`}>
                  <div className={`${styles.icon}`}>
                      <img src={phone}/>
                  </div>
                  <p>11 913487423</p>
              </div>

              <div className={`${styles.contactContainer}`}>
                  <div className={`${styles.icon}`}>
                      <img src={email}/>
                  </div>
                  <p>nathan.fe.dias@gmail.com</p>
              </div>


              <a href="https://www.linkedin.com/in/nathanzd/"><div className={`${styles.contactContainer}`}>
                  <div className={`${styles.icon}`}>
                      <img src={linkedin}/>
                  </div>
                  <p>Nathan Ferreira</p>
              </div></a>

              <a href="https://github.com/nathanzd"><div className={`${styles.contactContainer}`}>
                  <div className={`${styles.icon}`}>
                      <img src={github}/>
                  </div>
                  <p>Nathanzd</p>
              </div></a>
        </div>
    </div>
  )
}

export default Contato