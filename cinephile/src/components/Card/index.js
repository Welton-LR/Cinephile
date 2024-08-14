import styles from "./Card.module.css"

function Card(){
    return(
        <section className={styles.card}>
            <a href="https://youtu.be/5UVaA6SGRZA?si=vMBQO1FyTlZ4uzdN">
                <img src="https://www.europanet.com.br/image_gen/resizeimg.php?cod_produto=107294" target="_blank" alt="capa"></img>
            </a>
        </section>
     );
}

export default Card;