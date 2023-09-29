import { useState } from "react";
import { Avatar } from "../Avatar/avatar";
import { Comments } from "../Comments/comments";
import styles from "./Post.module.css";
import { format, formatDistanceToNow} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";



export function Post({author, publishedAt, content}){

    const dateFormated = format(publishedAt, "dd 'de' LLLL 'as' HH:mm", {
        locale:ptBR
    });
    const NowDay = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix:true,
    });
    
    const [comments, setComments] = useState([]);
    const [ newCommentText, setNCT] = useState("")
    
    

    function handleCreateComment(e){
        e.preventDefault()

        const NewCommentText = e.target.comment.value
        
        setComments([...comments, NewCommentText])
        setNCT('')
    }

    function handleNewComentChange(){
        event.target.setCustomValidity("")
        setNCT(event.target.value)
    }

    function deleteComment(Dcomment){
        const commentsWithoutDel = comments.filter(comment =>{
            return comment !== Dcomment
        })

        setComments(commentsWithoutDel)
    }

    function handleInvalid(){
        event.target.setCustomValidity("Preencha o campo para comentar")
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={dateFormated} dateTime={publishedAt.toISOString()}>{NowDay}</time>
            </header>

            <div className={styles.content}>
                {
                    content.map(line => {

                        if(line.type == 'paragraph'){
                            return <p key={line.content}>{line.content}</p>

                        }else if(line.type == 'link'){
                            return <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateComment} className={styles.comments}>
                <strong>Deixe seu Feedback</strong>

                <textarea 
                placeholder="deixe um comentario"
                name="comment"
                onChange={handleNewComentChange}
                value={newCommentText}
                required
                onInvalid={handleInvalid}
                />
                
                <footer><button 
                type="submit" 
                disabled={newCommentText.length === 0}>
                    Comentar
                </button></footer>
               
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return <Comments  key={comment} deleteComment={deleteComment} content={comment}/>
                    })
                }
            </div>
        </article>
    )
}