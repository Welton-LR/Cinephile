
import styles from "./Header.module.css";

function Header () {
    return (
        <header className={styles.header}>
            <span>
                <img src="/images/Cinephile-Oficial.png" alt="Cinephile Oficial" /> 
            </span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Login</a>
            </nav>
        </header>
    );
}

export default Header;
