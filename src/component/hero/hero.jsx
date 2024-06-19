import styles from "./hero.module.css"
import Button from "../../layout/button/button"
import hero_image from "../../assets/hero-image.svg"
import tablet_hero from "../../assets/tablet-hero.png"
import circle from "../../assets/circle.svg"
import effects from "../../assets/hero-effects.svg"

const Hero = () => {
  return (
    <section className={styles.hero_container}>
        <div className={styles.hero_content}>
            <img src={effects} className={styles.effects}/>
            <h1 className={styles.desktop_text}> 
            Nice to meet you! <br/> I’m <span>Adam Keyes</span>.
            </h1>
            <h1 className={styles.tablet_text}> 
            Nice to <br /> meet you! I’m <span>Adam Keyes</span>.
            </h1>

            <p>
            Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.
            </p>
            <div className={styles.button}>
              <Button text="CONTACT ME" />
            </div>  

        </div>
        
        <div className={styles.images}>
          <img src={hero_image} alt="Portfolio image" className={styles.hero_image} />
          <img src={tablet_hero} alt="Portfolio image" className={styles.tablet_hero} />
          <img src={circle} className={styles.circle} />
        </div>
    </section>
  )
}

export default Hero