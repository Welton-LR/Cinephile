
import styles from "./Header.module.css";

function Header () {
    return (
        <header className={styles.header}>
            <span>Cinephile</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Login</a>
            </nav>
        </header>
    );
}

export default Header;
