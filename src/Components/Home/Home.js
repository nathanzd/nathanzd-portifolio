import React from 'react'
import styles from './Home.module.css'
import foto from "../../Assets/react2.png"

const Home = () => {
  return (
    <div className={`${styles.home_container}`}>
      <div className={`${styles.perfil_foto}`}>
        <img src={foto}/>
      </div>
      <div className={`${styles.sobre}`}>
          <h2>Sobre</h2>
          <p>Afcionado por tecnologia e inovação sempre busco soluções criativas e eficientes. Com constância e persistência nenhum problema é grande demais.
            <br/><br/>
            Atualmente trabalho com desenvolvimento web front-end utilizando javascript, HTML, CSS e frameworks como ReactJS.
          </p>
      </div>
    </div>
  )
}

export default Home