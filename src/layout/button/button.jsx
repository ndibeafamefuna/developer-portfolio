import styles from "./button.module.css"

const Button = ({text, disable}) => {
  return (
    <button type="submit" disabled={disable} className={styles.button}>{text}</button>
  )
}

export default Button