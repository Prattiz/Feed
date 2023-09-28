import styles from "./Post.module.css";

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://randomuser.me/api/portraits/women/2.jpg" />
                    
                    <div className={styles.authorInfo}>
                        <strong>Jane Cooper</strong>
                        <span>UI Design</span>
                    </div>
                </div>

                <time title="" dateTime="">Publicado há 1hr</time>
            </header>

            <div className={styles.content}>
                
                   <p> Fala galeraa 👋 </p>

                   <p> Acabei de subir mais um projeto no meu portifa. 
                    É um projeto que fiz para uma empresa.
                    O nome do projeto é DoctorCare 🚀</p>

                    <p><a href="#">jane.design/doctorcare</a></p>
            </div>

            <form className={styles.comments}>
                <strong>Deixe seu Feedback</strong>

                <textarea 
                placeholder="deixe um comentario"
                />
                
                <footer><button type="submit">Comentar</button></footer>
               
            </form>
        </article>
    )
}