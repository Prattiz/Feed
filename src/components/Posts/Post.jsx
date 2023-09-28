import { Avatar } from "../Avatar/avatar";
import { Comments } from "../Comments/comments";
import styles from "./Post.module.css";
import { format, formatDistanceToNow} from "date-fns";
import ptBR from "date-fns/locale/pt-BR"

export function Post({author, publishedAt, content}){

    const dateFormated = format(publishedAt, "dd 'de' LLLL 'as' HH:mm", {
        locale:ptBR
    })

    const NowDay = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix:true
    })

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    
                    <div className={styles.authorInfo}>
                        <strong>Jane Cooper</strong>
                        <span>UI Design</span>
                    </div>
                </div>

                <time title={dateFormated} dateTime={publishedAt.toISOString()}>{NowDay}</time>
            </header>

            <div className={styles.content}>
                {
                    content.map(line => {
                        if (line.type == 'paragraph'){

                            return <p>{line.content}</p>

                        } else if (line.type == 'link'){

                            return <p><a href="#">{line.content}</a></p>

                        }
                    })
                }
            </div>

            <form className={styles.comments}>
                <strong>Deixe seu Feedback</strong>

                <textarea 
                placeholder="deixe um comentario"
                />
                
                <footer><button type="submit">Comentar</button></footer>
               
            </form>

            <div className={styles.commentList}>
                <Comments/>
            </div>
        </article>
    )
}