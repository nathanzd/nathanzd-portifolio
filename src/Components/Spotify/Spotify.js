import React from 'react'
import styles from './css/index.module.css'


const Spotify = () => {
  return (
    <div>
        <div className={`${styles.sidebar}`}>
        <div className={`${styles.sidebar_wrapper}`}>
            <div className={`${styles.sidebar__logo}`}>
                <img src="./images/Spotify_Logo_RGB_White.png" alt="Logo"/>
            </div>
            <div className={`${styles.sidebar__menu}`}>
                <a className={`${styles.sidebar__menu__selecionado}`} href="#" ><i className="fas fa-home"></i>Inicio</a>
                <a href="#" ><i className="fas fa-search"></i>Buscar</a>
                <a href="#" ><i className="fas fa-database"></i>Biblioteca</a>
            </div>
            <div className={`${styles.sidebar__menu}`}>
                <p className={`${styles.sidebar__menu__title}`}>Playlist</p>
                <div className={`${styles.sidebar__menu__item}`}>
                    <div className={`${styles.sidebar__menu__item__componente}`}>
                        +
                    </div>
                    <span>Criar Playlist</span>
                </div>
                <div className={`${styles.sidebar__menu__item}`}>
                    <div className={`${styles.sidebar__menu__item2__componente}`}>
                        <img src="./images/1092797.jpg"/>
                    </div>
                    <span>Musicas Curtidas</span>
                </div>
            </div>
            <div className={`${styles.sidebar__playlists}`}>
                <a href="#">Playlist 1</a>
                <a href="#">Playlist 2</a>
                <a href="#">Playlist 3</a>
                <a href="#">Playlist 4</a>
                <a href="#">Playlist 5</a>
            </div>

            <div className={`${styles.sidebar__playlists}`}>
                <a href="#">Playlist 1</a>
                <a href="#">Playlist 2</a>
                <a href="#">Playlist 3</a>
                <a href="#">Playlist 4</a>
                <a href="#">Playlist 5</a>
            </div>
            
        </div>
    </div>
    <div className={`${styles.main}`}>
        <div className={`${styles.main_wrapper}`}>
            <div className={`${styles.main__row}`}>
                <div className={`${styles.main__row__title}`}>
                    <h2>Paradas</h2>
                </div>
                <div className={`${styles.main__col}`}>
                    <img src="./images/5.jpg"/>
                    <h3>As 50 mais tocadas</h3>
                    <p>Descrição TOP 50</p>
                </div>

                <div className={`${styles.main__col}`}>
                    <img src="images/1.jpg"/>
                    <h3>As 50 mais tocadas</h3>
                    <p>Descrição TOP 50</p>
                </div>

                <div className={`${styles.main__col}`}>
                    <img src="./images/4.jpg"/>
                    <h3>As 50 mais tocadas</h3>
                    <p>Descrição TOP 50</p>
                </div>

                <div className={`${styles.main__col}`}>
                    <img src="./images/3.jpg"/>
                    <h3>As 50 mais tocadas</h3>
                    <p>Descrição TOP 50</p>
                </div>

                <div className={`${styles.main__col}`}>
                    <img src="./images/2.jpg"/>
                    <h3>As 50 mais tocadas</h3>
                    <p>Descrição TOP 50</p>
                </div>
               

            </div>

            <div className={`${styles.main__row}`}>
                <div className={`${styles.main__row__title}`}>
                    <h2>Rock</h2>
                </div>
                <div className={`${styles.main__col}`} data-image="images/black.jpg" data-artist="AC/DC" data-song="Back In Black" data-file="Assets/music_black.mp3">
                    <img src="./images/black.jpg"/>
                    <h3>Back in black</h3>
                    <p>AC/DC</p>
                </div>

                <div className={`${styles.main__col}`} data-image="images/jungle.jpg" data-artist="Guns 'N Roses" data-song="Welcome to the jungle" data-file="Assets/musica_jungle.mp3" >
                    <img src="./images/jungle.jpg"/>
                    <h3>Welcome to the Jungle</h3>
                    <p>Guns 'n Roses</p>
                </div>

            

            </div>


        </div>
    </div> 

    <div className={`${styles.player}`}>
        <div className={`${styles.player__artist}`}>

        </div>
        <div className={`${styles.player__control}`}>
            <div className={`${styles.player__control__buttons}`}>
                <a href="#"><i className="fas fa-backward"></i></a>
                <a style={{display:'none'}} id="pauseBtn" href="#"><i className="far fa-pause-circle"></i></a>
                <a id="playBtn" href="#"><i className="far fa-play-circle"></i></a>
                <a href="#"><i className="fas fa-forward"></i></a>
                
            </div>

            <div className={`${styles.player__control__progress}`}>
                <div style={{width:'0'}} className={`${styles.player__control__progress_2}`}>

                </div>
            </div>
        </div>
        

    </div>
    <audio id={`${styles.audioPlayer}`}  style={{position:'absolute', left:0, top:0, zIndex:-2, opacity:0}} controls=""></audio>

    <script src="./Js/all.min.js"></script>
    <script src="./Js/Player.js"></script>
    </div>
  )
}

export default Spotify