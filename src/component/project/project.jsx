import { projectData } from "../../../data"
import Button from "../../layout/button/button";
import Projectcard from './../project-card/projectcard';
import styles from './project.module.css'

const Project = () => {
  return(
    <section className={styles.project_container}>
        <div className={styles.project_heading}>
            <h2>Projects</h2>
            <div className={styles.button}>
                <Button text='CONTACT ME' />
            </div>
        </div> 
        <div className={styles.project_card}>
            {projectData.map((item, idx) => {
                return <Projectcard 
                    img={item.img} 
                    title={item.title} 
                    tagOne={item.tagOne} 
                    tagTwo={item.tagTwo} 
                    tagThree={item.tagThree}
                    key={idx} /> 
            })}
        </div>
        
    </section>
  )
}

export default Project