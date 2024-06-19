import Button from '../../layout/button/button';
import styles from './projectcard.module.css';

const Projectcard = ({img, title, tagOne, tagTwo, tagThree}) => {
  return (
    <div className={styles.project_card}>
        <div className={styles.projectcard_image}>
          <img src={img} alt={title}/>
        </div>
          <h3>{title}</h3>
          <div className={styles.project_text}>
              <p>{tagOne}</p>
              <p>{tagTwo}</p>
              <p>{tagThree}</p>
          </div>
        
        <div className={styles.button_card}>
            <div className={styles.button_content}>
              <div>
              <Button text='VIEW PROJECT' />
             </div>
              <div>
                <Button text='VIEW CODE' />
              </div>
            </div>
            
           
        </div>
    </div>
  )
}

export default Projectcard