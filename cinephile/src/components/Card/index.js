import styles from "./Card.module.css"

function Card({ id, imageUrl}){
    return(
        <section className={styles.card}>
            <a href={id}target="_blank"  rel="noopener noreferrer">
            <img src={imageUrl} alt="capa"></img> 
            </a>
        </section>
     );
}

export default Card;