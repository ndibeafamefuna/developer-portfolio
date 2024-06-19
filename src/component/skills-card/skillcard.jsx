import styles from "./skillcard.module.css"

const Skillcard = ({title,text}) => {
  return (
    <div className={styles.skills_card}>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Skillcard