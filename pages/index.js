import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.description}>
          Which of the below statements about electricity is not true?
        </p>
        <div className={styles.column}>
          <label className={styles.label}>
            <input type="radio" value="option1" checked={true} />
            Electricity is measure in units 
          </label>
          <label className={styles.label}>
            <input type="radio" className="radio" value="option1" checked={true} />
            Electricity flows at the speed of light
          </label>
          <label className={styles.label}>
            <input type="radio" value="option1" checked={true} />
            Electricity is a primary energy source
          </label>
          
        </div>
      </div>
    </div>
  )
} 
