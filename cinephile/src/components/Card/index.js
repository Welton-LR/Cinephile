import styles from "./Card.module.css"

function Card(){
    return(
        <section className={styles.card}>
            <a href="https://youtu.be/5UVaA6SGRZA?si=vMBQO1FyTlZ4uzdN">
                <img src="https://oregional.com.br/media/blog/d09a97509a40437ba30391086593ae9a.jpg" target="_blank" alt="capa"></img>
            </a>
        </section>
     );
}

export default Card;