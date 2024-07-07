
import styles from "./Header.module.css";

function Header () {
    return (
        <header className={styles.header}>
            <img src="cinephile logo.png"></img>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </header>
    );
}

export default Header;
