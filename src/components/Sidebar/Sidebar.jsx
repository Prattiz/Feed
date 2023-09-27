import styles from "./Sidebar.module.css"

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>

            <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
             />

             <div className={styles.profile}>
                <strong></strong>
                <span>Web Developer</span>
             </div>

             <footer>
                <a href="#">Editar seu Perfil</a>
             </footer>
        </aside>
    )
}