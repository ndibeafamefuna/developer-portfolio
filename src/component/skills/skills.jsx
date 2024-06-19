import Skillcard from "../skills-card/skillcard"
import styles from "./skills.module.css"
import effects from "../../assets/hero-effects2.svg"

const Skills = () => {
  return (
    <section className={styles.skills_container}>
        
        <div className={styles.inside_container}>
             <div className={styles.skill_card}>
                <Skillcard title="HTML" text="4 years experience" />
                <Skillcard title="CSS" text="4 years experience" />
                <Skillcard title="Javascript" text="4 years experience" />
                <Skillcard title="Accessibility" text="4 years experience" />
                <Skillcard title="React" text="3 years experience" />
                <Skillcard title="Sass" text="3 years experience" /> 
            </div>

            <img src={effects} className={styles.effects} />
        </div>
       
        
       
       
    </section>
  )
}

export default Skills