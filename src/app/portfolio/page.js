import Link from 'next/link';
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
                    <Link href={"/portfolio/illustrations"}>

                    <h2 className={styles.workText}>
                        Illustrations
                    </h2>
                    </Link>

                </div>
                <div className={styles.workItem}>
                    <Link href={"/portfolio/website"}>
                    <h2 className={styles.workText}>
                        Website
                    </h2>
                    </Link>
                </div>
                <div className={styles.workItem}>
                    <Link href={"/portfolio/applications"}>
                    <h2 className={styles.workText}>
                        Applications
                    </h2>
                    </Link>
                </div>

            </div>
        </div>
        </>
     );
}
 
export default Portfolio;