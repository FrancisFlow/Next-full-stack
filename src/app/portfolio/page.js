import styles from './portfolio.module.css'
const Portfolio = () => {
    return ( 
        <>
        <div className={styles.subheading}>
                <h2>Choose a gallery</h2>
            </div>
        <div className={styles.portfolio}>

            
            <div className={styles.works}>
                <div className={styles.workItem}>
                    <h2 className={styles.workText}>
                        Illustrations
                    </h2>
                </div>
                <div className={styles.workItem}>
                    <h2 className={styles.workText}>
                        Website
                    </h2>
                </div>
                <div className={styles.workItem}>
                    <h2 className={styles.workText}>
                        Applications
                    </h2>
                </div>

            </div>
        </div>
        </>
     );
}
 
export default Portfolio;