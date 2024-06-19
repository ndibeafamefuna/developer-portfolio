import styles from "./header.module.css"
import github from "../../assets/github.svg"
import github_hover from "../../assets/github-hover.svg"
import frontend from "../../assets/frontend-mentor.svg"
import frontend_hover from "../../assets/frontend-mentor-hover.svg"
import linkedin from "../../assets/linkedin.svg"
import linkedin_hover from "../../assets/linkedin-hover.svg"
import twitter from "../../assets/twitter.svg"
import twitter_hover from "../../assets/twitter-hover.svg"

const Header = () => {
  return (
    <header>
      <h2>adamkeyes</h2>

      <div className={styles.icon_box}>
        <img className={styles.github} src={github} />
        <img className={styles.github_hover} src={github_hover} />
        <img className={styles.frontend} src={frontend} />
        <img className={styles.frontend_hover} src={frontend_hover} />
        <img className={styles.linkedin} src={linkedin} />
        <img className={styles.linkedin_hover} src={linkedin_hover} />
        <img className={styles.twitter} src={twitter} />
        <img className={styles.twitter_hover} src={twitter_hover} />
      </div>
      
    </header>
  )
}

export default Header