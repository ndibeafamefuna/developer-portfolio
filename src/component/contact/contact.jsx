import Button from '../../layout/button/button'
import styles from './contact.module.css'
import effects from '../../assets/contact-effects.svg'
import error_icon from '../../assets/error-icon.svg'
import { Formik } from 'formik'

const Contact = () => {
  return (
    <section className={styles.contact_container}>
        <div className={styles.contact_box}>
            <div className={styles.contact_content}>
                <div className={styles.contact_text}>
                    <h2>Contact</h2>
                    <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                </div>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                        errors.email = 'Required, kindly enter email.';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.email = 'Sorry, invalid format here';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit} className={styles.contact_form}>
                             <label htmlFor="firstname">
                                <input type="text" placeholder="Name" minLength="3" maxLength="20" />
                            </label>
                        
                            <label htmlFor="email">
                                <input type="email" name="email" placeholder="Email" 
                                 onChange={handleChange}
                                 onBlur={handleBlur} 
                                 value={values.email}
                                 style={errors.email !== undefined && errors.email.length > 1 
                                 ?{borderBottom: '2px solid #ff6f5b'} 
                                 : undefined} />
                                <img src={error_icon} className={styles.error_icon}
                                style={errors.email !== undefined && errors.email.length > 1 
                                ?{display: 'block'}
                                : undefined}/>
                                {errors.email !== undefined && errors.email.length > 1 && (
                                <small>{errors.email && touched.email && errors.email}</small>)}
                                
                            </label>
                            
                            <label htmlFor="message">
                                <textarea name="message" placeholder="Message"></textarea>
                            </label>
                            
                            <div className={styles.button}>
                                <Button text="SEND MESSAGE" disable={isSubmitting} />
                            </div>


                        </form>
                    )}
                </Formik>

                
                <img src={effects} className={styles.effects} />
            </div>
           
        </div>
    
    </section>
  )
}

export default Contact