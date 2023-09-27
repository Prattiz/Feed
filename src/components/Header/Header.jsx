import styles from "./Header.module.css";

import IgniteLogo from "../../assets/Ignite.svg" 

export function Header(){
    return(
        <header className={styles.headerM}>
            <img src={IgniteLogo} alt="Logo" />
        </ header>
    )
}

