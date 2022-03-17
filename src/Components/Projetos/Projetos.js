import React from 'react'
import styles from "./Projetos.module.css"

const Projetos = ({img,text,title,row,project,link}) => {
  return (
    <a href={link}><div className={`${styles.projetos_container} ${styles.animeLeft}`}>
        <h1 className={`${styles.title}`}>{title}</h1>
        <div style={{flexDirection:row ? 'row':'row-reverse'}} className={`${styles.projetos_content} ${styles.animeLeft} `}>
            <div className={`${styles.projetos_img}`}>
                <img src={img}/>
            </div>
            <div className={`${styles.projetos_text}`}>
                <h1>{project}</h1>
                <p>{text}...<a href={link}><span style={{color:'rgb(0,219,252)'}}>Vejas mais</span></a> </p>
            </div>
        </div>
    </div></a>
  )
}

export default Projetos