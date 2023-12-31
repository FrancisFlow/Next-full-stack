import styles from './category.module.css';
import Button from '@/components/button/Button';
import Image from 'next/image';
const CategoryPage = ({params}) => {
    return ( 
        <>
        <div className={styles.container}>
            <h1 className={styles.catTitle} >
                {params.category}
            </h1>

            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title} >
                        Test
                    </h1>
                    <p className={styles.desc} >Desc</p>
                    <Button text="See More" url="#"/ >
                </div>
                <div className={styles.imgContainer}>
                    <Image fill={true}
                    src='/images/apps.jpg'
                    alt={params.category}/>
                </div>
                
            </div>
        </div>
        </>
     );
}
 
export default CategoryPage;