import React from 'react'
import styles from './Home.module.css'


const Home = ({row,text,text2,foto,title,link}) => {
    
  return (
  <div>
    <a href={link}><div id="sobre" style={{flexDirection:row ? 'row':'row-reverse'}} className={`${styles.home_container}`}>
      
        <div className={`${styles.perfil_foto}`}>
          <img src={foto}/>
        </div>
        <div className={`${styles.sobre} ${styles.animeLeft}  `}>
            <h1 >{title}</h1>
            <p>{text}
              <br/><br/>
              {text2}
            </p>
        </div>
     
    </div></a>

    <a href={link}><div className={`${styles.container}`}>
      
      <div className={`${styles.perfil_foto}`}>
        <img src={foto}/>
      </div>
      <div className={`${styles.sobre} ${styles.animeLeft}  `}>
          <h1 >{title}</h1>
          <p>{text}
            <br/><br/>
            {text2}
          </p>
      </div>
   
  </div></a>
    </div>
  )
}

export default Home