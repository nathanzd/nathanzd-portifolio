import React from 'react'
import styles from './Home.module.css'


const Home = ({row,text,text2,foto,title}) => {
  return (
    <div style={{flexDirection:row ? 'row':'row-reverse'}} className={`${styles.home_container}`}>
      <div className={`${styles.perfil_foto}`}>
        <img src={foto}/>
      </div>
      <div className={`${styles.sobre} ${styles.animeLeft}  `}>
          <h1 className={`${styles.animeLeft}`} >{title}</h1>
          <p>{text}
            <br/><br/>
            {text2}
          </p>
      </div>
    </div>
  )
}

export default Home