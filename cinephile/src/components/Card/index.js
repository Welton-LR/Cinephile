import styles from "./Card.module.css"

function Card({ id, imageUrl}){
    return(
        <section className={styles.card}>
            <a href={ `https://youtu.be/5UVaA6SGRZA?si=${id}`}target="_blank"  rel="noopener noreferrer">
            <img src={imageUrl} alt="capa"></img> 
            </a>
        </section>
     );
}

export default Card;