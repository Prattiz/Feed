import styles from "./comments.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { Avatar } from "../Avatar/avatar";

export function Comments(props){
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
                        <button title="Deletar Comentário"><FaTrashAlt size={20}/></button>
                    </header>
                    <p>{props.content}</p>
                </div>
                <footer>
                    <button><BiSolidLike/>
                    Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}