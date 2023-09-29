import styles from "./comments.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { Avatar } from "../Avatar/avatar";
import { useState } from "react";

export function Comments({content, deleteComment }){

    const [likeCount, setLikeCount ] = useState(0)

    function handleRemoveComment(){
        deleteComment(content)
    }

    function handleLikeCount(){
        setLikeCount(likeCount + 1)
    }
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Prattiz.png"/>

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.author}>
                            <strong>Thiago Pratti de Mendonça</strong>
                            <time>Cerca de 2hr atrás</time>
                        </div>
                        <button onClick={handleRemoveComment}  title="Deletar Comentário"><FaTrashAlt size={20}/></button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeCount}>
                        <BiSolidLike/> Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}